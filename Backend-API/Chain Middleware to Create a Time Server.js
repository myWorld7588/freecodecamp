// Middleware 는 `app.METHOD(path, middlewareFunction)` 를 이용해서 특정 라우트에 마운트할수있다.
// Middleware can also be chained within a route definition.

app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});


// 서버 작업을 더 작은 단위로 분할하는데 유용함. 이는 더 나은 앱 구조와 다른 위치에서 코드를 재사용 할 수 있는 가능성으로 이어짐. 
// 이런 접근 방식은 데이터에 대한 일부 유효성 검사를 수행하는데에도 사용할 수 있음. 
// 미들웨어 스택의 각 지점에서 현재 체인의 실행을 차단하고 오류를 처리하도록 특별히 설계된 기능에 제어권을 넘길 수 있습니다. 
// 또는 특별한 경우를 처리하기 위해 일치하는 다음 경로로 제어를 전달할 수 있다.


// 문제7 Chain Middleware to Create a Time Server
// In the route `app.get('/now', ...)` chain a middleware function and the final handler. 
// In the middleware function you should add the current time to the request object in the `req.time` key. You can use `new Date().toString()`. 
// In the handler, respond with a JSON object, taking the structure `{time: req.time}`.

// Note: The test will not pass if you don’t chain the middleware. If you mount the function somewhere else, the test will fail, even if the output result is correct.


app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ "time": req.time })
})
