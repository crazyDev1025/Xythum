import React from 'react';
import './Paragraph.css';

const Paragraph = ({
  paragraph,
  size = "18px",
  marginTop = "0px",
  marginBottom = "0px",
  color= "white"
}) => {
  return (
    <div
      style={{
        fontSize: size,
        marginTop,
        marginBottom,
        color 

      }}
      className='paragraph'
    >
      {paragraph}
    </div>
  );
};

export default Paragraph;
