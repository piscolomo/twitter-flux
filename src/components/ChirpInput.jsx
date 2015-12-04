import React from 'react';

class ChirpInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }
  handleClick(e){
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }
  render(){
    return (
      <div className="row">
        <div className="nine columns">
          <input className="u-full-width" type="text" placeholder="Say something!" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="three columns">
          <button className="u-full-width button-primary" onClick={this.handleClick.bind(this)}>Chirp</button>
        </div>
      </div>
    );
  }
}

export default ChirpInput;