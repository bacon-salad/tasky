var db = require('../../models') 

module.exports = (req, res) => {
     db.users.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName
    }).then(function() {
        console.log('User Info: ' + req.body)
    }).catch(function(err) {
      console.log(err.errors[0].message);
      res.status(403).json(err.errors[0].message);
      // res.status(422).json(err.errors[0].message);
    });
}