'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.bookGET = function bookGET (req, res, next, pageNumber, pageSize) {
  Book.bookGET(pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookIdDELETE = function bookIdDELETE (req, res, next, id) {
  Book.bookIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookIdGET = function bookIdGET (req, res, next, id) {
  Book.bookIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookIdPUT = function bookIdPUT (req, res, next, body, id) {
  Book.bookIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookPOST = function bookPOST (req, res, next, body) {
  Book.bookPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookSearchPOST = function bookSearchPOST (req, res, next, body, pageNumber, pageSize) {
  Book.bookSearchPOST(body, pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
