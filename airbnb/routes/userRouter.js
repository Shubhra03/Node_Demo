const express = require('express');
const path = require('path');
const userRouter = express.Router();


userRouter.get("/",(req, res,next) => {
    console.log(`Request method: ${req.method} Request URL: ${req.url} `);
     // Send a response to the client
    
     res.sendFile(path.join(__dirname, '../views/user.html')); // Send the user.html file
});  

module.exports = userRouter;