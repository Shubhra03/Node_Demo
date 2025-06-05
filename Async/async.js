const fs = require('fs');
console.log('1.start of script');



//asynchronous non-blocking operation
console.log('4.Reading file asynchronuously');
fs.readFile('user-details.txt','utf-8',(err)=>{
  if (err) throw err;
  console.log('6.asynchronous read complete');

});

//synchronous blocking operation
console.log('2.Reading file synchronuously');
const datasync = fs.readFileSync('user-details.txt','utf-8');
console.log('3.synchronous read complete');



console.log('5.end of script')