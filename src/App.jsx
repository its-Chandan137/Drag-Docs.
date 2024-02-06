import React, { useState } from 'react'
import './App.css'
import Background from './components/background';
import Pills from './components/Pills';

function App() {
  let [text,setText] = useState("")
  let [x,setX] = useState(null)
  let [y,setY] = useState(null)
  let Coordinates = (event) =>{
    setX(event.clientX);
    setY(event.clientY);
    setText("X: " + x + ", Y: " + y);
    return text,x,y;
  }

  return (
    <div className='main-body' onMouseMove={(e) => {Coordinates(e)}}>
      <Pills text = {text} x = {x} y = {y}/>
      <Background />
    </div>
  )
}

export default App