
var path = require("path");

// Creating a function that exports all path information.

module.exports = function(app) {

// If no path is typed you automatically go to the home page.

		app.get("/", function(req, res) {
		  res.sendFile(path.join(__dirname, "../public/home.html"));
		});

// Home page path.

		app.get("/home", function(req, res) {
		  res.sendFile(path.join(__dirname, "../public/home.html"));
		});

// Survey page path.

		app.get("/survey", function(req, res) {
		  res.sendFile(path.join(__dirname, "../public/survey.html"));
		});

};