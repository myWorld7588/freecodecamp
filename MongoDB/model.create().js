// Create Many Records with model.create()
// Sometimes you need to create many instances of your models, 
// e.g. when seeding a database with initial data. 
// Model.create()takes an array of objects like [{name: 'John', ...}, {...}, ...]as the first argument, and saves them all in the db.

// 문제

// Modify the `createManyPeople`function to create many people using `Model.create()` with the argument `arrayOfPeople.`

let arrayOfPeople = [
  {name: 'Uhmook', age: 2, favoriteFoods: ['Churu']},
  {name: 'Mike', age: 20, favoriteFoods: ['Pizza', 'Sandwhich', 'Candy']},
  {name: 'Julie', age: 32, favoriteFoods: ['Chocolate', 'Apple']}
]

const createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, (error, createdPoeple) => {
    if(error) {
      console.log(error)
    }else{
      done(null, createdPoeple);

    }
  });
};
