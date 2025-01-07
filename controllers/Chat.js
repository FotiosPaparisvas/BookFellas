'use strict';

var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

module.exports.getChatById = function getChatById(_, res, _, id) {
  Chat.getChatById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error.status === 404) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
};


module.exports.getMessagesInChat = function getMessagesInChat (_, res, _, sender_id, chat_id) {
  Chat.getMessagesInChat(sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listChats = function listChats (_, res, _, sender_id) {
  Chat.listChats(sender_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startChat = function startChat (_, res, _, body, sender_id) {
  Chat.startChat(body, sender_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateChatById = function updateChatById (_, res, _, body, id) {
  Chat.updateChatById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMessageInChat = function updateMessageInChat (_, res, _, body, sender_id, chat_id) {
  Chat.updateMessageInChat(body, sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
