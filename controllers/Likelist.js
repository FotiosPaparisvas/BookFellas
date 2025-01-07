'use strict';

var utils = require('../utils/writer.js');
var Likelist = require('../service/LikelistService');

// Handles GET request to retrieve a like list by user ID
module.exports.getLikeListByUserId = function getLikeListByUserId (_, res, __, id) {
  Likelist.getLikeListByUserId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.body, error.statusCode);
    });
};

// Handles PUT request to update a like list by user ID
module.exports.updateLikeListByUserId = function updateLikeListByUserId (_, res, __, body, id) {
  Likelist.updateLikeListByUserId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};