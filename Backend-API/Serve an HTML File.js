`res.sendFile(path)` 메서드를 사용하여 파일로 요청에 응답할수있슴 (You can put it inside the `App.get('/', ...)` Route Handler.)  

**이 메소드 는 유형에 따라 보내려는 파일을 처리하는 방법에 대해 브라우저에 지시하는 적절한 헤더를 설정함**

**그런 다음 파일을 읽고 보냄, 이 메소드 에는 절대 파일 경로가 필요합니다.**

Node Global Variable **`__dirname`을 사용하여 다음과 같이 경로를 계산하는 것이 좋음**

```jsx
absolutePath = __dirname + relativePath/file.ext
```

**문제2 Serve an HTML File**

Send the `/views/index.html` file as a response to GET requests to the `/` path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.

```jsx
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
```
