db = require ('../../models')

module.exports = (req, res) => {
 db.users.findAll({
     where: {
     TMid: req.user.id
 }
}).then(function(data) {
    res.json(data);
});
}