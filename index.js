
const http = require('http');

const server = http.createServer((req,res)=>{
  console.log("server created");
  console.log(req.url, req.headers,req.method);
  if(req.url === '/'){
    res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head>');
  res.write('<body><h1>welcome to home</h1></body>')
  res.write('</html>')
 res.end();

  }
  else if (req.url === '/product'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>Products</h1></body>')
    res.write('</html>')
   res.end();
  }
  else{
 
  }
  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head>');
  res.write('<body><h1>Like /Share /Subscribe</h1></body>')
  res.write('</html>')
 res.end();

})

const port = 3000;
server.listen(port,()=>{
  console.log(`server is running at port ${port}` );
})