console.log("===Projx nodejs start..., ok!!!!");

var nobuc = require("nobuc");
var buc = require("node-buc");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var exec = require('child_process').exec;
var config = require("./config");
var dburl = 'mongodb://' + config.ip + '/projx';

var cookieParser = require('cookie-parser');
var session = require('express-session');

var bodyParser = require('body-parser');

var _ = require('lodash');

var welcome = require('./routes/index');
var projects = require('./routes/projects');

var projxdb = require('./service/projxdb-mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'xtpl');

app.use(cookieParser(config.cookieSecret))
    .use(session({
        secret: 'keyboard cat',
        cookie: {
            "path": "/",
            "httpOnly": true
        }
    }))
    .use(nobuc(/.*/, _.merge(config.buc, {
        filter: function (req) {
            return req.session && req.session[config.userKey];
        }
    })))
    //.use(buc('/', {
    //    server: 'https://login-test.alibaba-inc.com',
    //    account: 'dashboard',
    //    authOptions: {
    //        CANCEL_CERT: true
    //    }
    //}))
// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(cookieParser())

    .use(express.static(path.join(__dirname, 'public')))

/*app.use(buc({
 server: 'https://login-test.alibaba-inc.com/',
 account: 'alineiwai', //ali-f2e-game
 //contextPath: '/njs',
 loginParams: {
 // 如果你不需要证书登录, 请将下面这行去掉注释
 // CANCEL_CERT: true,
 },
 // 如果你的应用支持 access token 登录, 那么请设置这个参数, 如 阿里内网内嵌应用
 authOptions: {
 },
 }));
 */

app.use('/', welcome);

app.use('/projx', projects);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//db connect
projxdb.connect(dburl, function (err) {
    if (err) {
        throw err;
    }
});

projxdb.setup();

//db disconnect on close
app.on('close', function (erron) {
    projxdb.disconnect(function (err) {
        console.log('===disconnect on app closed.');
    });
});

//==================COMMON FUNCTION====================

app.set('port', config.port || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
    //exec("open http://127.1:" + server.address().port);
    console.log("opening 127.0.0.1:" + server.address().port);
});

module.exports = app;

console.log('===Projx nodejs started successful!!');
