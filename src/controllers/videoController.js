const videos = [
  {
    title: "first video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "second video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "third video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
  {
    title: "fourth video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
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

export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete");
