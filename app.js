'use strict';
const express      = require('express');
const http         = require('http');
const https        = require('https');
const path         = require('path');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

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
  console.log('Connect')
});
