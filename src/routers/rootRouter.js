import express from "express"; // express 불러오기
import { login, getJoin, postJoin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router(); //router 생성
rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);
// rootRouter.get("/search", search);

export default rootRouter;
