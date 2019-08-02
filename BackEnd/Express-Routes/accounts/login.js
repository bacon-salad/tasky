var db = require('../../models') 

module.exports = function(req, res) {
res.json('hello')

console.log(req.user)

}