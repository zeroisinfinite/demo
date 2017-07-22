var debug = require('debug')('projects');
var express = require('express');
var util = require('util');
var router = express.Router();
var projxdb = require('../service/projxdb-mongoose');

var projectDAO = require("../biz/projects");

var Controller = require('../controllers/index');

/* GET home page. */
router.get('/', function (req, res, next) {

    var doc = projectDAO.getAllProjects();
    doc.exec().then(function (data) {
        res.render('index', {
            listDatas: data
        });
    });
});

router.get('/add', function (req, res, next) {

    var name = req.query.name;
    var pm = req.query.pm;
    var gmtBegin = req.query.gmtBegin;
    var gmtComplete = req.query.gmtComplete;

    if (name !== "" && pm !== "") {
        res.render('add');
    } else {
        var doc = projectDAO.getAllProjects();
        doc.exec().then(function (data) {
            console.info(data);
            res.render('index', {
                listDatas: data
            });
        });
    }
});

//编辑
router.get('/edit/new', function (req, res, next) {
    var projxId = req.query.projxId;

    console.info(req.query);

    console.log("projxId:", projxId);

    var filter = {
        projId: projxId
    };

    var doc = projxdb.projectTb.find(filter);

    doc.exec().then(function (data) {
        var item = data[0];
        var progressDoc = projxdb.progressTb.find(filter);
        progressDoc.exec().then(function (progressdata) {
            if (progressdata.length > 0) {
                item = progressdata[0];
            }
            console.info(progressdata[0]);
            console.info("+++item++++");
            console.info(item);

            // 如果是创建者,或者是pm,可以删除
            res.render('edit', {
                canDelete:(req.buc_user.empId === item.creator || ~item.pm.indexOf('('+req.buc_user.empId+')')),
                data: item
            });
        });

    });

});

//新增项目
router.post('/createProject.json', function (req, res) {

    var data = req.query.project;
    projectDAO.createProject(data, req,res);

});

//新增项目状态
router.post('/newProjectStatus.json', function (req, res) {

    var data = req.query.project;
    projectDAO.addNewProjectStatus(data, res);

});

router.get('/deleteProject.json', function (req, res) {
    var projxId = req.query.projxId;
    projectDAO.delProject(projxId,res)
})

//编辑项目
router.post('/editProject.json', function (req, res) {
    res.send('fuck editProject');
});

//根据Id获取项目
router.get('/getProjectById.json', function (req, res) {
    projxdb.projectTb.find({_id: req.query.projectId}, function (err, docs) {

        console.info("getProjectById.json");
        console.info(docs);

        res.send(docs);
    });
});

/*projects RPC, all project query here.*/
module.exports = router;
