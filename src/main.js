var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var API = require('./api');
import App from './components/App';
import Home from './components/Home';
import UserList from './components/UserList';

var routes = (
  <Route handler={App}>
    <Route name="home" handler={Home} path="/" />
    <Route name="users" handler={UserList} />
    <Route name="user" handler={Home} path="/user/:id" />
  </Route>
);

API.fetchChirps();
API.fetchUsers();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root){
  React.render(<Root />, document.getElementById("app"));
});