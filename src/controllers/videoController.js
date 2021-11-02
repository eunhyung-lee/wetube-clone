import { reset } from "nodemon";
import Video from "../models/Video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {
    console.log("errors", error);
    console.log("videos", videos);
  });
  res.render("home", { pageTitle: "Home", videos: [] });
};
export const see = (req, res) => {
  const id = req.params.id;
  return res.render("watch", { pageTitle: `Watching `, video });
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
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload Video" });
export const postUpload = (req, res) => {
  //here we will add a video to the videos array

  return res.redirect("/");
};
