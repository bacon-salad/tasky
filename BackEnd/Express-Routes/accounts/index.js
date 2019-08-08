var express = require('express')
var routes = express.Router()
var login = require('./login')
var passport = require('../passport')
var signUp = require('./signUp')
var GUI = require('./getUserInfo')
var GAU = require('./getAllUsers.js')
var GNA = require('./showNotTaskees')
var TC = require('./findUserTasksComplete')


routes.post('/signup', signUp)
routes.post('/login', passport.authenticate("local"), login)
routes.get('/getUserInfo', GUI)
routes.get('/getAllUsers', GAU)
routes.get('/getNonAssigned', GNA)
routes.get('/tasksComplete', TC)





module.exports = routes;