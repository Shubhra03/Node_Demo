
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
  console.log("server created");
  console.log(req.url,req.method);
  if (req.url==='/'){
  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>Heading</title></head>')
  res.write('<body><h1>Enter some details:</h1>')
  res.write('<form action="/submit" method = "POST">')
  res.write('<input type="text" name="username" placeholder = "Enter some details"><br>')
  res.write('<label for="male">Male</label>')
  res.write('<input type="radio" id = "male " name ="gender" value ="male"/>')
  res.write('<label for="male">FeMale</label>')
  res.write('<input type="radio" id = "Female " name ="gender" value ="Female"/>')
  res.write('<br><input type ="submit" value="submit">')
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  }
  else if(req.url.toLowerCase() === '/submit' && req.method == "POST"){
    fs.writeFileSync('user.txt','shubhra');
    res.statusCode = 302; // redirection
    res.setHeader('Location','/')

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