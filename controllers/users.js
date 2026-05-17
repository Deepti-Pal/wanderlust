const User = require("../models/user.js");

// Render signup form
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// Signup - ADD next parameter here ✅
module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);  // ✅ now next is defined
      req.flash("success", `Welcome to Wanderlust, ${username}! 🎉`);
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

// Render login form
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// Login
module.exports.login = async (req, res) => {
  req.flash("success", `Welcome back, ${req.user.username}! 👋`);
  const redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// Logout
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You are logged out. See you soon!");
    res.redirect("/listings");
  });
};