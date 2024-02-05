import React, { useState } from 'react'
import './App.css'

function App() {

  let [text,setText] = useState("")

  function Coordinates(event) {
    let x = event.clientX;
    let y = event.clientY;
    setText("X: " + x + ", Y : " + y);
  }
  console.log(text)

    // document.getElementById("demo").innerHTML = text;
  return (
    <div className='main-body'  onClick={(e) => Coordinates(e)}>
      <div className="nav-bar">
        <ul className='item-list'>
          <li>Home</li>
          <li>Contact</li>
          <li>Plans</li>
          <li>About</li>
        </ul>
      </div>

      <div className='container'>
        <h1>Docs.</h1>
        <div className="box1">
          <div className="box-head">{text}</div>
          <div className="box-body">Oh my God...... Ni hao... nick, gucchi, media. Fire . . . </div>
          <div className="box-botom"></div>
        </div>
      </div>

    </div>
  )
}

export default App