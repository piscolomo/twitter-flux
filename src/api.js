var actions = require('./actions');

function get(url){
  return fetch(url,{
    credentials: 'same-origin'
  }).then(function(res){
    return res.json();
  });
}

var API = module.exports = {
  fetchChirps: function(){
    get('/api/chirps').then(actions.gotChirps.bind(actions));
  }
};