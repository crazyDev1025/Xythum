import React from "react";
import "./HeroCenter.css";
import topvideo from "../../assets/topVideo.mp4";
import videothumbail from "../../assets/topVideothumbnail.png";

const HeroCenter = () => {
  return (
    <div className="heroCenter">
      <div className="heroCenterHeading">
        Unlock Limitless <span>Untapped</span>
        <br /> Liquidity In DeFi
      </div>
      <div className="heroContent">
        Xythum lets you access the hidden reserves of DeFi with an experience of
        unmatched liquidity, privacy, and efficiency across chains—driving the
        future of decentralized finance.
      </div>
      <div className="joinWaitList">{/* <JoinWaitList/> */}</div>
      <div className="lightImage">
        <video loading="lazy" preload="auto"  width="80%" height="auto" autoPlay muted loop playsInline   poster={videothumbail}>
          <source src={topvideo} type="video/mp4"></source>
        </video>
        {/* <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/Sf4WqHBCYSY?autoplay=1&controls=0&mute=1&showinfo=0&modestbranding=1&rel=0" 
    title="YouTube video player" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen>
  </iframe> */}
        <span id="learn"></span>
      </div>
    </div>
  );
};

export default HeroCenter;
