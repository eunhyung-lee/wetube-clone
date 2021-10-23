import express from "express"; // express 불러오기
import { login, join } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

const globalRouter = express.Router(); //router 생성
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
