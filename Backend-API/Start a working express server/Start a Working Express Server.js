function(req, res) {
  res.send('Response String');
}
// will serve the string "Response String"

문제1 Start a Working Express Server
// Use the `app.get()` method to serve the string "Hello Express" to GET requests matching the `/` (root) path.
// App.get() 메서드를 사용하여 "Hello Express" 문자열을 제공하여 / (루트) 경로와 일치하는 요청을 받아라

app.get('/', (req, res) => {
  res.send('Hello Express')
});
