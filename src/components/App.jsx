import React from 'react';
import {RouteHandler} from 'react-router';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
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
}

export default App;