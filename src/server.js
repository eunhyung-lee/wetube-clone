import express from "express"; // express 불러오기
import morgan from "morgan"; //morgan 불러오기
const app = express(); //create express application
const PORT = 4000;
const logger = morgan("dev");

app.use(logger);

const globalRouter = express.Router(); //router 생성
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening); //callback, 필수로 필요함
