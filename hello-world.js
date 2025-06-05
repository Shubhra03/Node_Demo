const { log } = require('console');
const fs = require('fs');
let a = 5;
let b = 6;
let sum = a+b;
let product = a*b;
let data = `Sum: ${sum}\nProduct: ${product}`;
console.log(data);

//write the data to a local file
fs.writeFile('output.txt',data,(err)=>{
  if(err) throw err;
  console.log("data written in file")
})