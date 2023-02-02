// Perform New Updates on a Document Using model.findOneAndUpdate()

const findAndUpdate = function(personName, done) {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new : true}, (error, updatedRecord) => {
    if(error) {
      console.log(error)
    }else{
      done(null, updatedRecord)
    }
  })

  //done(null /*, data*/);
};
