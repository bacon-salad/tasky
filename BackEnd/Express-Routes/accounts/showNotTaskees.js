db = require ('../../models')

module.exports = (req, res) => {
 db.users.findAll({
     where: {
     TMId: null
 }
}).then(function(data) {
    res.json(data)}
);
}