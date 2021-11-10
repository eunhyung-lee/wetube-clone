import express from "express"; // express 불러오기
import { login, join } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router(); //router 생성
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
// globalRouter.get("/search", search);

export default globalRouter;
