const videos = [
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
  return res.render("watch", { pageTitle: "Video", video });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
};
// export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete");
export const postEdit = () => {};
