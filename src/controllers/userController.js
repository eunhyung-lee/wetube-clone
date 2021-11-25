import User from "../models/User";
import bcrypt from "bcrypt";
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  // password 확인
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: "Password confirmation does not match",
    });
  }

  // username, email 중복 확인
  const exists = await User.exists({ $Or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: "This username/email is already taken",
    });
  }
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    //그 밖의 error 처리
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: error._message,
    });
  }
};

//Login
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  //check if account exist
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account whit this username does not exists",
    });
  }
  //check if password correct
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }

  //login session 정보를 기억
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const remove = (req, res) => res.send("remove");
export const edit = (req, res) => res.send("edit");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
