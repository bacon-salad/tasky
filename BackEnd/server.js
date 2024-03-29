
var express = require("express");
var session = require("express-session");
var path = require("path");

var cors = require('cors');
var routes = require('./Express-Routes')
var app = express();
var PORT = process.env.PORT || 8080;
app.use(cors());
var passport = require("./Express-Routes/passport");
var expressWs = require('express-ws')(app);

var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}


db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
