'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

// Handles POST request to add a rating for a user by user ID
module.exports.addUserRating = function addUserRating (_, res, __, body, id) {
  User.addUserRating(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles POST request to create a new user
module.exports.createUser = function createUser (_, res, __, body) {
  User.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles DELETE request to delete a user by ID
module.exports.deleteUserById = function deleteUserById (_, res, __, id) {
  User.deleteUserById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles GET request to retrieve a user by ID
module.exports.getUserById = function getUserById (_, res, __, id) {
  User.getUserById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles GET request to retrieve ratings for a user by user ID
module.exports.getUserRatings = function getUserRatings (_, res, __, id) {
  User.getUserRatings(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles POST request to log in a user
module.exports.loginUser = function loginUser (_, res, __, username, password) {
  User.loginUser(username, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles POST request to log out a user
module.exports.logoutUser = function logoutUser (_, res, __) {
  User.logoutUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles GET request to search for users by name
module.exports.searchUsers = function searchUsers (_, res, __, name) {
  User.searchUsers(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles PUT request to update a user's email by user ID
module.exports.updateEmail = function updateEmail (_, res, __, body, id) {
  User.updateEmail(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

// Handles PUT request to update a user's password by user ID
module.exports.updatePassword = function updatePassword (_, res, __, body, id) {
  User.updatePassword(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles PUT request to update a user by user ID
module.exports.updateUserById = function updateUserById (_, res, __, body, id) {
  User.updateUserById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles GET request to retrieve a paginated list of users
module.exports.userGET = function userGET (_, res, __, pageNumber, pageSize) {
  User.userGET(pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};