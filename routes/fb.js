const path = require('path');
const smsgetway = require('../middleware/smsgetway');

module.exports.get = function(req, res) {
  res.sendFile(path.join(__dirname, '../views/fb.html'));
}

module.exports.post = function(req, res) {
  res.send('This api is not ready')
}