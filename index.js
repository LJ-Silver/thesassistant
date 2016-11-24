var cool = require("cool-ascii-faces");
var express = require("express");

var app= express();

app.get('/', fuction(req, res){
	res.send(cool);
	console.log('New request');

});


app.listen(5003);