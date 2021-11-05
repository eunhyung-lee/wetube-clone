import { reset } from "nodemon";
import Video from "../models/Video";

export const home = async (req, res) => {
  // Video.find({}, (error, videos) => {
  // }); call back function
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};

export const see = (req, res) => {
  const id = req.params.id;
  return res.render("watch", { pageTitle: `Watching ` });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  return res.render("edit", { pageTitle: `Editing : ` });
};
// export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("delete");
export const postEdit = (req, res) => {
  //Edit 후
  const id = req.params.id;
  const title = req.body.title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  //here we will add a video
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
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
