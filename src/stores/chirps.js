var constants = require('../constants');

var ChirpStore = module.exports = require('./store').extend({
  init: function(){
    this.bindAction(constants.GOT_CHIRPS, this.set);
    this.bindAction(constants.CHIRPED, this.add);
  }
});