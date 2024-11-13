'use strict';


/**
 * Get chat by ID
 * Retrieve a chat's details by its ID
 *
 * id String ID of the chat
 * returns Chat
 **/
exports.getChatById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "messages" : [ {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "participants" : [ 0, 0 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get messages in a specific chat
 * Retrieve messages in a specific chat identified by sender ID and chat ID
 *
 * sender_id String ID of the sender
 * chat_id String ID of the chat
 * returns List
 **/
exports.getMessagesInChat = function(sender_id,chat_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sender_id" : 6,
  "content" : "content",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
}, {
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sender_id" : 6,
  "content" : "content",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List chats for a user
 * Retrieve a list of chats for a user by their ID
 *
 * sender_id UUID ID of the user
 * returns List
 **/
exports.listChats = function(sender_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "messages" : [ {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "participants" : [ 0, 0 ]
}, {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "messages" : [ {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "participants" : [ 0, 0 ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Start a new chat
 * Start a new chat for a user by their ID
 *
 * body NewChatRequest Details of the new chat
 * sender_id UUID ID of the user starting the chat
 * returns Chat
 **/
exports.startChat = function(body,sender_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "messages" : [ {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "participants" : [ 0, 0 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update chat by ID
 * Update a chat's details by its ID
 *
 * body Chat Updated chat details
 * id String ID of the chat
 * returns Chat
 **/
exports.updateChatById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "messages" : [ {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sender_id" : 6,
    "content" : "content",
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "participants" : [ 0, 0 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a message in a specific chat
 * Update a message in a specific chat identified by sender ID and chat ID
 *
 * body Message Updated message details
 * sender_id String ID of the sender
 * chat_id String ID of the chat
 * returns Message
 **/
exports.updateMessageInChat = function(body,sender_id,chat_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sender_id" : 6,
  "content" : "content",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

