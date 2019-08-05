var db = require('../../models') 

module.exports = function(req, res) {

    console.log(req.user.email)
    console.log(req.user.userName)
     res.json({
        email: req.user.email,
        userName: req.user.userName
      });
      console.log(res)
}