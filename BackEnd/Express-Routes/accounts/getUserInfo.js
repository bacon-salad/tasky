var db = require('../../models') 

module.exports = function(req, res) {

    console.log(req.user.email)
    console.log(res)
     return res.json({
        email: req.user.email,
        userName: req.user.userName
      });
}