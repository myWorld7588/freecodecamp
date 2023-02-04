// Your responses should have the following structures.

/* Exercise:

{
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
*/

/* User:

{
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
*/

/* Log:

{
  username: "fcc_test",
  count: 1,
  _id: "5fb5853f734231456ccb3b05",
  log: [{
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
  }]
}
*/

/* Tests

You should provide your own project, not the example URL.
You can POST to /api/users with form data username to create a new user.
The returned response from POST /api/users with form data username will be an object with username and _id properties.
You can make a GET request to /api/users to get a list of all users.
The GET request to /api/users returns an array.
Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.
You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.
A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.
The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.
The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.
The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.
You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.
*/



const mySecret = process.env['MONGO_URI']
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  "username": String,
})

const exerciseSchema = new Schema({
  "username": String,
  "date": Date,
  "duration": Number,
  "description": String,
})

const logSchema = new Schema({
  "username": String,
  "count": Number,
  "log": Array,
})


// Models
const UserInfo = mongoose.model('userInfo', userSchema);
const ExerciseInfo = mongoose.model('exerciseInfo', exerciseSchema);
const LogInfo = mongoose.model('logInfo', logSchema);

// Config
mongoose.connect(mySecret, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
  () => { console.log("Connected to MONGO BONGO DB") }
)


// Middlware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// #1 POST to /api/users with form data username to create a new user
app.post('/api/users', (req, res) => {
  UserInfo.find({ "username": req.body.username }, (err, userData) => {
    if (err) {
      console.log("Error with server=> ", err)
    } else {
      if (userData.length === 0) {
        const test = new UserInfo({
          "_id": req.body.id,
          "username": req.body.username,
        })

        test.save((err, data) => {
          if (err) {
            console.log("Error saving data=> ", err)
          } else {
            res.json({
              "_id": data.id,
              "username": data.username,
            })
          }
        })
      } else {
        res.send("Username already Exists")
      }
    }
  })
})


// #2 POST to /api/users/:_id/exercises with form data description, duration, and optionally date
app.post('/api/users/:_id/exercises', (req, res) => {
  let idJson = { "id": req.params._id };
  let checkedDate = new Date(req.body.date);
  let idToCheck = idJson.id;

  // If no date is supplied, the current date will be used.
  let noDateHandler = () => {
    if (checkedDate instanceof Date && !isNaN(checkedDate)) {
      return checkedDate
    } else {
      checkedDate = new Date();
    }
  }

  UserInfo.findById(idToCheck, (err, data) => {
    noDateHandler(checkedDate);

    if (err) {
      console.log("error with id=> ", err);
    } else {
      const test = new ExerciseInfo({
        "username": data.username,
        "description": req.body.description,
        "duration": req.body.duration,
        "date": checkedDate.toDateString(),
      })

      test.save((err, data) => {
        if (err) {
          console.log("error saving=> ", err);
        } else {
          console.log("saved exercise successfully");
          res.json({
            "_id": idToCheck,
            "username": data.username,
            "description": data.description,
            "duration": data.duration,
            "date": data.date.toDateString(),
          })
        }
      })
    }
  })
})


// #3 

app.get('/api/users/:_id/logs', (req, res) => {
  const { from, to, limit } = req.query;
  let idJson = { "id": req.params._id };
  let idToCheck = idJson.id;

  // Check ID
  UserInfo.findById(idToCheck, (err, data) => {
    var query = {
      username: data.username
    }

    if (from !== undefined && to === undefined) {
      query.date = { $gte: new Date(from) }
    } else if (to !== undefined && from === undefined) {
      query.date = { $lte: new Date(to) }
    } else if (from !== undefined && to !== undefined) {
      query.date = { $gte: new Date(from), $lte: new Date(to) }
    }

    let limitChecker = (limit) => {
      let maxLimit = 100;
      if (limit) {
        return limit;
      } else {
        return maxLimit
      }
    }

    if (err) {
      console.log("error with ID=> ", err)
    } else {

      ExerciseInfo.find((query), null, { limit: limitChecker(+limit) }, (err, docs) => {
        let loggedArray = [];
        if (err) {
          console.log("error with query=> ", err);
        } else {

          let documents = docs;
          let loggedArray = documents.map((item) => {
            return {
              "description": item.description,
              "duration": item.duration,
              "date": item.date.toDateString()
            }
          })

          const test = new LogInfo({
            "username": data.username,
            "count": loggedArray.length,
            "log": loggedArray,
          })

          test.save((err, data) => {
            if (err) {
              console.log("error saving exercise=> ", err)
            } else {
              console.log("saved exercise successfully");
              res.json({
                "_id": idToCheck,
                "username": data.username,
                "count": data.count,
                "log": loggedArray
              })
            }
          })
        }
      })
    }
  })
})


// #4
app.get('/api/users', (req, res) => {
  UserInfo.find({}, (err, data) => {
    if (err) {
      res.send("No Users");
    } else {
      res.json(data);
    }
  })
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
