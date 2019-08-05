db = require ('../../models')

module.exports = (req, res) => {
    db.tasks.findAll({
        where: {
            completed: 'notYet',
            taskeeId: req.user.id
        }
    }).then(function(data) {
        res.json(data);
    });
    } 