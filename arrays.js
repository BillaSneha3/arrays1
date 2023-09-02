let myarray=["Apple","banana","orange","Guava",25,30];
console.log(myarray);
console.log(myarray.length)

myarray.push("Grapes");
console.log(myarray);

myarray.pop();
console.log(myarray);

myarray.shift();
console.log("Removed item is:",myarray);

myarray.unshift("Grapes");
console.log(myarray);

let index=myarray.indexOf("banana");
console.log("index value of banana is:",index);

console.log(myarray.lastIndexOf());

let array1=[1,12,14,15];
let array2=[25,28,30];
var concatination=array1.concat(array2);
console.log(concatination);

const join=myarray.join(" - ");
console.log(join);

const order=array1.sort();
console.log(order);

const check=myarray.includes("sneha");
console.log(check);

part=myarray.slice(1,4);
console.log(part);

///functions

