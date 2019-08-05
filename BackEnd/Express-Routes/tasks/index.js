var express = require('express')
var routes = express.Router()
var makeTask = require('./makeTask')
var getTasks = require('./ShowAllTasks')
var AT = require('./ActiveTasks')
var TH = require('./TaskHistory')
var FT = require('./FinishTask.js')

routes.post('/makeTask', makeTask)
routes.post('/getTasks', getTasks)
routes.get('/taskHistory', TH)
routes.get('/activeTasks', AT)
routes.post('/finishTask', FT)




module.exports = routes;