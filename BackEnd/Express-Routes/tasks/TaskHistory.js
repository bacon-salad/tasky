const db = require ('../../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (req, res) => {
    db.tasks.findAll({
        where: {
            completed: {
                [Op.or]: ['yes', 'no']
            },
            taskeeId: req.user.id
        }
        }
    ).then(function(data) {
        res.json(data);
    });
    } 