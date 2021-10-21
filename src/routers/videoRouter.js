import express from "express"; // express 불러오기
import { watch, edit } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);
videoRouter.get("/", (req, res) => res.send("video home"));

export default videoRouter;
