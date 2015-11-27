var React = require('react');
var ChirpInput = require('./chirpInput');
var actions = require('../actions');

var Home = React.createClass({
  saveChirp: function(text){
    actions.chirp(text);
  },
  render: function(){
    return (
      <div>
        <ChirpInput onSave={this.saveChirp} />
      </div>
    );
  }
});

module.exports = Home;