'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.bookGET = function bookGET (_, res, __) {
  Book.bookGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookIdDELETE = function bookIdDELETE (_, res, __, id) {
  Book.bookIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.message, error.code);
    });
};

module.exports.bookIdGET = function bookIdGET (_, res, __, id) {
  Book.bookIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error.message, error.code);
    });
};

module.exports.bookIdPUT = function bookIdPUT (_, res, __, id) {
  Book.bookIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookPOST = function bookPOST (_, res, __, body) {
  Book.bookPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bookSearchPOST = function bookSearchPOST (_, res, __, title) {
  Book.bookSearchPOST(title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
