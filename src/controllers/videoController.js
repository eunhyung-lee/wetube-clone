// import { reset } from "nodemon";
import Video from "../models/Video";

export const home = async (req, res) => {
  // Video.find({}, (error, videos) => {
  // }); call back function
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id); //exec이 query를 실행(promise)
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("watch", {
    pageTitle: `Watching ${video.title} `,
    video,
  });
};

//delete video
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  //error 검증
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  } //error 처리
  return res.render("edit", { pageTitle: `Edit ${video.title} `, video });
};
export const postEdit = async (req, res) => {
  //Edit 후
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  } //error 처리
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });

  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  //here we will add a video
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title: title,
    description: description,
    createdAt: Date.now(),
    hashtags: Video.formatHashtags(hashtags),
  });
  try {
    await video.save(); // database에 저장
    return res.redirect("/");
  } catch (error) {
    //error 처리
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
  //await Video.create({}) <<로 생성 가능
};

//search controller
export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    //search
    videos = await Video.find({
      //filter epression
      title: {
        //regular expression
        $regex: new RegExp(keyword, "i"), //대소문자 무시
        //^word << start with word
        //word$ << end with word
      },
    });
    if (!videos.length) {
      console.log("nothing found");
    }
  }
  return res.render("search", { pageTitle: "search", videos, keyword });
};
