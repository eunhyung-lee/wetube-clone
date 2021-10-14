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

app.get("/", handleHome); // /에 접속할 경우 handleHome 실행
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening); //callback
