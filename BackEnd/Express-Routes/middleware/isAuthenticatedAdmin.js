// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  console.log(req.user);
    // If the user is logged in, continue with the request to the restricted route
    if (req.user && req.user.role === "Admin") {
      return next();
    }
  
    // If the user isn't logged in, redirect them to the login page
    return res.status(403).redirect("/");
  };
  