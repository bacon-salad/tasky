db = require ('../../models')

module.exports = (req, res) => {
    db.users.findAll().then(function(data) {
        res.json(data);
    });
    } 