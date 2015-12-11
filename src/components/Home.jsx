import React from 'react';
import actions from '../actions';
import TweetStore from '../stores/tweets';
import TweetInput from './TweetInput';
import TweetList from './TweetList';

function getInitialState(){
  return {tweets: TweetStore.timeline()};
}

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = getInitialState();
  }
  componentDidMount(){
    TweetStore.addChangeListener(this.onChange.bind(this));
  }
  onChange(){
    this.setState(getInitialState());
  }
  componentWillUnmount(){
    TweetStore.removeChangeListener(this.onChange.bind(this));
  }
  saveTweet(text){
    actions.tweet(text);
  }
  render(){
    return (
      <div>
        <TweetInput onSave={this.saveTweet} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default Home;
