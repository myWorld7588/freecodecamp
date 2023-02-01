// GET 외에도 또 다른 일반적인 HTTP 동사인 POST가 있습니다. 
// POST는 HTML 양식으로 클라이언트 데이터를 보내는 데 사용되는 기본 방법입니다. 
// REST 규칙에서 POST는 데이터베이스에 새 항목(새 사용자 또는 새 블로그 게시물)을 만들기 위해 데이터를 보내는 데 사용됩니다. 

// 이러한 종류의 요청에서 데이터는 URL에 표시되지 않고 요청 본문에 숨겨져 있습니다. 본문은 페이로드라고도 하는 HTTP 요청의 일부입니다. 
// 데이터가 URL에 표시되지 않더라도 비공개라는 의미는 아닙니다. 이유를 알아보려면 HTTP POST 요청의 원시 콘텐츠를 살펴보십시오.

POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25


// 보시다시피 본문은 쿼리 문자열처럼 인코딩됩니다. 이것은 HTML 양식에서 사용하는 기본 형식입니다. 
// Ajax를 사용하면 JSON을 사용하여 더 복잡한 구조의 데이터를 처리할 수도 있습니다. 
// 또 다른 유형의 인코딩인 multipart/form-data도 있습니다. 이것은 이진 파일을 업로드하는 데 사용됩니다. 
// 이 연습에서는 URL 인코딩 본문을 사용합니다. body-parserPOST 요청에서 오는 데이터를 구문 분석하려면 패키지 를 사용해야 합니다. 
// 이 패키지를 사용하면 다양한 형식의 데이터를 디코딩할 수 있는 일련의 미들웨어를 사용할 수 있습니다.

