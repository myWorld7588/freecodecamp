//Everything in Mongoose starts with a Schema
// 각 Schema 는 MongoDB 컬렉션에 Mapping 됨 
// 해당 컬렉션 내의 문서 모양을 정의함.
// 스키마는 모델의 빌딩 블록임. 복잡한 모델을 만들기 위해 중첩할 수 있지만 이 경우에는 간단하게 유지하겠슴. 
// 모델을 사용하면 문서라고 하는 개체의 인스턴스를 만들 수 있슴. 
// A model allows you to create instances of your objects, called documents.

let peopleSchema = new mongoose.Schema ({
   name : {type: String, required: true},
   age : Number,
   favoriteFoods : [String]
})

let Person = mongoose.model("Person", peopleSchema)
