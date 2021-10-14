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
7. server
   GET : [[HTTP method.]]
   HTTP : how we talk to server. website에 접속하고 server에 정보를 보내는 방법
