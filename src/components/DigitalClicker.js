// Code DigitalClicker Component Here

import React, { Component } from 'react';

class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  };

  handlerClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  };

  render(){
    return(

      <button onClick={this.handlerClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
