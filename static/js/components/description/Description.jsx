import React from 'react'
import './Description.css'
import img from '../../../src/assets/digram.mp4'
import HeadingAndPara from '../HeadingAndPara/HeadingAndPara'
export const Description = () => {
  return (
      <div className='description' >
          <HeadingAndPara
              heading={"What is Xythum?"}
              paragraph={ "Xythum is a Dark pool based DeFi protocol focused on secure and seamless blockchain interoperability. It leverages emerging technologies like FROST (Flexible Round-Optimized Schnorr Threshold signatures), FHE (Fully Homomorphic Encryption), and ZK (Zero-Knowledge Proofs) to enable private, efficient, and scalable cross-chain asset movement."}
          
          />
          <div className='digram'>
              <video loading="lazy" preload="auto"   width="80%" height="auto" autoPlay muted loop playsInline >
                <source src={img} type="video/mp4"></source>
            </video>

          </div>
    </div>
  )
}
