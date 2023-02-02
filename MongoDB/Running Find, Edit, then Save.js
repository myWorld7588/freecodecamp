// Perform Classic Updates by Running Find, Edit, then Save

// 예전에는 문서를 편집하고 사용할수있게 하려면 “서버 응답으로 다시 보내기, Sending it back in a server response” 가 필요했지만 
// Mongoose 에는 전용 업데이트 방법이 있슴. `Model.update()`

// 이건 low-level Mongo Driver 에 바인딩됨. 
// 특정 기준과 일치하는 많은문서를 일괄 편집할 수 있지만 업데이트된 문서를 다시 보내지 않고 ‘상태’ 메세지만 보냄. 
// 또한 Mongo 드라이버를 직접 호출하기 때문에 model validation 이 힘듬

const findEditThenSave = function(personId, done) {
  const foodToAdd = "hamburger";

  Person.findById(personId, (error, result) => {
    if(error) {
      console.log(error)
    } else {
      result.favoriteFoods.push(foodToAdd)
      result.save((error, updatedResult) => {
        if(error) {
          console.log(error)
        } else {
          done(null, updatedResult)
        }
      })
    }
  })

  //done(null /*, data*/);
};
