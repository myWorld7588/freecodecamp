// Delete One Document Using model.findByIdAndRemove

const removeById = function(personId, done) {
  Person.findByIdAndRemove(personId, (error, deletedRecord) => {
    if(error) {
      console.log(error)
    } else {
      done(null, deletedRecord)
    }
  })
  //done(null /*, data*/);
};
