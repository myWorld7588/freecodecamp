// Tests

// You should provide your own project, not the example URL.
// You can submit a form that includes a file upload.
// The form file input field has the name attribute set to upfile.
// When you submit a file, you receive the file name, type, and size in bytes within the JSON response.


// initialize project
var express = require('express');
var cors = require('cors');

// Multer npm package to handle file uploading.
var multer = require('multer');
require('dotenv').config()

// node app starts
var app = express();
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

// Enable CORS
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use((req, res, next) => {
  console.log("method: " + req.method + "  |  path: " + req.path + "  |  IP - " + req.ip);
  next();
});


// ROUTES - GET & POST request

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(req.file);
  if (req.file) {
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    });
  } else {
    res.json("No file found");
  }
});

// Listen for request
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
