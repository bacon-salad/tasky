var db = require('../../models') 

module.exports = function(req, res) {
console.log(req.user.email)
console.log(req.user.password)
}