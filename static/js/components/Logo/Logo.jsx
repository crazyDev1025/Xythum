import React from "react";
import img from "../../assets/image17.webp";
import "./Logo.css";
const Logo = ({ width = "20px" }) => {
  return (
    <div className="logo">
        <img
          style={{
            width,
          }}
          src={img}
          alt='xythum '
        />
      {/* <div>
        <img src={img2} />
      </div> */}
    </div>
  );
};

export default Logo;
