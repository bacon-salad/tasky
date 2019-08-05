db = require ('../../models')

module.exports = (req, res) => {
    db.tasks.create({
        head: req.body.head,
        body: req.body.body,
        taskeeId: req.body.toid,
        TaskMasterId: req.body.myId,
        timeleft: req.body.time,
      }).then(function() {
          console.log('User Info: ' + req.body)
      }).catch(function(err) {
        console.log(err.errors[0].message);
        res.status(403).json(err.errors[0].message);
        // res.status(422).json(err.errors[0].message);
      });
}