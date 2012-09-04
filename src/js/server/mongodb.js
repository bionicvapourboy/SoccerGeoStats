// ExpressJS
var express = require('express');
var app = express();
app.enable("jsonp callback");
app.use(express.bodyParser());

// init DB
var databaseUrl = "soccergeostats";
var collections = ["match"];
var db = require("mongojs").connect(databaseUrl, collections);

//Find all Matche
app.get("/select/match/:id", function(req, res, next) {
	if (req.params.id == "*") {
		query = {};
		db.match.find(query, function(err, models) {
			if (err || !models) {
				res.send("Error Fetching the Model: " + err);
			} else {
				if (req.query.callback == null || req.query.callback == "") {
					res.send(JSON.stringify(models));
				} else {
					res.send(req.query.callback + "(" + JSON.stringify(models) + ");");
				}
			}
		});
	} else {
		query = {_id: db.ObjectId(req.params.id)};
		db.match.findOne(query, function(err, models) {
			if (err || !models) {
				res.send("Error Fetching the Model: " + err);
			} else {
				if (req.query.callback == null || req.query.callback == "") {
					res.send(JSON.stringify(models));
				} else {
					res.send(req.query.callback + "(" + JSON.stringify(models) + ");");
				}
			}
		});
	}
});

//Listen
app.listen(7000);
console.log('Listening on port 7000 for MongoDB: http://localhost:7000/');