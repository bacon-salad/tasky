var express = require('express')
var routes = express.Router()
var assign = require('./assignUser')
const GAU = require('./showYourTaskees')
const UU = require('./updateUserTMID')

routes.post('/assignUser', assign)
routes.get('/getAssigned', GAU)
routes.post('/updateUser', UU)



module.exports = routes;