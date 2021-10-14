import express from "express"; // express 불러오기
const app = express(); //create express application
const PORT = 4000;
const handleListening = () =>
  console.log("Server listening on port http://localhost:4000");
app.listen(PORT, handleListening); //callback
