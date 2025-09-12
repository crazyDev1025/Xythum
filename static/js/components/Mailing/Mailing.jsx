import React from "react";
import "./Mailing.css";
import Heading from "../Heading/Heading";
import JoinWaitList from "../JoinWaitList/JoinWaitList";
import img1 from "../../../src/assets/join-list.mp4";
import img2 from "../../../src/assets/Mailing-mobile.mp4";
const Mailing = () => {
  return (
    <div className="mailingContainer gap ">
      <div className="mailing containerWidth">
        <div className="leptop">
        <video loading="lazy" preload="auto" width="100%" height="100%" loop muted autoPlay playsInline  >
          <source src={img1} type="video/mp4"></source>
        </video>
        </div>
        <div className="mobile">
        <video loading="lazy" preload="auto" width="100%" height="100%" loop muted  autoPlay playsInline  >
          <source src={img2} type="video/mp4"></source>
        </video>
        </div>
        <div className="maling_text">
          <Heading
            size={"32px"}
            heading={"Stay in the loop for everything you need to know"}
          />
          {/* <Paragraph
            marginTop="10px"
            paragraph={"Stay in the loop for everything you need to know"}
          /> */}
          <JoinWaitList marginTop="50px" />
        </div>
      </div>
    </div>
  );
};

export default Mailing;
