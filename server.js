'use strict';
var express      = require('express');
var http         = require('http');
var https        = require('https');
var path         = require('path');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static( __dirname + '/public') );

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/test', function(req, res) {

  var data = JSON.stringify({
    api_key: '4491cea3',
    api_secret: '3f894740395a6c5f',
    to: '37477071163',
    from: 'Matador',
    text: JSON.stringify(req.body)
  });

  var options = {
    host: 'rest.nexmo.com',
    path: '/sms/json',
    port: 443,
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Content-Length': Buffer.byteLength(data)
    }
  };

  sendSms();

  function sendSms() {
    var req = https.request(options);

    req.write(data);
    req.end();

    var responseData = '';
    req.on('response', function(res){
     res.on('data', function(chunk){
       responseData += chunk;
     });

     res.on('end', function(){
       console.log(JSON.parse(responseData));
     });
    });
  }

  console.log(req.body);

  res.end();
});

var server = http.createServer(app);

server.listen(8080, function() {
  console.log('Connect')
});
