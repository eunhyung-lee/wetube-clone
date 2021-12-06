import express from "express"; // express 불러오기
import morgan from "morgan"; //morgan 불러오기
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
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
    //dinaub : cookie를 만든 server가 누구인지 적혀있음
    //expires : expire
    //Max--age :
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false, // session이 수정되지 않을 경우 저장하지 않음
    cookie: {
      maxAge: 86400000, // millisecond단위
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
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
