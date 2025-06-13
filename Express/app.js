//internal module
const http = require('http');

//extrnal module
const express = require('express');

//local module
const syntax = require('./syntax')
const debugMessage = require('./Runtime');

const app = express(); //app contains a function with req,res parameter

app.use("/",(req, res, next) => {
  console.log(`Middleware 1 - Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); // Call the next middleware function in the stack
})

app.use("/submit",(req, res, next) => {
  console.log('Middleware 2');
  res.send('Hello from Middleware 2'); // Send a response to the client
  
})

app.get("/detail",(req, res, next) => {
  console.log('middleware 3 no redirection because of next() not called');
   res.send('Hello from Middleware 3');
})


const port = 3002;
app.listen(port,()=>{
  console.log(`server is running at port ${port}` );
})