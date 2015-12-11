var login = require('./login');
var locallyDB = require('locallydb');
var db = new locallyDB('./.data');
var tweets = db.collection('tweets');

var router = require('express').Router();
router.route('/api/tweets')
  .all(login.required)
  .get(function(req, res){
    res.json(tweets.toArray());
  })
  .post(function(req, res){
    var tweet = req.body;
    tweet.userId = req.user.cid;

    //bad julio, bad
    tweet.username = req.user.username;
    tweet.fullname = req.user.fullname;
    tweet.email = req.user.email;

    var id = tweets.insert(tweet);
    res.json(tweets.get(id));
  })

module.exports = router;