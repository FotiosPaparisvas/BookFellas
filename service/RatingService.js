'use strict';


/**
 * Delete rating by ID
 * Delete a rating by its ID
 *
 * id UUID ID of the rating
 * no response value expected for this operation
 **/
exports.deleteRatingById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get rating by ID
 * Retrieve a rating's details by its ID
 *
 * id UUID ID of the rating
 * returns Rating
 **/
exports.getRatingById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "raterID" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "rating" : 1,
  "comment" : "comment",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update rating by ID
 * Update a rating's details by its ID
 *
 * body UpdateRatingRequest Update the details of an existing rating
 * id UUID ID of the rating
 * returns Rating
 **/
exports.updateRatingById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "raterID" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "rating" : 1,
  "comment" : "comment",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

