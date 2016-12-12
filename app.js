'use strict';
const express      = require('express');
const http         = require('http');
const https        = require('https');
const path         = require('path');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const figlet       = require('figlet');
const chalk        = require('chalk');
// config
const config       = require('./config');

// application
const app          = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static( __dirname + '/public') );

require('./routes')(app);

const server = http.createServer(app);

server.listen(config.get('port') || process.env.PORT || 8080, function() {
  figlet('connect', function(err, data) {
    if (err) return console.log(err);
    console.log(data);
  });

  figlet('phishing', function(err, data) {
    if (err) return console.error(chalk.red(err));
    console.log(chalk.cyan(data));
  })
});
