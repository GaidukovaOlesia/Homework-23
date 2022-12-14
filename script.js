
let firstObject = { x: 10, y: 20 };
let secondObject = { z: 30 };
let thirdObject = { x: 10 };
let fourthObject = { x: 20, y: 30 };

function assignObjects(obj1, obj2){
return Object.assign({},obj1, obj2)
}
console.log(assignObjects(firstObject,secondObject));
console.log(assignObjects(thirdObject, fourthObject));
