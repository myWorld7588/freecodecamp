// Use model.find() to Search Your Database

// In its simplest usage, Model.find()accepts a query document (a JSON object) as the first argument, 
// then a callback. It returns an array of matches. It supports an extremely wide range of search options. Read more in the docs.

Person.find({name: 'Kris', age: 28}, (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
})

const findPeopleByName = function(personName, done) {
  Person.find({name: personName}, (error, arrayOfResults) => {
    if(error) {
      console.log(error)
    } else {
      done(null, arrayOfResults)
    }
  })
  // done(null /*, data*/);
};
