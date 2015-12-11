import React from 'react';
import actions from '../actions';
import UserStore from '../stores/users';
import {Link} from 'react-router';
import Box from './TweetBox';
import FollowButton from './FollowButton';

function getInitialState(){
  return {
    users: UserStore.all(),
    user: UserStore.currentUser
  };
}

class UserList extends React.Component{
  constructor(props){
    super(props);
    this.state = getInitialState();
  }
  componentDidMount(){
    UserStore.addChangeListener(this.onChange.bind(this));
  }
  onChange(){
    this.setState(getInitialState());
  }
  componentWillUnmount(){
    UserStore.removeChangeListener(this.onChange.bind(this));
  }
  render(){
    let items = this.state.users.filter((user)=>{
      return this.state.user.cid !== user.cid; 
    }).map((user)=>{
      return (
        <Box user={user} key={user.cid}>
          <FollowButton userId={user.cid} />
        </Box>
      );
    });

    return <ul>{items}</ul>;
  }
}

export default UserList;
