// HTML 서버가 HTML 을 제공하는 동안 API 는 데이터를 제공. 
// REST(REPRESENTATIONAL STATE TRANSFER) API 를 사용하면 클라이언트가 서버에 대한 세부 정보를 알 필요 없이 간단한 방식으로 데이터를 교환할 수 있습니다. 
// 클라이언트는 RESOURCE 가 있는 위치(URL)와 RESOURCE 에서 수행하려는 작업(동사)만 알면 됩니다. GET 동사는 아무 것도 수정하지 않고 일부 정보를 가져올 때 사용됩니다. 
// 요즘 웹에서 정보를 이동하는 데 선호되는 데이터 형식은 JSON 입니다. 간단히 말해서 JSON 은 JavaScript 개체를 문자열로 나타내는 편리한 방법임  쉽게 전송할 수 있슴.

// 문제4 Serve JSON on a Specific Route

// Serve the object {"message": "Hello json"} as a response, in JSON format, to GET requests to the /jsonroute. 
// Then point your browser to your-app-url/json, you should see the message on the screen.


app.get('/json', (req, res) => {
  res.json({ "message": "Hello json" })
});
