import assign from 'object-assign';
import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

const CHANGE_EVENT = "CHANGE";
let events = new EventEmitter();

const storeMethods = {
  init(){},
  set(arr){
    let currIds = this._data.map((item)=>{ return item.cid; });

    arr.filter((item)=>{
      return currIds.indexOf(item.cid) === -1;
    }).forEach(this.add.bind(this));
  },
  add(item){
    this._data.push(item);
  },
  all(){
    return this._data;
  },
  get(id){
    this._data.filter((item)=>{
      return item.cid === id;
    })[0];
  },
  addChangeListener(fn){
    events.on(CHANGE_EVENT, fn);
  },
  removeChangeListener(fn){
    events.removeListener(CHANGE_EVENT, fn);
  },
  emitChange(){
    events.emit(CHANGE_EVENT);
  },
  bindAction(actionType, actionFn){
    if(this.actions[actionType]){
      this.actions[actionType].push(actionFn);
    }else{
      this.actions[actionType] = [actionFn];
    }
  }
};

export default {
  extend(methods){
    let store = {
      _data: [],
      actions: {}
    };

    assign(store, storeMethods, methods);

    store.init();

    dispatcher.register((action)=>{
      if(store.actions[action.actionType]){
        store.actions[action.actionType].forEach((fn)=>{
          fn.call(store, action.data);
          store.emitChange();
        });
      }
    });

    return store;
  }
}