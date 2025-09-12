import React from "react";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./TechStackCard.css";

const TechStackCard = ({ heading, description, index, image }) => {
  return (
    <div className="techStackCard">
      <div className="index">{index}</div>
      {image}
      <div className="techStackCardParagraph">
        <div>
          <Heading size={"23px"} heading={heading} />
        </div>
        <div>
          <Paragraph size={"16px"} paragraph={description} />
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
