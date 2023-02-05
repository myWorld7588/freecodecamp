// Tests
// You should provide your own project, not the example URL.
// A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
// A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
// A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
// Your project can handle dates that can be successfully parsed by new Date(date_string)
// If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
// An empty date parameter should return the current time in a JSON object with a unix key
// An empty date parameter should return the current time in a JSON object with a utc key


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

app.get('/api/:date?', function(req, res){
  const givenDate = req.params.date;
  let date;

  // Check if no date provided
  if (!givenDate) {
    date = new Date();
  } else {
    // check if unix time: number string multiplied by 1 gives number, data string gives NaN
    const checkUnix = givenDate * 1;
    date = isNaN(checkUnix) ? new Date(givenDate) : new Date(checkUnix);
  }

  // Check if Format is valid
  if (date == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    const unix = date.getTime();
    const utc = date.toUTCString();
    res.json({ unix, utc });
  }
})

// Listen for request
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
