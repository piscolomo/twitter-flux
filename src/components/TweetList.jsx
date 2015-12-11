import React from 'react';
import Box from './TweetBox';
import moment from 'moment';

class TweetList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let items = this.props.tweets.map((tweet)=>{
      return (
        <Box key={tweet.cid} user={tweet} timestamp={moment(tweet.$created).fromNow()}>
          {tweet.text}
        </Box>
      );
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default TweetList;
