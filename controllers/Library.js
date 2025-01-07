'use strict';

var utils = require('../utils/writer.js');
var Library = require('../service/LibraryService');

module.exports.libraryGET = function libraryGET (_, res, __, pageNumber, pageSize) {
  Library.libraryGET(pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.libraryIdBookGET = function libraryIdBookGET(_, res, __, id, pageNumber, pageSize) {
  Library.libraryIdBookGET(id, pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      res.status(error.statusCode || 500).json({ message: error.message || "Internal Server Error" });
    });
};



module.exports.libraryIdBookPUT = function libraryIdBookPUT(_, res, __, body, id) {
  Library.libraryIdBookPUT(body, id)
    .then(function (response) {
      res.status(200).json(response); // Send a success response with the updated book
    })
    .catch(function (error) {
      res.status(error.statusCode || 500).json({ message: error.message || "Internal Server Error" }); // Send the error response
    });
};


module.exports.libraryIdGET = function libraryIdGET (_, res, __, id) {
  Library.libraryIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.libraryIdPUT = function libraryIdPUT (_, res, __, body, id) {
  Library.libraryIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
