// Delete Many Documents with model.remove()

const removeManyPeople = function(done) {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (error, JSONStatus) => {
    if(error) {
      console.log(error)
    } else {
      done(null, JSONStatus)
    }
  })

  //done(null /*, data*/);
}const removeById = function(personId, done) {
  Person.findByIdAndRemove(personId, (error, deletedRecord) => {
    if(error) {
      console.log(error)
    } else {
      done(null, deletedRecord)
    }
  })
  //done(null /*, data*/);
};
