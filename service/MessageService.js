'use strict';


/**
 * Send a new message in a chat
 * Send a new message in a chat for a user by their ID and chat ID
 *
 * body NewMessageRequest Details of the message to be sent
 * sender_id UUID ID of the user sending the message
 * chat_id UUID ID of the chat
 * returns Message
 **/
exports.sendMessage = function(body,sender_id,chat_id) {
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
