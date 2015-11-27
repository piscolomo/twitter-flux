var React = require('react');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;

var API = require('./api');
var chirpStore = require('./stores/chirps');

var App = require('./components/App');

var routes = (<Route handler={App} ></Route>);

API.fetchChirps();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root){
  React.render(<Root />, document.getElementById("app"));
});