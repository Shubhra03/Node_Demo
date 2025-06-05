
const http = require('http');
const handler1 = require('./index')

const server = http.createServer(handler1);

const port = 3000;
server.listen(port,()=>{
  console.log(`server is running at port ${port}` );
})