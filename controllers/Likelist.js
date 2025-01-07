'use strict';

var utils = require('../utils/writer.js');
var Likelist = require('../service/LikelistService');

module.exports.getLikeListByUserId = function getLikeListByUserId (_, res, __, id) {
  Likelist.getLikeListByUserId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.body, error.statusCode);
    });
};

module.exports.updateLikeListByUserId = function updateLikeListByUserId (_, res, __, body, id) {
  Likelist.updateLikeListByUserId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
