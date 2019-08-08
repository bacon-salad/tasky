db = require ('../../models')

module.exports = (req, res) => {
 db.relationships.create({
     MajorId: req.user.id,
     MinorId: req.body.uid
 }).then(
 db.users.update(
     {TMId: req.user.id},
     {where: {id:req.body.uid}}
 ))
 console.log('Taskee added!')
}