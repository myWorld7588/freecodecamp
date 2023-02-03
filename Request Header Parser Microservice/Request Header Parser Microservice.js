// Tests
// You should provide your own project, not the example URL.
// A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
// A request to /api/whoami should return a JSON object with your preferred language in the language key.
// A request to /api/whoami should return a JSON object with your software in the software key.

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



// API endpoint
// For APIs, an endpoint can include a URL of a server or service. 
// Each endpoint is the location from which APIs can access the resources they need to carry out their function.

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// *** SOLUTION ***

app.get("/api/whoami", (req, res) => {
  const response = {
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  }
  // console.log(JSON.stringify(req.headers, null, 2))
  console.log(JSON.stringify(response, null, 2))
  res.json(response)
})

// *** END SOLUTION ***
