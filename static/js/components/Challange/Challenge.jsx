import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./Challange.css";
import image from "../../assets/our-solution.mp4";
import image2 from "../../assets/main-root.mp4";
import img3 from "../../assets/Group 94 (1).webp";
import HeadingAndPara from "../HeadingAndPara/HeadingAndPara";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Thumbs } from "swiper/modules";

const Challange = () => {
  const paragraphs = [
    {
      heading: "Speed",
      paragraph:
        "Xythum leverages sharding, FROST & multiprocessing to complete transaction under 15 seconds.",
    },
    {
      heading: "Cost-Efficiency",
      paragraph:
        "FROST allows Xythum to achieve a minimal 64-byte witness size for cross-chain communication, drastically reducing on-chain gas fee. Additionally, Xythum offers market-leading fees averaging just 0.075%, 50–70% lower than its peers.",
    },
    {
      heading: "Robust Security",
      paragraph:
        "With a combination of FHE (Fully Homomorphic Encryption) and ZK (Zero-Knowledge), Xythum ensures order details remain encrypted and private throughout the process, safeguarding sensitive information from all parties, including Xythum node operators.",
    },
    {
      heading: "Omnichain",
      paragraph:
        "Bitcoin, Lightning Network, Layer 1 & Layer 2 solutions, and EVM-compatible chains for broad integration.",
    },
  ];

  const [, setThumbsSwiper] = useState(null);
  const [swiperDirection, setSwiperDirection] = useState("vertical");

  useEffect(() => {
    const handleResize = () => {
      setSwiperDirection(window.innerWidth <= 850 ? "horizontal" : "vertical");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="challange gap">
      <HeadingAndPara
        heading={"Solving DeFi’s Legacy Challenges"}
        paragraph={
          "DeFi is loaded with potential, but it has its challenges—slow transactions, high fees, and vulnerabilities to exploit. Xythum addresses these challenges with a powerful mix of speed, privacy, and advanced security, making cross-chain transactions efficient and reliable."
        }
      />

      <div className="OurSolutions">
        <Heading heading={"Our Solutions"} />
      </div>
      <div className="challangeCard">
        <div className="chall-video illustrativeImage">
          <video loading="lazy" preload="auto" width="100%" height="auto"   autoPlay muted loop playsInline>
            <source src={image} type="video/mp4"></source>
          </video>
        </div>
        <div className="solutionsList">
          {/* Number Scroller */}

          {/* Solutions List */}
          <div className="solutionQuestion">
            <>
              <Swiper
                direction={swiperDirection}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                slidesPerView={swiperDirection === "horizontal" ? 1 : 3}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  850: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                
                speed={500}
                modules={[Autoplay, Pagination, Thumbs]}
                className=""
              >
                {paragraphs.map((item, index) => (
                  <SwiperSlide key={index} className={` ${item.heading === "Robust Security" ? "solution-pad-bottom" : ""} ${item.heading === "Omnichain" ? "solution-pad-top" : ""}`}>
                    <div className={`solutionCard `}>
                      <Heading size={"28px"} heading={item.heading} />
                      <Paragraph size={"15px"} paragraph={item.paragraph} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                direction={swiperDirection}
                spaceBetween={45}
                loop={true}
                centeredSlides={true}
                slidesPerView={3}
                speed={500}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  850: {
                    slidesPerView: 3,
                    spaceBetween: 45,
                  },
                }}
                modules={[Thumbs, Autoplay]}
                className="swiper-thumb-num"
              >
                {paragraphs.map((itemI, indexI) => (
                  <SwiperSlide key={indexI}>
                    <h1>{indexI + 1}</h1>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>

          {/* Image */}
          <div>
            <img
              src={img3}
              alt="Solution Illustration"
            />
          </div>
        </div>
      </div>

      <div className="power">
        <video loading="lazy" preload="auto" width="50%" height="auto"   autoPlay muted loop playsInline>
          <source src={image2} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default Challange;
