import dispatcher from './dispatcher';
import constants from './constants';

const actions = {}

Object.keys(constants).forEach((key)=>{
  let funcName = key.split('_').map((word, i)=>{
    if (i===0) return word.toLowerCase();
    return word[0] + word.slice(1).toLowerCase();
  }).join("");

  actions[funcName] = (data)=>{
    dispatcher.dispatch({
      actionType: constants[key],
      data: data
    });
  }
});

export default actions;