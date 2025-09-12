import React from "react";
import Heading from "../Heading/Heading";
import "./DarkPool.css";
import img1 from "../../assets/solor.mp4";
import img2 from "../../assets/asset-tran.mp4";
import img3 from "../../assets/decentralization.mp4";
import Paragraph from "../Paragraph/Paragraph";
import HeadingAndPara from "../HeadingAndPara/HeadingAndPara";

const DarkPool = () => {
  return (
    <div className="darkPool gap">
      <div className="darkPoolFunctionality">
        <HeadingAndPara
          headingSize="38px"
          heading={"Dark Pool Functionality"}
        />
      </div>
      <div className="cards">
        <div className="bigCard">
          <video loading="lazy" preload="auto"
            width="100%"
            height="100%"
            loop
            muted
            autoPlay
            playsInline
             
          >
            <source src={img1} type="video/mp4" />
          </video>
          <div className="bigCardContainer">
            <div className="bigCardHeading">
              <Heading size={"32px"} heading={"Defense Mechanism"} />
            </div>
            <Paragraph
              size={"16px"}
              marginTop="4px"
              paragraph={
                "At Xythum we use privacy tech ZK with FHE to completely shield user's cross chain order from all the entities including Xythum node runners. Except users none of the party would have complete knowledge about order details to front-run or perform sandwich attacks."
              }
            />
          </div>
        </div>
        <div>
          <div className="dashedBorder">
            <div className="transfer dashedBox">
              <video loading="lazy" preload="auto"
                width="100%"
                height="100%"
                loop
                muted
                autoPlay
                playsInline
                 
              >
                <source src={img2} type="video/mp4" />
              </video>
              <div className="smallCardTwoContainer">
                <Heading heading={"Asset and Context Transfer"} size={"32px"} />
                <Paragraph
                  size={"16px"}
                  marginTop="6px"
                  paragraph={
                    "Dark Pools enable secure, large-scale asset transfers across major chains like Bitcoin and Ethereum, allowing institutions to trade discreetly without impacting market prices."
                  }
                />
              </div>
            </div>
          </div>
          <div className="smallCardTwo dashedBorder">
            <div className="transfer dashedBox">
              <video loading="lazy" preload="auto"
                width="100%"
                height="100%"
                loop
                muted
                autoPlay
                playsInline
                 
              >
                <source src={img3} type="video/mp4" />
              </video>
              <div className="smallCardTwoContainer">
                <Heading heading={"Decentralization"} />
                <Paragraph
                  size={"16px"}
                  marginTop="6px"
                  paragraph={
                    "Our pools eliminate reliance on centralised intermediaries, giving users to control their assets in a private, secure, and trustless environment."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkPool;
