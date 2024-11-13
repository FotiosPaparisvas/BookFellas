'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.sendMessage = function sendMessage (req, res, next, body, sender_id, chat_id) {
  Message.sendMessage(body, sender_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
