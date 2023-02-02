// Use model.findOne() to Return a Single Matching Document from Your Database

// Model.findOne()behaves like Model.find(), but it returns only one document (not an array), even if there are multiple items. 
// It is especially useful when searching by properties that you have declared as unique.

const findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods : {$all : [food]}}, (error, result) => {
    if(error) {
      console.log(error)
    } else {
      done(null, result)
    }
  })
  // done(null /*, data*/);
};
