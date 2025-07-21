const express = require('express');
const path = require('path');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    console.log('Middleware 2');
    // Send a response to the client
   res.render('add-home',{registeredHomes,PAGE_TITLE:'Add home'})  // Send the added-home.html file
    });

const registeredHomes = []; // Array to store registered homes
hostRouter.post("/add-home", (req, res, next) => {
    console.log("Middleware 3", req.body);
    
     registeredHomes.push({home: req.body.location,name:req.body.name})
   res.render('added-home',{registeredHomes,PAGE_TITLE:'Added home'})  // Send the added-home.html file
});


exports.hostRouter = hostRouter; // Export the host router to be used in app.js
exports.registeredHomes = registeredHomes; // Export the registered homes array