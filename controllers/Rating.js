'use strict';

var utils = require('../utils/writer.js');
var Rating = require('../service/RatingService');

module.exports.deleteRatingById = function deleteRatingById (req, res, next, id) {
  Rating.deleteRatingById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.body, error.statusCode);
    });
};

module.exports.getRatingById = function getRatingById (req, res, next, id) {
  Rating.getRatingById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.body, error.statusCode);
    });
};

module.exports.updateRatingById = function updateRatingById (req, res, next, body, id) {
  Rating.updateRatingById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
