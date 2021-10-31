import { reset } from "nodemon";

let videos = [
  {
    title: "first video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "second video",
    rating: 4,
    comments: 2,
    createdAt: "12 minutes ago",
    views: 49,
    id: 2,
  },
  {
    title: "third video",
    rating: 1,
    comments: 2,
    createdAt: "26 minutes ago",
    views: 59,
    id: 3,
  },
  {
    title: "fourth video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 4,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
};
// export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("delete");
export const postEdit = (req, res) => {
  //Edit 후
  const id = req.params.id;
  const title = req.body.title;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload Video" });
export const postUpload = (req, res) => {
  //here we will add a video to the videos array
  const newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 0,
    createdAt: "Just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};