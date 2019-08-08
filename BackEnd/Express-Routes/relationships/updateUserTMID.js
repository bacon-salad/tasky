db = require ('../../models')

module.exports = (req, res) => {
 db.users.update(
     {TMid: req.user.id},
     {where: {id: req.body.uid}}
 )
 console.log('Taskee added!')
}