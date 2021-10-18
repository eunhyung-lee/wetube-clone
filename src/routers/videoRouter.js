import express from "express"; // express 불러오기

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/", (req, res) => res.send("video home"));

export default videoRouter;
