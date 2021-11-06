import express from "express"; // express 불러오기
import {
  watch,
  getEdit,
  getUpload,
  deleteVideo,
  postEdit,
  postUpload,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload); // upload가 제일 위로 가야됨
videoRouter.get("/:id([0-9a-f]{24})", watch); //id는 숫자만 해당.

// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit); //POST method 사용
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);

// videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
