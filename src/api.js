var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');

function get(url){
  return fetch(url,{
    credentials: 'same-origin'
  }).then(function(res){
    return res.json();
  });
}

function post(url, body){
  return fetch(url,{
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(body || {}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function(res){
    return res.json();
  });
}

var API = module.exports = {
  fetchChirps: function(){
    get('/api/chirps').then(actions.gotChirps.bind(actions));
  },
  fetchUsers: function(){
    get('/api/users').then(actions.gotUsers.bind(actions));
  },
  saveChirp: function(text){
    text = text.trim();
    if (text === "") return;
    post('/api/chirps', {text: text}).then(actions.chirped.bind(actions));
  }
};

dispatcher.register(function(action){
  switch (action.actionType){
    case constants.CHIRP:
      API.saveChirp(action.data);
      break;
  }
});