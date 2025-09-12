import React from "react";
import "./RoadmapsmallCard.css";
import backgroundimage from "../../assets/blogcard.webp";
import activeBackground from "../../../src/assets/active-slide-1.webp";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

const RoadmapsmallCard = ({ heading, paragraph, nums }) => {
  return (
    <div className="roadmapSmallCard">
      <p className="item">{nums}</p>
      <div className="headingAndParagraph">
        <Heading heading={heading} size={"32px"} />
        <Paragraph paragraph={paragraph} size={"16px"} />
      </div>
      <img className="blogBackgroundImage" src={backgroundimage} alt='xythum ' />
      <img
        className="blogBackgroundImage activeBgImg"
        //   src={backgroundimage}
        src={activeBackground}
        alt='xythum '
      />
    </div>
  );
};

export default RoadmapsmallCard;
