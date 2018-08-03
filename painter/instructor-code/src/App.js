import React, { Component } from 'react';
import logo from './logo.svg';

import ColorPicker from './components/ColorPicker'
import Square from './components/Square'

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedColor: 'blue',
      edit: false
    }

    this.changeColor = this.changeColor.bind(this)
  }


  changeColor(color) {
    this.setState({selectedColor: color});
  }

  toggleEdit() {
    console.log(this.state)
    this.setState({edit: !this.state.edit})
  }

  draw = () => {
    let arr = []

    for (let i = 0; i < 5000; i++) {
      arr.push(
      <Square 
        key={i + 'aloha'}
        selectedColor={this.state.selectedColor}
        allowEdit={this.state.edit}/>
    )
    }

    return arr;
  }

  render() {
    return (
      <div>
        <ColorPicker handleColorClick={this.changeColor}/>
        <div 
          style={{display: 'flex', flexWrap: 'wrap'}} 
          onMouseDown={() => this.toggleEdit()}
          onMouseUp={() => this.toggleEdit()}>
          {this.draw()}
        </div>
      </div>
    );
  }
}

export default App;
