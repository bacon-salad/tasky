var express = require('express')
var routes = express.Router()
var assign = require('./assignUser')

routes.post('/assignUser', assign)






module.exports = routes;