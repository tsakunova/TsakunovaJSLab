/* Implement function that can “add” objects
example: 
var a = {x: 1};
var b = {x: 2, y: 2};
add(a, b) // {x: 3, y: 2}
add(a, b, a) // {x: 4, y: 2} */

function add(...args) {
  const result = {};
  args.forEach(arg => {
    Object.keys(arg).forEach(key => {
      result[key] = result[key] ? result[key] + arg[key] : arg[key]
    })
  })
  return result;
}

const a = {
  x: 1
};

const b = {
  x: 2,
  y: 2
};

console.log(add(a, b));
console.log(add(a, b, a));

/* 
Optional
* Create additional function that can intersect object by property names and values
example:
var a = { x: 0, y: 1, z: 2 };
var b = { x: 0, y: 1, z: 3,  a: 1, b: 2 };

intersect(a,b) // { x: 0, y: 1 } */

const x = {
  x: 0,
  y: 1,
  z: 2
};

const y = {
  x: 0,
  y: 1,
  z: 3,
  a: 1,
  b: 2
};

const z = {
  y: 1,
  z: 3,
  b: 2
};

function intersect(firstArg, ...args) {
  const obj = {};
  for (const key in firstArg) {
    const isEveryHasEntry = args.every(el => el[key] === firstArg[key]);
    isEveryHasEntry && (obj[key] = firstArg[key]);
  }
  return obj;
}

console.log(intersect(x, y));
console.log(intersect(x, y, z))