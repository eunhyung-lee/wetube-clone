import User from "../models/User";
import bcrypt from "bcrypt";
import { request } from "express";
import fetch from "node-fetch";
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

//github login start url
export const startGithubLogin = (req, res) => {
  const baseURL = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalURL = `${baseURL}?${params}`;

  return res.redirect(finalURL);
};

//github login finish url
export const finishGithubLogin = async (req, res) => {
  const baseURL = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalURL = `${baseURL}?${params}`;

  const tokenRequest = await (
    await fetch(finalURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    //access api
    const { access_token } = tokenRequest;
    const apiURL = "https://api.github.com";
    const userData = await (
      await fetch(`${apiURL}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();

    //user email 가져오기
    const emailData = await (
      await fetch(`${apiURL}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    //primary와 verified 가 전부 true인 data 찾기
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    //email 이 없을 경우
    if (!emailObj) {
      return res.redirect("/login");
    }
    //email이 이미 있는지 찾기
    const existingUser = await User.findOne({ email: emailObj.email });
    if (existingUser) {
      //동일 email을 가진 user를 찾을 경우 login 시켜줌
      req.session.loggedIn = true;
      req.session.user = existingUser;
      return res.redirect("/");
    } else {
      //계정이 없을 경우
      //Create an account
      const user = await User.create({
        name: userData.name,
        username: userData.login,
        email: emailObj.email,
        password: "",
        socialOnly: true,
        location: userData.location,
      });
      //login
      req.session.loggedIn = true;
      req.session.user = user;
      return res.redirect("/");
    }
  } else {
    //github login 실패할 경우
    return res.redirect("/login");
  }
};

export const remove = (req, res) => res.send("remove");
export const edit = (req, res) => res.send("edit");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
