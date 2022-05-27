//We had some questions about MVC today 
// Lets build a simple todo app using mvc in order to better understand it 
// I like using a fast food burger joint to explain it 
// the view is the client that will order from the restaurant
// the server is the restaurant 
    // the controller is the waiter 
    // the model is the cook
// lets try to make this simple build to get started 

var path = require('path')
var express = require('express');
var app = express();

app.use("/", express.static("./client"))

// app.use(express.static('./public'));
// app.get('/', function (req, res) {
//    res.sendFile( __dirname + "/public/" + "index.html" );
// })

app.get('/get-burrito', function (req, res) {
   // Prepare output in JSON format
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
   res.end(JSON.stringify("we are still building the kitchen"));
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})