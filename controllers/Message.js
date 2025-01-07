'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

// Handles POST request to send a message in a chat
module.exports.sendMessage = function sendMessage (_, res, __, body, sender_id, chat_id) {
  Message.sendMessage(body, sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};