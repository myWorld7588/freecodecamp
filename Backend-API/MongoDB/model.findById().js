// Use model.findById() to Search Your Database By _id

// When saving a document, MongoDB automatically adds the field _id, and set it to a unique alphanumeric key. 
// Searching by _idis an extremely frequent operation, so Mongoose provides a dedicated method for it.

const findPersonById = function(personId, done) {
  Person.findById(personId, (error, result) => {
    if(error) {
      console.log(error)
    } else {
      done(null, result)
    }
  })
  // done(null /*, data*/);
};
