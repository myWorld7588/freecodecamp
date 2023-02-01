// API를 구축할 때 우리는 사용자가 우리 서비스에서 얻고자 하는 것을 우리에게 전달할 수 있도록 해야함. 
// 예를 들어 클라이언트가 데이터베이스에 저장된 사용자에 대한 정보를 요청하는 경우 관심 있는 사용자를 알려주는 방법이 필요. 
// 이 결과를 얻을 수 있는 한 가지 가능한 방법은 경로 매개 변수를 사용하는 것. 경로 매개변수는 슬래시 (/) 로 구분된 URL 의 이름이 지정된 세그먼트임. 
// 각 세그먼트는 해당 위치와 일치하는 URL 부분의 값을 캡쳐함. 캡처된 값은 req.params 개체에서 찾을 수 있슴.

route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}


// 문제8 Get Route Parameter Input from the Client

// Build an echo server, mounted at the route `GET /:word/echo`
// Respond with a JSON object, taking the structure `{echo: word}`
// You can find the word to be repeated at `req.params.word`
// You can test your route from your browser's address bar, visiting some matching routes, e.g. `your-app-rootpath/freecodecamp/echo`

app.get("/:word/echo", (req, res) => {
  res.json({echo: req.params.word})
})
