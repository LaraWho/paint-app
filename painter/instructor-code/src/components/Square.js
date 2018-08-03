import React, { Component } from 'react';

class Square extends Component {
  constructor() {
    super();

    this.state = {
      background: 'white'
    }
  }

  changeBackgroundColor = () => {
    if (this.props.allowEdit) {
      this.setState({background: this.props.selectedColor})
    }
  }

  render() {
    let styles = {
      width: 10,
      height: 10,
      border: '1px solid black',
      background: this.state.background
    }

    return (
      <div 
        style={styles}
        onMouseEnter={this.changeBackgroundColor}>
      </div>
    )
  }
}

export default Square