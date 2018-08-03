import React from 'react'

export default function ColorPicker(props) {
    return(
    <div>
        <button onClick={() => props.handleColorPicker('blue')}>Blue</button>
        <button onClick={() => props.handleColorPicker('Green')}>Green</button>
        <button onClick={() => props.handleColorPicker('Yellow')}>Yellow</button>
        <button onClick={() => props.handleColorPicker('Purple')}>Purple</button>
        <button onClick={() => props.handleColorPicker('white')}>White</button>
        <button onClick={() => props.handleColorPicker('red')}>Red</button>
    </div>
    )
}