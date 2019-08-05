db = require ('../../models')

module.exports = (req, res) => {
    db.tasks.findAll().then(function(data) {
        res.json(data);
    });
    } 