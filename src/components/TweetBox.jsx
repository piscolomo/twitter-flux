import React from 'react';
import utils from '../utils';
import {Link} from 'react-router';

class TweetBox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let user = this.props.user;
    let timestamp = this.props.timestamp ? ' ' + String.fromCharCode(8226) + ' ' + this.props.timestamp : '';
    return (
      <li className="row tweet">
        <Link className="two columns" to="user" params={{id: user.userId || user.cid}}>
          <img src={utils.avatar(user.email)} />
        </Link>
        <div className="ten columns">
          <p>
            <strong>{user.fullname}</strong>
            <span className="timestamp">
              @{user.username} {timestamp}
            </span>
          </p>
          <p>{this.props.children}</p>
        </div>
      </li>
    );
  }
}

export default TweetBox;