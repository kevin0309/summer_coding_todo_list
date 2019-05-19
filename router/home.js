var express = require('express');
var router = express.Router();
var fs = require('fs');
var db = require('sync-mysql');
var dbConf = {
    connectionLimit: 10,
    host: '112.186.29.44',
    port: 3306,
    user: 'guest2',
    password: '1234',
    database: 'guest2'
};

function getRes() {
    this.status = 'OK';
    this.timestamp = new Date().getTime();
    this.data = '';
}

router.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('./view/main.html'));
    res.end();
});

router.post('/dummy', function(req, res) {
    res.json({res: 'dummy'});
});

router.post('/addTodo', function(req, res) {
    var conn = new db(dbConf);
    var deadline = req.body.deadline;
    if (!deadline)
        deadline = '9999-12-31';
    deadline = new Date(deadline);
    var check1 = req.body.check1;
    if (!check1)
        check1 = 'null';
    var check2 = req.body.check2;
    if (!check2)
        check2 = 'null';
    var check3 = req.body.check3;
    if (!check3)
        check3 = 'null';
    var check4 = req.body.check4;
    if (!check4)
        check4 = 'null';
    var check5 = req.body.check5;
    if (!check5)
        check5 = 'null';
    var qq = "insert into todo values (null, '"+req.body.title+"', '"+req.body.memo+"', "+new Date().getTime()+", '"+deadline.getTime()+"', '"+req.body.priority+"', 0, 0, '"+check1+"', '"+check2+"', '"+check3+"', '"+check4+"', '"+check5+"')";
    conn.query(qq);
    res.end();
});

router.post('/getTodos', function(req, res) {
    var conn = new db(dbConf);
    var qq = 'select * from todo where is_del = 0 order by regdate desc';
    var result = conn.query(qq);
    res.json(result);
})

module.exports = router;