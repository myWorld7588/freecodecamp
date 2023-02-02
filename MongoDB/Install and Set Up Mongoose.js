// set up a MongoDB Atlas database and import the required packages to connect to it.

const mySecret = process.env['MONGO_URI']
require('dotenv').config();
mongoose = require("mongoose");


console.log(process.env.MONGO_URI)

mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });
