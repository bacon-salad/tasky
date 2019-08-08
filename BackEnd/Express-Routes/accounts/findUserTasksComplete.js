db = require ('../../models')

module.exports = (req, res) => {
    db.users.findByPk(req.user.id)
    .then(function(data) {
        res.json(data);
    });
    } 