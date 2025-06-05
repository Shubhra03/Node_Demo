
console.log('1.start of the script');

//microtask queue(promise)
Promise.resolve().then(()=>console.log('2.microtask 1'));   //priority 1

//timer
setTimeout(() => {
  console.log('1.timmer 1')// priority 2
}, 0);

//i/o
const fs = require('fs'); //priority 4
fs.readFile('user-details.txt',()=>{
  console.log('6.I/o');

});

//check queue
setImmediate(()=>console.log('5.immediate'));//priority 3

// close queue
process.on('exit',(code)=>{
  console.log('7.exit event')//priory 5
})

console.log('7.end of script')