'use strict';

var utils = require('../utils/writer.js');
var Likelist = require('../service/LikelistService');

module.exports.getLikeListByUserId = function getLikeListByUserId (req, res, next, id) {
  Likelist.getLikeListByUserId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLikeListByUserId = function updateLikeListByUserId (req, res, next, body, id) {
  Likelist.updateLikeListByUserId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
