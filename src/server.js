import express from "express"; // express 불러오기
const app = express(); //create express application
const PORT = 4000;

//aplication setting
function handleHome() {
  console.log("Sumebody is trying to get your /");
}
app.get("/", handleHome); // /에 접속할 경우 handleHome 실행

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening); //callback
