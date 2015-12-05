import constants from '../constants';
import Store from './store';
import UserStore from './users';

export default Store.extend({
  init(){
    this.bindAction(constants.GOT_CHIRPS, this.set);
    this.bindAction(constants.CHIRPED, this.add);
  },
  timeline(){
    let ids = [UserStore.currentUser.cid].concat(UserStore.currentUser.following);
    return this._data.filter((chirp)=>{
      return ids.indexOf(chirp.userId) > -1;
    });
  },
});