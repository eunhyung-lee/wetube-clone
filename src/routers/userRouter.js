import express from "express"; // express 불러오기
import { edit, remove } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
export default userRouter;
