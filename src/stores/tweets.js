import constants from '../constants';
import Store from './store';
import UserStore from './users';

export default Store.extend({
  init(){
    this.bindAction(constants.GOT_TWEETS, this.set);
    this.bindAction(constants.TWEETED, this.add);
  },
  timeline(){
    let ids = [UserStore.currentUser.cid].concat(UserStore.currentUser.following);
    return this._data.filter((tweet)=>{
      return ids.indexOf(tweet.userId) > -1;
    });
  },
});