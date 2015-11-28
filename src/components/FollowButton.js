var React = require('react');
var actions = require('../actions');
var UserStore = require('../stores/users');

var FollowButton = module.exports = React.createClass({
  getInitialState: function(){
    return {
      id: UserStore.currentUser.cid,
      currentlyFollowing: UserStore.currentUser.following
    };
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState(this.getInitialState());
  },
  componentWillUnmount: function(){
    UserStore.removeChangeListener(this.onChange);
  },
  follow: function(){
    actions.follow(this.props.userId);
  },
  unfollow: function(){
    actions.unfollow(this.props.userId);
  },
  render: function(){
    var text, action;
    if (this.state.id == this.props.userId) return <span>This is you!</span>;

    if (this.state.currentlyFollowing.indexOf(this.props.userId) > -1){
      text = "Unfollow";
      action = this.unfollow;
    }else{
      text = "Follow";
      action = this.follow;
    }

    return <button onClick={action}>{text}</button>;
  }
});