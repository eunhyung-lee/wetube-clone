import express from "express"; // express 불러오기
const app = express(); //create express application
const PORT = 4000;

//aplication setting
const handleHome = (req, res) => {
  //given by express
  console.log("someone trying to request to your server");
  return res.send("this is send"); // ending the request
};
const handleLogin = (req, res) => {
  return res.send("Login here");
};
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); //
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};
app.use(loggerMiddleware);
app.use(privateMiddleware);
app.get("/", handleHome); // /에 접속할 경우 handleHome 실행
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening); //callback
