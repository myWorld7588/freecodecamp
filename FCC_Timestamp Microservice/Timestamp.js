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
