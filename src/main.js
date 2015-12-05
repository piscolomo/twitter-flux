import React from 'react';
import ReactRouter from 'react-router';
import {Route} from 'react-router';
import API from './api';
import App from './components/App';
import Home from './components/Home';
import UserList from './components/UserList';

let routes = (
  <Route handler={App}>
    <Route name="home" handler={Home} path="/" />
    <Route name="users" handler={UserList} />
    <Route name="user" handler={Home} path="/user/:id" />
  </Route>
);

API.fetchChirps();
API.fetchUsers();

ReactRouter.run(routes, ReactRouter.HistoryLocation, (Root)=>{
  React.render(<Root />, document.getElementById("app"));
});