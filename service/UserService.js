'use strict';


/**
 * Add a rating for a user
 * Adds a new rating for the user with the given ID
 *
 * body Rating Rating details
 * id UUID ID of the user
 * returns Rating
 **/
exports.addUserRating = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "raterID" : 1478624896,
  "rating" : 1,
  "comment" : "comment",
  "id" : 8963214,
  "userId" : 14752593357
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a new User to BookFellas along with a new Library
 *
 * body CreateUser Create user object (optional)
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "userName" : "userName",
      "password" : "password",
      "confirmPassword" : "password",
      "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(body);
    } else {
      resolve();
    }
  });
}


/**
 * Delete user by ID (from BookFellas and Library)
 * Delete a user by their ID
 *
 * id UUID ID of the user
 * no response value expected for this operation
 **/
exports.deleteUserById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by ID
 * Retrieve a user's details by their ID
 *
 * id Long ID of the user
 * returns User
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "id" : "0147525875",
      "userName" : "userName",
      "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user ratings
 * Retrieves the ratings for the user with the given ID
 *
 * id UUID ID of the user
 * returns List
 **/
exports.getUserRatings = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "createdAt",
  "raterID" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "rating" : 1,
  "comment" : "comment",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}, {
  "createdAt" : "createdAt",
  "raterID" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "rating" : 1,
  "comment" : "comment",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 * Logs user into the system
 *
 * username String The username for login (optional)
 * password String The password for login in clear text (optional)
 * returns String
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search for users
 * Search for users based on various parameters
 *
 * name String Name of the user to search for (optional)
 * returns List
 **/
exports.searchUsers = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "0147525875",
  "userName" : "userName",
  "email" : "email"
}, {
  "id" : "0147525875145",
  "userName" : "userName",
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the email of a user
 * Update a user's email by Id
 *
 * body UpdateEmailRequest Update the email of an existent user
 * id UUID ID of user
 * no response value expected for this operation
 **/
exports.updateEmail = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "id": 14,
      "userName": "userName",
      "email": "email"
    };
    
    const user = Object.values(examples).find(user => user.id === id);
    if (user) {
      resolve(body);
    } else {
      reject({ code: 404, message: "User not found" });
    }
  });
};


/**
 * Update the password of a user
 * Update a user's password by Id
 *
 * body UpdatePasswordRequest Update the password of an existent user
 * id UUID ID of user
 * no response value expected for this operation
 **/
exports.updatePassword = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user by ID
 * Update a user's details by their ID
 *
 * body UpdateUserRequest Update the details of an existing user
 * id UUID ID of the user
 * no response value expected for this operation
 **/
exports.updateUserById = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets all Users.
 *
 * pageNumber Integer  (optional)
 * pageSize Integer  (optional)
 * returns User
 **/
exports.userGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
  "id" : "0147525875",
  "userName" : "userName",
  "email" : "email"},
  {
    "id" : "01475258753456789",
  "userName" : "userName2",
  "email" : "email2"
  }

];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

