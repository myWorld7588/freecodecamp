// Middleware functions are functions that take 3 arguments: 

// - Request object
// - Response object
// - Next function in the application’s request-response cycle.

// 이러한 함수는 앱에 부작용이 있을 수 있는 일부 코드를 실행하고 일반적으로 요청 또는 응답 개체에 정보를 추가함

// 어떤 조건이 충족되면 응답을 보냄. 완료 되었을 때 응답을 보내지 않으면 스택에서 다음 함수 실행을 시작.*

// 이렇게 하면 세 번째 인수인 `next()` 호출이 실행됨.

function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}



// 문제6 Implement a Root-Level Request Logger Middleware

// Build a simple logger. For every request, it should log to the console a string taking the following format: `method path - ip`

// An example would look like this: `GET /json - ::ffff:127.0.0.1`
// Note that there is a space between `method` and `path`and that the dash separating `path`and `is`is surrounded by a space on both sides. 
// You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using `req.method`, `req.path`and `req.ip`  
// Remember to call `next()`when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
})
