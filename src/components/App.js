var React = require('React');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <h1>Chirper</h1>
        </div>

        <div className="row">
          <div className="three columns">
            Navigation
          </div>

          <div className="nine columns">
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;