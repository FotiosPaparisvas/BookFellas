'use strict';

var utils = require('../utils/writer.js');
var Library = require('../service/LibraryService');

module.exports.libraryGET = function libraryGET (req, res, next, pageNumber, pageSize) {
  Library.libraryGET(pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.libraryIdBookGET = function libraryIdBookGET (req, res, next, id, pageNumber, pageSize) {
  Library.libraryIdBookGET(id, pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.libraryIdBookPUT = function libraryIdBookPUT (req, res, next, body, id) {
  Library.libraryIdBookPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.libraryIdGET = function libraryIdGET (req, res, next, id) {
  Library.libraryIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.libraryIdPUT = function libraryIdPUT (req, res, next, body, id) {
  Library.libraryIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
