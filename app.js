
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var todoRouter = require('./modules/todo/routes/todo.router');

app.use(cors());
app.use(bodyParser.json());
app.use(todoRouter);

process.on('unhandledRejection', function(reason, p){
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
    // application specific logging here
});

app.listen(2000);
