import express from "express"; // express 불러오기
import {
  see,
  getEdit,
  getUpload,
  deleteVideo,
  postEdit,
  postUpload,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)", see); //id는 숫자만 해당.

// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit); //POST method 사용
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

// videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
