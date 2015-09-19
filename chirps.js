var login = require('./login');
var locallyDB = require('locallydb');
var db = new locallyDB('./.data');
var chirps = db.collection('chirps');

var router = require('express').Router();
router.route('/api/chirps')
  .all(login.required)
  .get(function(req, res){
    res.json(chirps.toArray());
  })
  .post(function(req, res){
    var chirp = req.body;
    chirp.userId = req.user.cid;

    //bad julio, bad
    chirp.username = req.user.username;
    chirp.fullname = req.user.fullname;
    chirp.email = req.user.email;

    var id = chirps.insert(chirp);
    res.json(chirps.get(id));
  })

module.exports = router;