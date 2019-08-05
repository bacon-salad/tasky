db = require ('../../models')

module.exports = (req, res) => {
    console.log(req.body.id + " " + req.body.update)
    db.tasks.update(
        {completed: req.body.update},
        {where: {id: req.body.id}}
    ).then(function(data) {
        res.json(data);
    });
    } 