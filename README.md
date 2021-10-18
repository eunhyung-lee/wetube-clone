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
    /users/edit -> Edit user
    /users/delete -> Delete user

    video router
    /videos/watch -> Watch Video
    /videos/edit -> Edit Video

11. cleaning the code
    devide and conquer
    every file is module
    js 파일끼리는 완전히 private하기 때문에 export-import로 연결해줘야된다
    default exports
