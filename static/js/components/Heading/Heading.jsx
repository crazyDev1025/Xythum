import React from 'react'
import './Heading.css';
const Heading = ({ heading ,size = "38px",
  marginTop = "0px",
  marginBottom = "0px",
  color = "white" }) => {
  return (
      <div
      className='heading'
      style={{
        fontSize: size,
        marginTop,
        marginBottom,
        color

      }}
      
      >{heading}</div>
  )
}

export default Heading