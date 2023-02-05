// Create and Save a Record of a Model

var createAndSavePerson = function(done) {
   let sundae = new Person({name: 'Sundae', age: 20, favoriteFoods: ['Churu']})
   sundae.save((error, data) => {
      if(error){
         console.log(error)
    }else{
         done(null, data)
    }
  })
};
