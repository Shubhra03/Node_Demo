const express = require('express');
const path = require('path');

//import userrouter here
 const userRouter = require('./routes/userRouter'); // Import the user router
 const {hostRouter} = require('./routes/hostrouter'); // Import the host router
const bodyParser = require('body-parser'); // Import body-parser to handle form data
const app = express();
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(userRouter); // Use the user router for handling requests

app.use('/host',hostRouter); // Use the host router for handling requests

app.use((req, res, next) => {
    res.status(404).sendFile((path.join(__dirname, './views/Error.html') )); // Handle 404 errors
});
const port = 3002;  
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})