const http = require('http');
const syntax = require('./syntax')
const debugMessage = require('./Runtime');
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  syntax();
  debugMessage()
});
const port = 3002;
server.listen(port,()=>{
  console.log(`server is running at port ${port}` );
})