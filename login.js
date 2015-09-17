var passport = require('passport');
var localStrategy = require('passport-local');
var locallyDB = require('locallydb');

var db = new locallyDB('./.data');
var users = db.collection('users');

var crypto = require('cryto');

function hash(password){
  return crypto.createhash('sha512').update(password).digest('hex');
}

passport.use(new localStrategy(function(username, password, done){
  var user = users.where({username: username, passwordHash: hash(password)}).items[0];
  if (user){
    done(null, user);
  }else{
    done(null, false);
  }
}));

passport.serializeUser(function(user, done){
  done(null, user.cid);
});

passport.deserializeUser(function(cid, done){
  done(null, users.get(cid));
});

var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(require('express-session')({
  secret: 'hsabjkfbsajkf609823y140g', resave: true, saveUninitialized: true
}));
router.use(require('cookie-parser')());
router.use(passport.initialize());
router.use(passport.session());