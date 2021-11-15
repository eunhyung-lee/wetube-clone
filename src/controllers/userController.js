import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  if (password !== password2) {
    return res.render("join", {
      pageTitle: "Create Account",
      errorMessage: "Password confirmation does not match",
    });
  }
  const exists = await User.exists({ $Or: [{ username }, { email }] });
  if (exists) {
    return res.render("join", {
      pageTitle: "Create Account",
      errorMessage: "This username/email is already taken",
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};
export const remove = (req, res) => res.send("remove");
export const edit = (req, res) => res.send("edit");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
