const express = require('express');
const app = express();
 app.get("/",(req,res,next)=>{
    console.log(`req method: ${req.method} Request URL: ${req.url}`);
    res.send('hello'); // Call the next middleware function in the stack
 })

 app.get("/submit",(req,res,next)=>{
    console.log('Middleware 2');
    res.send(`
        <form action="/submit" method="POST">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="email" name="email" placeholder="Enter your email">
        <button type="submit">Submit</button>
        </form
        
        `); // Send a response to the client
 });
app.post("/submit",(req,res,next)=>{
    res.send('Form submitted successfully!'); // Send a response to the client
 });

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
