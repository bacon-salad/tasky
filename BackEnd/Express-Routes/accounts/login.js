var db = require('../../models') 

module.exports = (req, res) => {
res.json('hello')

console.log(req.user)

}