var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var homeRouter = require('./router/home');
app.set('views', __dirname + '/view');
app.use('/', homeRouter);
var server = app.listen(8081, function() {
    console.log('server on!!')
});