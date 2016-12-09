const config = require('../config');
const https = require('https');

module.exports = {
  send(text) {

    let smsGetwayInfo = config.get('smsgetway');

    let data = smsGetwayInfo.data;

    data.text = text;

    data = JSON.stringify(data);

    let options = smsGetwayInfo.options;

    options.headers['Content-Length'] = Buffer.byteLength(data);

    this.smsRequest(data, options);
  },

  smsRequest(data, options) {
    let req = https.request(options);

    req.write(data);
    req.end();

    let responseData = '';
    req.on('response', function(res){
     res.on('data', function(chunk){
       responseData += chunk;
     });

     res.on('end', function(){
       console.log(JSON.parse(responseData));
     });
    });
  }
}
