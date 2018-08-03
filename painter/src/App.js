import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import Square from './components/Square';


class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedColor: 'blue',
      edit: false
    }
  }
// handleClick = () => {
//   this.setState({ color: this.state.selectedColor });
// }

changeColor = color => {
  this.setState({ selectedColor: color });
}

toggleEdit() {
  this.setState({edit: !this.state.edit})
}

draw = () => {
  let arr = []

  for(let i = 0; i < 5000; i++) {
    arr.push(<Square key={i + 'aloha'} 
    selectedColor={this.state.selectedColor}
    allowEdit={this.state.edit}/>)
  }
  return arr;
}



  render() {
    return (
      
        <div>
          <ColorPicker handleColorPicker={this.changeColor}/>

          <div style={{display: "flex", flexWrap: "wrap"}}
          onMouseDown={() => this.toggleEdit()} 
          onMouseUp={() => this.toggleEdit()}>
          { this.draw() }
          </div>

        </div>
     
    );
  }
}

export default App;
