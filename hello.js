const express = require('express');
const app = express();


//tells express to look for view templates in the views directory
app.set("views", "./views");
//tells express to use the Pug view engine. There are many view engines
//for express. Pug is at the top of the list.
app.set("view engine", "pug");

//This is a "route". This one specifically handles HTTP GET requests for the path "/".
//The callback is sometimes called a route controller or route handler that "get" calls when it recieves
//an HTTP request. Here, we are using res (response) .send to issue a simple text response
app.get('/', (req, res) => {
  //.render renders the view template file with the argument name by converting
  //it to HTML and sending it to the client (browser)
  res.render('hello-world-english');
});

//This method takes a port number. The second arg "localhost" is provided to only listen to
//connections from localhost (the local computer). If you omit the second argument, the app will
//accept connections from anywhere on the internet that can reach our system. The callback
//argument is called when the listen method is ready to start processing requests
app.listen(3000, 'localhost', () => {
  console.log("Listening to port 3000.");
});