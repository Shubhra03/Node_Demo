const express = require('express');
const path = require('path');
const { registeredHomes } = require('./hostrouter');
const userRouter = express.Router();


userRouter.get("/",(req, res,next) => {
   // console.log(`Request method: ${req.method} Request URL: ${req.url} `);
     // Send a response to the client
     console.log(registeredHomes);
     res.render('user',{registeredHomes}) // Send the user.html file
});  

module.exports = userRouter;