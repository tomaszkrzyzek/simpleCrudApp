
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var projectManagerRouter = require('./modules/projectManager/routes/projectManager.router');

app.use(cors());
app.use(bodyParser.json());
app.use(projectManagerRouter);

process.on('unhandledRejection', function(reason, p){
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
    // application specific logging here
});

app.listen(2000);
