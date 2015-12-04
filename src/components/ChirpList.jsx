import React from 'react';
import Box from './ChirpBox';
import moment from 'moment';

class ChirpList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let items = this.props.chirps.map((chirp)=>{
      return (
        <Box key={chirp.cid} user={chirp} timestamp={moment(chirp.$created).fromNow()}>
          {chirp.text}
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

export default ChirpList;
