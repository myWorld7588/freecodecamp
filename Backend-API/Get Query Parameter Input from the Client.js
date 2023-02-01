// 클라이언트에서 입력을 받는 또 다른 일반적인 방법은 Query 문자열을 사용하여 Route Path 다음에 데이터를 인코딩하는 것입니다.

// - Query 문자열은 물음표(?) 로 구분됨
// - Field=Value 를 같이 쌍으로 함께포함
//  - 각 쌍은 앰퍼센드($) 로 구분
// - Express는 Query String 로부터 데이터를 분석하고 오브젝트 req.query 를
// - Express는 쿼리 문자열에서 데이터를 구문 분석하고 오 브븢트erq.uqery를 채울 수 있습니다
// - 퍼센트(%)와 같은 일부 문자는 URL에 포함될 수 없으며 다른 형식으로 인코딩해야 보낼 수 있습니다.
// - JavaScript에서 API를 사용하는 경우 특정 메서드를 사용하여 이러한 문자를 인코딩/디코딩할 수 있습니다.

route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}


// 문제9 Get Route Parameter Input from the Client****
  
// Build an API endpoint, mounted at `GET /name`. Respond with a JSON document, taking the structure `{ name: 'firstname lastname'}`. 
// The first and last name parameters should be encoded in a query string e.g. `?first=firstname&last=lastname`.

// Note:** In the following exercise you are going to receive data from a POST request, at the same `/name` route path. 
// If you want, you can use the method `app.route(path).get(handler).post(handler)`. 
// This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.

app.get("/name", (req, res) => {
  res.json({name: req.query.first + " " + req.query.last})
})
