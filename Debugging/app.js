const http = require('http');
const syntax = require('./syntax')
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  syntax();
});
const port = 3002;
server.listen(port,()=>{
  console.log(`server is running at port ${port}` );
})