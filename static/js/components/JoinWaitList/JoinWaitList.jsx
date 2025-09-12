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
      <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon" className="joinWaitlistButton">
        {title}
      </a>

      {showPopup ? (
        <JoinWaitListEmail text="Title" closePopup={() => togglePopup()} />
      ) : null}
    </div>
  );
};

export default JoinWaitList;
