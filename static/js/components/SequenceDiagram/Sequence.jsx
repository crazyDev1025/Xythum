import React from 'react'
import './Sequence.css'
import img from '../../../src/assets/sequencediagram.mp4'
import HeadingAndPara from '../HeadingAndPara/HeadingAndPara'

export const Sequence = () => {
  return (
    <div className='description sequence gap'>
      <HeadingAndPara
        heading={"Sequence Flow"}

      />
      <p className='seq-pera'>Xythum's cross-chain order execution process begins with the user locking funds in a Taproot deposit channel on the source blockchain. The destination chain detects and verifies the deposit, Unlock an equivalent amount of tokens, and finalizes the transaction through the Ozone engine, which utilizes the FROST algorithm for secure and efficient cryptographic operations.</p>
      <div className='digram'>
        <video loading="lazy" preload="auto" width="80%" height="auto" autoPlay muted loop playsInline  >
          <source src={img} type="video/mp4"></source>
        </video>
        <span id="roadmap"></span>
      </div>
    </div>
  )
}
