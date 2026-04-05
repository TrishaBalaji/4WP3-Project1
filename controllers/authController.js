const userModel = require("../models/userModel");

function showLogin(req, res) {
  res.render("mypage", { error: req.query.error });
}

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.redirect("/?error=Missing username or password");
  }

  userModel.findUser(username, password, (err, user) => {
    if (err) {
      console.error(err);
      return res.redirect("/?error=Database error");
    }

    if (!user) {
      return res.redirect("/?error=Invalid username or password");
    }

    res.redirect("/product?username=" + user.username);
  });
}

module.exports = { showLogin, login };
