var util = require('util');
var mongoose = require('mongoose');

exports.mongoose = mongoose;

exports.objectID = function (objId) {
    return require('mongodb').ObjectID(objId);
}

exports.connect = function (dburl, callback) {
    var options = {
        server: { poolSize: 12 }
    };

    mongoose.connect(dburl,options);
    console.log('===Mongo connected ok!!');
}

exports.disconnect = function (callback) {
    mongoose.disconnect(callback);
    console.log('===Mongo DISconnected OVER!!');
}

exports.setup = function () {

    var Schema = mongoose.Schema;

    //============define schema=============
    var ProjectSchema = exports.ProjectSchema = new Schema({
        projId: {type: String}, //创建项目时候的时间,使用时间戳来解决
        name: {type: String},
        pm: {type: String},
        tpm: {type: String}, //技术leader
        gmtBegin: {type: String},
        gmtComplete: {type: String},
        gmtModified:{type:String},
        status: {type: String, default: 'green'}, //黄，红，绿
        phase: {type: String, default: '正常'},
        isDeleted: {type: String, default: "N"},
        creator:{type:String}
    });

    //项目进度表
    var ProgressDetailSchema = exports.ProgressDetailSchema = new Schema({
        projId: {type: String},
        name: {type: String},
        proDesc: {type: String},
        partner: {type: String},
        pm: {type: String},
        tpm: {type: String}, //技术leader
        gmtBegin: {type: String},
        gmtComplete: {type: String},
        gmtModified:{type:String},
        status: {type: String}, //黄，红，绿
        riskReason: {type: String}, //风险原因
        phase: {type: String},//待发布
        members: {type: String}, //项目成员
        pdWContent: {type: String},
        devWContent: {type: String},
        feWContent: {type: String},
        qaWContent: {type: String},
        author: {type: String}//编辑人
    });

    var MemberSchema = exports.MemberSchema = new Schema({
        name: {type: String},
        role: {type: String},
        gmtCreate: {type: String},
        gmtModified: {type: String},
        modifier: {type: String},
        creator: {type: String},
        isDeleted: {type: String}
    });

    var ActionRecordSchema = exports.ActionRecordSchema = new Schema({
        type: {type: String},
        content: {type: String},
        gmtCreate: {type: String},
        gmtModified: {type: String},
        modifier: {type: String},
        creator: {type: String},
        isDeleted: {type: String}
    });
    console.log('===Mongo setup ok!');

    //register model
    this.mongoose.model('Project', ProjectSchema);
    this.mongoose.model('progressdetail', ProgressDetailSchema);
    //this.mongoose.model('ActionRecord',ActionRecordSchema);

    exports.projectTb = this.mongoose.model('Project');
    exports.progressTb = this.mongoose.model('progressdetail');
    //exports.Member = this.mongoose.model('ActionRecord');
    //callback(null);
}
