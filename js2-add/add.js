/* Implement function that can “add” objects
example: 
var a = {x: 1};
var b = {x: 2, y: 2};
add(a, b) // {x: 3, y: 2}
add(a, b, a) // {x: 4, y: 2} */

function add(...args){
  return args.reduce((accum, currObj) => {
    Object.entries(currObj)
    .forEach(([key, val]) => {
        return accum[key]
        ? accum[key] += val
        : accum[key] = val;
      });
    return accum;
  }, {});
}
let a = {x: 1};
let b = {x: 2, y: 2};
console.log(add(a, b));
console.log(add(a,b,a));

/* 
Optional
* Create additional function that can intersect object by property names and values
example:
var a = { x: 0, y: 1, z: 2 };
var b = { x: 0, y: 1, z: 3,  a: 1, b: 2 };

intersect(a,b) // { x: 0, y: 1 } */

function intersect(){

}