//CUID operation for projects
var projxdb = require('../service/projxdb-mongoose');
var Q = require("q");

var projectTb = 'projectTb'; //project 的表名

var progressdetailTb = 'progressTb'; // project progress detail table

exports.getProjectbyId = function (projectId) {
    return projxdb[projectTb].find({projId: projectId});
}

exports.getAllProjects = function () {
    return projxdb[projectTb].find({isDeleted: "N"});
}


exports.createProject = function (project, req,res) {

    project = JSON.parse(project);
    project.projId = new Date().getTime();
    project.creator = req.buc_user.empId;
    var p = new projxdb[projectTb](project);
    p.save(function (error) {
        if (error) {
            res.send('500');
        } else {
            res.send('200');
        }
    });
}

/**
 * add new status for project
 */

exports.addNewProjectStatus = function (project, res) {

    project = JSON.parse(project);

    var p = projxdb[projectTb];

    p.update({"projId": project.projId}, project, {upsert: true}, function (err, data) {
        if (err) {
            console.log("error happen");
        } else {
            console.log("update successfor project:", project.name);
        }
    });

    var p2 = projxdb[progressdetailTb];

    p2.update({"projId": project.projId}, project, {upsert: true}, function (err, data) {

        if (err) {
            res.send('500');
        } else {
            res.send('200');
        }
    });

}

exports.delProject = function (projectId,res) {
    return projxdb[projectTb].update({projId: projectId}, {isDeleted: "Y"}, {upsert: true}, function (err, data) {
        if (err) {
            res.send('500');
        } else {
            res.send('200');
        }
    });
}

