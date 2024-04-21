const express = require('express');
const morgan = require('morgan');
const app = express();


//tells express to look for view templates in the views directory
app.set("views", "./views");
//tells express to use the Pug view engine. There are many view engines
//for express. Pug is at the top of the list.
app.set("view engine", "pug");

//express.static tells our application where to look for static assets
//this method returns a function which is called "middleware".
//Express is notified about the middleware with the app.use method
//Now, express will call the middleware each time it recieves an HTTP request
//So when a request for something within the public folder is called, this allows
//for us to get the response back to the browser
app.use(express.static("public"));
//sets the output log format to the "common" format which is a standard in Apache web servers
//Example log: 127.0.0.1 - - [26/Oct/2019:23:48:48 +0000] "GET /english HTTP/1.1" 200 823
//             IP        -  remote user if any [timestamp] "method /requested resource HTTP version" response code bytes
app.use(morgan("common"));

// const writeLog = (req, res) => {
//   let timeStamp = String(new Date()).substring(4, 24); //Mmm dd YYYY HH:MM:SS
//   console.log(`${timeStamp} ${req.method} ${req.originalUrl} ${res.statusCode}`);
// };

//This is a "route". This one specifically handles HTTP GET requests for the path "/".
//The callback is sometimes called a route controller or route handler that "get" calls when it recieves
//an HTTP request. Here, we are using res (response) .send to issue a simple text response
app.get('/', (req, res) => {
  //.render renders the view template file with the argument name by converting
  //it to HTML and sending it to the client (browser)
  res.redirect('/english');
});

app.get('/english', (req, res) => {
  res.render('hello-world-english');
  // writeLog(req, res);
});

app.get('/french', (req, res) => {
  res.render('hello-world-french');
  // writeLog(req, res);
});

app.get('/serbian', (req, res) => {
  res.render('hello-world-serbian');
  // writeLog(req, res);
});

app.get('/japanese', (req, res) => {
  res.render('hello-world-japanese');
  // writeLog(req, res);
});
//This method takes a port number. The second arg "localhost" is provided to only listen to
//connections from localhost (the local computer). If you omit the second argument, the app will
//accept connections from anywhere on the internet that can reach our system. The callback
//argument is called when the listen method is ready to start processing requests
app.listen(3000, 'localhost', () => {
  console.log("Listening to port 3000.");
});