import React,{useState} from 'react'


const Pills = ({text,x,y}) =>{
    let boxStyle =
        {
        transform: `translate(${x}px,${y}px)`,
        }
        console.log(boxStyle)
  return (
    <div className='Pills-Full-Screen'>
        <div className="box1" style={boxStyle}>
          <div className="box-head">{text}</div>
          <div className="box-body">Oh my God...... Ni hao... nick, gucchi, media. Fire . . . </div>
          <div className="box-botom"></div>
        </div>
    </div>
  )
}

export default Pills