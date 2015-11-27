var React = require('react');

var ChirpInput = React.createClass({
  getInitialState: function(){
    return {
      value: ''
    };
  },
  handleChange: function(e){
    this.setState({value: e.target.value});
  },
  handleClick: function(e){
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  },
  render: function(){
    return (
      <div className="row">
        <div className="nine columns">
          <input className="u-full-width" type="text" placeholder="Say something!" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="three columns">
          <button className="u-full-width button-primary" onClick={this.handleClick}>Chirp</button>
        </div>
      </div>
    );
  }
});

module.exports = ChirpInput;