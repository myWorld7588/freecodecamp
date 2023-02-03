// server.js
// where your node app starts

// Initialize Project
var express = require('express');
var app = express();

// Enable CORS 
// https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
// API remotely test by FCC

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  
// optionsSuccessStatus: Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.
// https://expressjs.com/en/resources/middleware/cors.html

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
