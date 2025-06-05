

const fs = require('fs');

const userrequesthandler = (req,res)=>{
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
    //chunk when large amount of data is going to be processed.
    const body =[];
    req.on('data',chunk =>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on("end",()=>{
      const result = Buffer.concat(body).toString();
      console.log(result);
      const params = new URLSearchParams(result); //to decode the result as encoded result is passed 
      //new URLSearchParam used the encode it
      //longmethod
      /*
      const jsonObj = {}
      for(const[key,value] of params.entries()){
        jsonObj[key]=value;
      }*/
     //short methgod
     const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fs.writeFileSync('user.txt',JSON.stringify(bodyObj));
    })
   
    res.statusCode = 302; // redirection
    res.setHeader('Location','/')

  }
  
  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head>');
  res.write('<body><h1>Like /Share /Subscribe</h1></body>')
  res.write('</html>')
 return res.end();

}

module.exports = userrequesthandler;
