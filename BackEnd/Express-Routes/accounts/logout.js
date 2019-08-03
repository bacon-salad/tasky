// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedAdmin = require("../config/middleware/isAuthenticatedAdmin");

module.exports = function(app) {
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
}