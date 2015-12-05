import constants from '../constants';
import Store from './store';

export default Store.extend({
  init(){
    this.bindAction(constants.GOT_USERS, this.set);
    this.bindAction(constants.FOLLOWED, this.updateUser);
    this.bindAction(constants.UNFOLLOWED, this.updateUser);
  },
  currentUser: USER,
  updateUser(data){
    this.currentUser = data;
  }
});