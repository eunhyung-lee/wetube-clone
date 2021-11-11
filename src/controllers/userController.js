export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = (req, res) => {
  return res.render("/");
};
export const remove = (req, res) => res.send("remove");
export const edit = (req, res) => res.send("edit");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
