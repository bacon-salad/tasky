var express = require('express')
var routes = express.Router()
var pull = require('./pull')


routes.get('/pull', pull)








module.exports = routes;