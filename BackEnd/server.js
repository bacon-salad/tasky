
var express = require("express");

var routes = require('./Express-Routes')
var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
