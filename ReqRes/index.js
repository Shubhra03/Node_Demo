
const http = require('http');

const server = http.createServer((req,res)=>{
  console.log("server created");
  console.log(req.url,req.method);
  if(req.url === '/'){
    res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head></br>');
  res.write('<body><a href ="http://localhost:3000/Home">Home</a></br>')
  res.write('<body><a href ="http://localhost:3000/About">About</a></br>')
  res.write('<body><a href ="http://localhost:3000/Product">Products</a></br>')
  res.write('<body><a href ="http://localhost:3000/settings">Settings</a></br>')
  res.write('</html>')
  return res.end();

  }
  if(req.url === '/Home'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>HOME</h1></body>')
    res.write('</html>')
   return res.end();
  }
  else if(req.url === '/About'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>About</h1></body>')
    res.write('</html>')
   return res.end();

  }
  else if(req.url === '/Product'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>Product</h1></body>')
    res.write('</html>')
   return res.end();

  }
  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head>');
  res.write('<body><h1>Like /Share /Subscribe</h1></body>')
  res.write('</html>')
 return res.end();

})

const port = 3000;
server.listen(port,()=>{
  console.log(`server is running at port ${port}` );
})