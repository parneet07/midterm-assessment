
let numberofChairsinarow =process.argv[2];
let numberofrows=process.argv[3];
console.log(numberofChairsinarow*numberofrows);

//there are 2 variables which will calculate the number total number of chairs

//arrow function(bonus)

let a=numberofChairsinarow;
let b=numberofrows;
let multiply=(num1,num2)=>(num1*num2);
console.log(multiply(a,b));
//above function is done using arrow function