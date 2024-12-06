'use strict';


/**
 * Gets all books.
 *

 * returns List
 **/
exports.bookGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : "author",
  "isbn" : "isbn",
  "id" : 0,
  "publishedDate" : "2000-01-23",
  "title" : "title"
}, {
  "author" : "author",
  "isbn" : "isbn",
  "id" : 0,
  "publishedDate" : "2000-01-23",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a book from BookFellas based on it's id.
 *
 * id UUID 
 * no response value expected for this operation
 **/
exports.bookIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a book by ID
 *
 * id UUID 
 * returns Book
 **/
exports.bookIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "author",
  "isbn" : "isbn",
  "id" : 0,
  "publishedDate" : "2000-01-23",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a book by ID
 *
 * body Book 
 * id UUID 
 * returns Book
 **/
exports.bookIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "author",
  "isbn" : "isbn",
  "id" : 0,
  "publishedDate" : "2000-01-23",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a new book to BookFellas
 *
 * body Book 
 * returns Book
 **/
exports.bookPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "author",
  "isbn" : "isbn",
  "id" : 0,
  "publishedDate" : "2000-01-23",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(body);
    } else {
      resolve();
    }
  });
}


/**
 * Gets all Books based on the search parameters.
 *
 * body BookSearchParams  (optional)
 * Author string  (optional)
 * title string  (optional)
 * category string (optional)
 * no response value expected for this operation
 **/
exports.bookSearchPOST = function(body, Author, title, category) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

