db = require ('../../models')

module.exports = (req, res) => {
 db.relationships.create({
     MajorId: req.body.myId,
     MinorId: req.body.myId
 })
 console.log('Taskee added!')
}