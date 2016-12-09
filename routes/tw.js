const path = require('path');

module.exports.get = function(req, res) {
  res.sendFile(path.join(__dirname, '../views/tw.html'));
}

module.exports.post = function(req, res) {
  res.send('This api is not ready')
}