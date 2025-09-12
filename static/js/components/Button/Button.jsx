import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

import swap from '../../assets/swapButton.webp'

const Button = ({title}) => {
  return (
      <Link to={"https://swap.xythum.io/"} className='button'>
      Swap
      <img
        style={{
          width :"20px"
        }}
      src ={swap}
        alt='swap'
      />
          
    </Link>
  )
}

export default Button