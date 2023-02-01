// HTML 서버에는 일반적으로 사용자가 access 할 수 있는 하나 이상의 디렉토리 가 있슴.
// 애플리케이션에 필요한 Static Assets (Style Sheet, Scripts, Images)을 배치할 수 있슴.
// Express 에서는 미들웨어 `express.static(path)`를 사용하여 기능을 쓸수 있슴.
// 여기서 PATH 매개 변수는 ASSETS 가 포함된 폴더의 절대 경로임.
// 기본적으로 MIDDLEWARE 는 ROUTE HANDLER 를 가로채 일종의 정보를 추가하는 기능.
// Middleware는 `app.use(path, middlewareFunction)` 방법을 사용하여 마운트해야함
// `Path` argument is optional 전달하지 않으면, 모든 요청에 대해 Middleware 가 실행됨

// 문제3 Serve Static Assets
// Mount the `express.static()` middleware to the path `/public` with `app.use()`. 
// The absolute path to the assets folder is `__dirname + /public`.
// Now your app should be able to serve a CSS stylesheet. 
// Note that the `/public/style.css` file is referenced in the `/views/index.html` in the project boilerplate. 
// Your front-page should look a little better now!

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
