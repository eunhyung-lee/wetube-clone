import express from "express"; // express 불러오기
import morgan from "morgan"; //morgan 불러오기
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import session from "express-session";
import { localsMiddleware } from "./middlewares";

const app = express(); //create express application
const logger = morgan("dev");

app.set("view engine", "pug"); // view engine을 pug로 설정
app.set("views", process.cwd() + "/src/views");
app.use(logger); //log
app.use(express.urlencoded({ extended: true }));

//session middleware
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

// session 정보를 전부 보여주는 code
// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//     console.log(sessions);
//     next();
//   });
// });

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
