import express from "express"; // express 불러오기
import morgan from "morgan";
const app = express(); //create express application
const PORT = 4000;
const logger = morgan("dev");

//aplication setting
const handleHome = (req, res) => {
  //given by express
  console.log("someone trying to request to your server");
  return res.send("hi"); // ending the request
};

app.use(logger);
app.get("/", handleHome); // /에 접속할 경우 handleHome 실행

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening); //callback, 필수로 필요함
