'use strict';
// Add the necessary imports 
var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

// Handles GET request to retrieve a chat by ID
module.exports.getChatById = function getChatById(_, res, __, id) {
  Chat.getChatById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
    // Return error codes
      if (error.status === 404) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
};

// Handles GET request to retrieve messages in a chat by sender ID and chat ID
module.exports.getMessagesInChat = function getMessagesInChat (_, res, __, sender_id, chat_id) {
  Chat.getMessagesInChat(sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles GET request to list all chats for a sender ID
module.exports.listChats = function listChats (_, res, __, sender_id) {
  Chat.listChats(sender_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles POST request to start a new chat
module.exports.startChat = function startChat (_, res, __, body, sender_id) {
  Chat.startChat(body, sender_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles PUT request to update a chat by ID
module.exports.updateChatById = function updateChatById (_, res, __, body, id) {
  Chat.updateChatById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Handles PUT request to update a message in a chat by sender ID and chat ID
module.exports.updateMessageInChat = function updateMessageInChat (_, res, __, body, sender_id, chat_id) {
  Chat.updateMessageInChat(body, sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};