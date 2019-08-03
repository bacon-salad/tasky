var express = require('express')
var routes = express.Router()
var login = require('./login')
var passport = require('../passport')
var signUp = require('./signUp')
var GUI = require('./getUserInfo')

routes.post('/signup', signUp)
routes.post('/login', passport.authenticate("local"), login)
routes.get('/getUserInfo', GUI)







module.exports = routes;