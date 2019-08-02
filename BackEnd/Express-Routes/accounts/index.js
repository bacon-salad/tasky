var express = require('express')
var routes = express.Router()
var pull = require('./pull')


routes.post('/pull', pull) 







module.exports = routes;