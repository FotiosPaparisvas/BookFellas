'use strict';
// Import the necessary functions for the Message service
var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

// Handles POST request to send a message in a chat
module.exports.sendMessage = function sendMessage (req, res, __, body) {
  Message.sendMessage(body, req.sender_id, req.chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};