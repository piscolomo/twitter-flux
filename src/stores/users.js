var constants = require('../constants');

var UserStore = module.exports = require('./store').extend({
  init: function(){
    this.bindAction(constants.GOT_USERS, this.set);
    this.bindAction(constants.FOLLOWED, this.updateUser);
    this.bindAction(constants.UNFOLLOWD, this.updateUser);
  },
  currentUser: USER,
  updateUser: function(data){
    this.currentUser = data;
  }
});