export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
  return res.send(`you see videos #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete");
