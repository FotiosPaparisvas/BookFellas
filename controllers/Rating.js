'use strict';

var utils = require('../utils/writer.js');
var Rating = require('../service/RatingService');

module.exports.deleteRatingById = function deleteRatingById (_, res, __, id) {
  Rating.deleteRatingById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.body, error.statusCode);
    });
};

module.exports.getRatingById = function getRatingById (_, res, __, id) {
  Rating.getRatingById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.body, error.statusCode);
    });
};

module.exports.updateRatingById = function updateRatingById (_, res, __, body, id) {
  Rating.updateRatingById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
