import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";
import { v4 } from "uuid";
import * as yup from "yup";

const docClient = new AWS.DynamoDB.DocumentClient();

const tableName = "BarTable";
const headers = {
  "content-type": "application/json",
};

const schema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  unit: yup.string().required(),
});

export const createIngredient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const reqBody = JSON.parse(event.body as string);
    await schema.validate(reqBody, { abortEarly: false });

    const ingredient = {
      ...reqBody,
      ingredientID: v4(),
    };

    await docClient
      .put({
        TableName: tableName,
        Item: ingredient,
      })
      .promise();

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(ingredient),
    };
  } catch (error) {
    return handleError(error);
  }
};

class HttpError extends Error {
  constructor(public statusCode: number, body: Record<string, unknown>) {
    super(JSON.stringify(body));
  }
}

const fetchIngredientById = async (id: string) => {
  const output = await docClient
    .get({
      TableName: tableName,
      Key: {
        ingredientID: id,
      },
    })
    .promise();

  if (!output.Item) {
    throw new HttpError(404, {
      error: "Not found",
    });
  }
  return output.Item;
};

const handleError = (e: unknown) => {
  if (e instanceof yup.ValidationError) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        errors: e.errors,
      }),
    };
  }
  if (e instanceof SyntaxError) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: `Invalid body format: ${e.message}`,
      }),
    };
  }
  if (e instanceof HttpError) {
    return {
      statusCode: e.statusCode,
      headers,
      body: e.message,
    };
  }
  throw e;
};

export const getIngredient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const ingredient = await fetchIngredientById(event.pathParameters?.id as string);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(ingredient),
    };
  } catch (error) {
    return handleError(error);
  }
};

export const updateIngredient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const id = event.pathParameters?.id as string;
    await fetchIngredientById(id);
    const reqBody = JSON.parse(event.body as string);
    await schema.validate(reqBody, { abortEarly: false });
    const ingredient = {
      ...reqBody,
      ingredientID: id,
    };

    await docClient
      .put({
        TableName: tableName,
        Item: ingredient,
      })
      .promise();

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(ingredient),
    };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteIngredient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const id = event.pathParameters?.id as string;
    await fetchIngredientById(id);
    await docClient
      .delete({
        TableName: tableName,
        Key: {
          ingredientID: id,
        },
      })
      .promise();
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  } catch (error) {
    return handleError(error);
  }
};

export const listIngredient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const output = await docClient
    .scan({
      TableName: tableName,
    })
    .promise();
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(output.Items),
  };
};
