var React = require('react');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;

var API = require('./api');
var chirpStore = require('./stores/chirps');

var App = require('./components/App');
var Home = require('./components/Home');

var routes = (
  <Route handler={App}>
    <Route name="home" handler={Home} path="/" />
  </Route>
);

API.fetchChirps();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root){
  React.render(<Root />, document.getElementById("app"));
});