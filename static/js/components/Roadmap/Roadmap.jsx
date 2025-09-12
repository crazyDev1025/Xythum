import React from "react";
import "./Roadmap.css";
// import RoadmapElements from '../RoadmapElements/RoadmapElements'
import RoadmapSect from "../RoadmapElements/RoadmapSect";
import HeadingAndPara from "../HeadingAndPara/HeadingAndPara";
const Roadmap = () => {
  return (
    <div className="roadmap gap" >
      <div className="center headingGap">
        <HeadingAndPara
          heading={"Roadmap"}
          paragraph={
            "Xythum is committed to driving the future of DeFi with an ambitious roadmap that focuses on expanding cross-chain capabilities, implementing privacy features, and scaling up liquidity solutions. Our vision is to create a secure, seamless, and interoperable DeFi ecosystem accessible to everyone."
          }
        />
      </div>

      <RoadmapSect />

      <div className="roadMapBottomImage">
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <i className="rain"></i>
        <span id="faqs"></span>
      </div>
      {/* <img
        src={imge}
        className='roadMapBottomImage'
      /> */}
    </div>
  );
};

export default Roadmap;
