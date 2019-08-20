var db = require ('../../models')
var sequelize = require('sequelize')

module.exports = (req, res) => {
 db.users.findAll({
     where: {
     TMId: null,
     id: {[sequelize.Op.not]: req.user.id},
     taskmaster: {[sequelize.Op.not]: 1}
     
 }
}).then(function(data) {
    res.json(data)}
);
}