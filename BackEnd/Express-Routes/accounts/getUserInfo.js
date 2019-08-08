var db = require('../../models') 

module.exports = (req, res) => {

    console.log(req.user.email)
    console.log(req.user.userName)
     res.json({
        email: req.user.email,
        userName: req.user.userName,
        id: req.user.id,
        taskMaster: req.user.taskmaster
      });
}