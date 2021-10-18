import express from "express"; // express 불러오기

const globalRouter = express.Router(); //router 생성
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

export default globalRouter;
