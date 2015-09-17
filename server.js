var express = require('express');
var login = require('./login');

express()
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .use(login.routes)
  .get('*', function(req, res){
    res.render('index');
  })
  .listen(3000);