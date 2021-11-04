First nodejs Course.

1. package.json 만드는법 : npm init
2. nodejs 실행 방법 : json에 script수정, npm run win
3. server
   terminal - npm install express
   npm install << project 실행 시 필요한 module을 설치(package.json의 dependencies를 참고, package.json닫고 실행)
   package-lock <<
4. express
   babeljs.io 설치 (자바스크립트 -> nodejs code)
   npm install --save-dev @babel/core
   npm install @babel/preset-env --save-dev
   babel.config.json 설치 후 preset 입력
   Dependencies << project need
   devDependencies << developer need
5. nodemon 설치
   code가 변경되는걸 감지해서 실행
   npm install @babel/core @babel/node --save-dev
6. git 명령어
   1. git status
   2. git add .
   3. git commit -m "text"
   4. git push -u origin master
7. server - request and response
   GET : [[HTTP method.]]
   HTTP : how we talk to server. website에 접속하고 server에 정보를 보내는 방법
   How HTTP Request run. request - reponse
   1. request : server로 무언가를 요청
   2. return res.end() : kill request
   3. return res.send("text") : send text
8. middleware == middle software == handler == controller
   next argument << next() 함수를 실행 시 app.get의 다음 함수를 실행
   app.use() : global middleware
9. morgan
   morgan function return middleware
10. router : controller와 url을 관리.
    #Wetube Reloaded
    global router, marketing side exception
    / -> Holme
    /join -> Join
    /loin -> Login
    /search -> Search

    user router
    /users/:id -> See User
    /users/logoug -> Log Out
    /users/edit -> Edit My Profile
    /users/delete -> Delete My user

    video router
    /videos/:id -> Watch Video
    /videos/edit -> Edit Video
    /videos/delete -> Delete Video
    /videos/upload -> Upload Video

11. cleaning the code
    devide and conquer
    every file is module
    js 파일끼리는 완전히 private하기 때문에 export-import로 연결해줘야된다
    default exports -> 이름 변경 가능
    router와 controller는 같은곳에 두지 않는것이 좋다
12. URL parameter
    :id : parameter, req.params로 확인 가능
    express routing/regular exprss
    /ab?cd b optional
    /ab+cd b duplicate
    /ab*cd anything at *
    /ab(cd)?e optional group
13. Return HTML
    res.send에 html에 입력해서 보내기
    using pug (html view engine)
    - install pug
    - set pug
    - create pug file
    - Controller에서 res.render("viewname") 으로 rendering
    - process.cwd() : current working directory
    - pug views folder 위치 변경 : app.set(views,directory)
14. partials
    pug에서 반복되는 html을 따로 사용 가능
    Inheritance : base of html
    Extends(block) : template의 창문
15. CSS 적용 방법
    MVP Styles : 기본 html에 꽤 괜찮은 style을 붙여줌
16. Using Conditionals (if in pug)
17. Iteration (array)
18. mixin is smart partials : data를받을 수 있는 HTML block
19. interact with database
    javascript
20. GET과 POST method : 검색등에는 GET, 비밀번호 변경 등에는 POST 사용
21. express가 form을 처리하기 위해선 express.urlencoded를 사용해야됨. extended:true 사용. input에 name을 기준으로 가졍 22. 순서 : 1. controller, 2.router, 3.template
22. CRUD Create, Read, Update, Delete
23. models : database에 data의 형태를 설명
24. callback, promise
    sudo service mongodb start
    25 return은 중요하지 않다. 없어도 작동함.
    render후에는 render가 불가능하다. 따라서 return을 사용하여 function을 종료, render가 두번되게 하지 않는다.
25. .split(",").map(word=> `#${word}`)
