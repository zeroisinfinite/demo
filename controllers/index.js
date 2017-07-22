"use strict";

exports.index = function (req, res, next) {
    res.render('index')
};

exports.edit = function (req, res, next) {
    res.render('edit')
};

exports.welcome = function (req, res, next) {

  console.log("++++++welcome++++++");

  //res.render('welcome');
  res.render('welcome');
};

