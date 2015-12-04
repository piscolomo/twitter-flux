import React from 'react';
import actions from '../actions';
import ChirpStore from '../stores/chirps';
import ChirpInput from './ChirpInput';
import ChirpList from './ChirpList';

function getInitialState(){
  return {chirps: ChirpStore.timeline()};
}

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = getInitialState();
  }
  componentDidMount(){
    ChirpStore.addChangeListener(this.onChange.bind(this));
  }
  onChange(){
    this.setState(getInitialState());
  }
  componentWillUnmount(){
    ChirpStore.removeChangeListener(this.onChange.bind(this));
  }
  saveChirp(text){
    actions.chirp(text);
  }
  render(){
    return (
      <div>
        <ChirpInput onSave={this.saveChirp} />
        <ChirpList chirps={this.state.chirps} />
      </div>
    );
  }
}

export default Home;
