'use strict';


/**
 * Get a list of libraries
 *
 * pageNumber Integer  (optional)
 * pageSize Integer  (optional)
 * returns List
 **/
exports.libraryGET = function(pageNumber,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "established" : "2000-01-23",
  "name" : "name",
  "librarian" : "librarian",
  "location" : "location",
  "id" : 21,
  "booksCount" : 2
}, {
  "established" : "2000-01-23",
  "name" : "name",
  "librarian" : "librarian",
  "location" : "location",
  "id" : 21,
  "booksCount" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of books in a specific library
 *
 * id UUID 
 * pageNumber Integer  (optional)
 * pageSize Integer  (optional)
 * returns List
 **/
exports.libraryIdBookGET = function(id) {
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
 * Updates a Library's book list. Use \"add\" or \"remove\" operation to update the list.
 *
 * body Book 
 * id UUID 
 * returns Book
 **/
exports.libraryIdBookPUT = function(body,id) {
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
 * Get a Library by id
 *
 * id UUID 
 * returns Library
 **/
exports.libraryIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "established" : "2000-01-23",
  "name" : "name",
  "librarian" : "librarian",
  "location" : "location",
  "id" : 21,
  "booksCount" : 36
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a library by ID
 *
 * body Library 
 * id UUID The ID of the library to update
 * returns Library
 **/
exports.libraryIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "established" : "2000-01-23",
  "name" : "name",
  "librarian" : "librarian",
  "location" : "location",
  "id" : 21,
  "booksCount" : 47
};
    if (Object.keys(examples).length > 0) {
      resolve(body);
    } else {
      resolve();
    }
  });
}

