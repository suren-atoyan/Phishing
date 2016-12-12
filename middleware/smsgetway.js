const config = require('../config');

const https  = require('https');

const fetch  = require('node-fetch');

const chalk  = require('chalk');

module.exports = {
  send(text) {

    let smsGetwayInfo = config.get('smsgetway');

    let data = smsGetwayInfo.data;

    if (!data.api_key || !data.api_secret) {
      console.error(chalk.red(' Invalid \'api_key\' or \'api_secret\'. Please check the relevant fields in config.json file'));
    } else {
      data.text = text;

      data = JSON.stringify(data);

      let options = smsGetwayInfo.options;

      options.headers['Content-Length'] = Buffer.byteLength(data);

      let url = 'https://' +
                smsGetwayInfo.host +
                smsGetwayInfo.path;

      options.body = data;

      console.log(data);

      this.smsRequest(url, options);
    }

  },

  smsRequest(url, options) {
    fetch(url , options)
      .then(
        function(res) {
          console.log('Log ::: SMS successfully sent');
        },

        function(rej) {
          console.error('Error ', rej);
        }
      );
  }
}
