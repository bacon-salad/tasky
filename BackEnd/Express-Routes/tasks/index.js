var express = require('express')
var routes = express.Router()
var makeTask = require('./makeTask')
var getTasks = require('./ShowAllTasks')

routes.post('/makeTask', makeTask)
routes.post('/getTasks', getTasks)






module.exports = routes;