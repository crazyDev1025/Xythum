import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import './HeadingAndPara.css'
import imge from '../../../src/assets/MainGlow.webp'
const HeadingAndPara = ({
    heading, paragraph,
    background = false,
headingSize="38px"
}) => {
  return (
      <div className='headingAndPara'>
          {
              background && <img
                  className='glowBackgroundImage'
              src={imge}
              alt='xythum '
              />
          }
          <div className='questionDescription headingGap '>
              <Heading
                  heading={heading}
                  size={headingSize}
              />

          </div>
          <div className=''>
              <Paragraph
                  size='20px'
                  marginBottom='2px'

                  paragraph={paragraph}
              />



          </div>

          
         
    </div>
  )
}

export default HeadingAndPara