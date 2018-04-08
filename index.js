// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var path = require('path')
var favicon = require('serve-favicon');
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var port = 8080

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/frontend/dist'));
app.use(favicon(path.join(__dirname, 'frontend','static','favicon.png')));

app.get('/', )

// START THE SERVER
// ====================================
app.listen(port);
console.log('Magic happens on port ' + port);
