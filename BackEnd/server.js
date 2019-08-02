
var express = require("express");
var session = require("express-session");

var cors = require('cors');
var routes = require('./Express-Routes')
var app = express();
var PORT = process.env.PORT || 8080;
app.use(cors());
var passport = require("./Express-Routes/passport");

var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes)

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
