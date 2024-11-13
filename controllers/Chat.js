'use strict';

var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

module.exports.getChatById = function getChatById (req, res, next, id) {
  Chat.getChatById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessagesInChat = function getMessagesInChat (req, res, next, sender_id, chat_id) {
  Chat.getMessagesInChat(sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listChats = function listChats (req, res, next, sender_id) {
  Chat.listChats(sender_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startChat = function startChat (req, res, next, body, sender_id) {
  Chat.startChat(body, sender_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateChatById = function updateChatById (req, res, next, body, id) {
  Chat.updateChatById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMessageInChat = function updateMessageInChat (req, res, next, body, sender_id, chat_id) {
  Chat.updateMessageInChat(body, sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
