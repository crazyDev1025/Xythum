import React, { useState } from "react";
import "./JoinWaitList.css";
import JoinWaitListEmail from "../JoinWaitListEmail/JoinWaitListEmail";

const JoinWaitList = ({ title = "Join Waitlist", marginTop = "0" }) => {
  const [showPopup, setPopup] = useState(false);
  const togglePopup = () => {
    setPopup(!showPopup);
  };
  return (
    <div
      style={{
        marginTop,
      }}
      className="joinWaitlist"
    >
      <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x2c4ceb697f4d8385621438c0e785635942e8404f" className="joinWaitlistButton">
        {title}
      </a>

      {showPopup ? (
        <JoinWaitListEmail text="Title" closePopup={() => togglePopup()} />
      ) : null}
    </div>
  );
};

export default JoinWaitList;
