var express = require('express');
var router = express.Router();
var fs = require('fs');
var db = require('sync-mysql');
var pool = db.createPool({
    connectionLimit: 10,
    host: '112.186.29.44',
    port: 3306,
    user: 'guest2',
    password: '1234',
    database: 'guest2'
});

router.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('./view/main.html'));
    res.end();
});

router.post('/dummy', function(req, res) {
    res.json({res: 'dummy'});
})

module.exports = router;