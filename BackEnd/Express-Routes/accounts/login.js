<<<<<<< HEAD
var db = require('../../models') 

module.exports = function(req, res) {
console.log(req.user.email)
console.log(req.user.password)
=======
// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedAdmin = require("../config/middleware/isAuthenticatedAdmin");

module.exports = function(app) {
 // Route for getting some data about our user to be used client side
 app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
>>>>>>> origin/gh-pages
}