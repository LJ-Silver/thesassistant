var express = require("express");

var app= express();

app.listen(process.env.PORT || 5003);

app.get("/time",(req,res) => {

	var now = new Date();
	res.write("It is "+now);
	res.end();
})
