var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"../public"));

app.get("/", function(req, res) {
	res.render("index");
});

var urlPort = process.env.PORT || "3000";
app.listen(urlPort, process.env.IP, function() {
	console.log("Portfolio server has started");
});