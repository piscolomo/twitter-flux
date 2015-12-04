import React from 'react';
import actions from '../actions';
import UserStore from '../stores/users';

function getInitialState(){
  return {
    id: UserStore.currentUser.cid,
    currentlyFollowing: UserStore.currentUser.following
  }
}

class FollowButton extends React.Component{
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
  follow(){
    actions.follow(this.props.userId);
  }
  unfollow(){
    actions.unfollow(this.props.userId);
  }
  render(){
    let text, action;
    if (this.state.id == this.props.userId) return <span>This is you!</span>;

    if (this.state.currentlyFollowing.indexOf(this.props.userId) > -1){
      text = "Unfollow";
      action = this.unfollow;
    }else{
      text = "Follow";
      action = this.follow;
    }

    return <button onClick={action.bind(this)}>{text}</button>;
  }
}

export default FollowButton;