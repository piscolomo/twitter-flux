var React = require('react');

var ChirpList = React.createClass({
  render: function(){
    var items = this.props.chirps.map(function(chirp){
      return (
        <li key={chirp.cid}>
          <strong>{chirp.username}</strong> said "{chirp.text}"
        </li>
      );
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
});

module.exports = ChirpList;