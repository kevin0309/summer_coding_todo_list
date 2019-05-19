var express = require('express');
//var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var homeRouter = require('./router/home');
app.set('views', __dirname + '/view');
//app.set('view engine', 'html');
app.use('/', homeRouter);
var server = app.listen(8081, function() {
    console.log('server on!!')
});


/*var http = require('http');
http.createServer(function(req, res) {
    pool.getConnection(function(err, conn) {
    if (err) {
        if (conn)
            conn.release();
        console.log(err);
        return;
    }
    
    conn.query('show tables', null, function(error, result) {
        conn.release();
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(result[0].Tables_in_world);
    });
});
}).listen(8081);*/


console.log('server is running...');