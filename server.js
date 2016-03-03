var express = require("express");

var app = express();

app.use(express.static('public'));

app.get("/", function(req, res, next){
   res.send("Node at IDWEAVER by David!!!"); 
});

module.exports = app;
