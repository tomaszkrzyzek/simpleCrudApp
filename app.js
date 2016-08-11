var express = require('express');
var app = express();
var expressSession = require('express-session');
var passport = require('passport');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var projectManagerRouter = require('./modules/projectManager/routes/projectManager.router');
var authService = require('./modules/auth/services/auth.service');

// app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'POST, GET, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({ secret: 'keyboard cat', saveUninitialized: true, resave: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(projectManagerRouter);

authService.initPassport();

process.on('unhandledRejection', function(reason, p){
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
    // application specific logging here
});

app.listen(2000);
