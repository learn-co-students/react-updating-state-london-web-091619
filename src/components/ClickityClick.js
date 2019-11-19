import React, {Component} from 'react';

export default class ClickityClick extends Component {

  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState(preState =>{
      return {
        hasBeenClicked: !preState.hasBeenClicked
      }
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? 'totally' : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
