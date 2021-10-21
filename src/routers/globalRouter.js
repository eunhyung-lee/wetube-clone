import express from "express"; // express 불러오기
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router(); //router 생성
globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
