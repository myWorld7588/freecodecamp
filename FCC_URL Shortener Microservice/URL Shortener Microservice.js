require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');
// Basic Configuration
const port = process.env.PORT || 3000;
var linkList = [];
var id = 0;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(express.urlencoded({extended: true}));
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// API endpoint
app.post('/api/shorturl', (req, res) => {
  let urlStr  = new URL(req.body.url).hostname;
  console.log(urlStr);
  dns.lookup(urlStr, (err) => {
    if(err) {
      res.json({error:"Invalid URL"});
    } else {
      id++;
      const newShortURL = { original_url : req.body.url, short_url : id};
      linkList.push(newShortURL);
      res.json(newShortURL);
    }
  })
});

app.get('/api/shorturl/:id', (req, res) => {
  let urlId = req.params.id;
  let link = linkList.find(l => l.short_url == urlId);
  if(link !== undefined) {
    res.redirect(link.original_url);
  } else {
    res.json({
      error: 'No short url'
    });
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
