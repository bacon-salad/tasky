var express = require('express')
var routes = express.Router()
//var login = require('./login')
var passport = require('../passport')
var signUp = require('./signUp')

routes.post('/signup', signUp)
//routes.post('/login', passport.authenticate("local"), login)







module.exports = routes;