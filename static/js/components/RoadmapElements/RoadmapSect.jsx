import bgGreen from "../../../src/assets/Group91(1).webp";
import "./RoadmapElements.css";
import RoadmapsmallCard from "../RoadmapsmallCard/RoadmapsmallCard";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from 'html-react-parser';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const RoadmapSect = () => {
    const elements = [
        {
            heading: "Phase 1",
            paragraph:
                "Focus on bridging native Bitcoin assets & all L1 to EVM chains,  <br/> Public Mainnet",
        },
        {
            heading: "Phase 2",
            paragraph: "Aggregation of all EVM L2s,  Bitcoin Layer 2's and forks",
        },
        {
            heading: "Phase 3",
            paragraph: "Dark Pool Integration,  <br/>  Chain Abstraction",
        },
        { heading: "Phase 4", paragraph: "Aggregation as a Service" },
        {
            heading: "Phase 5",
            paragraph:
                "Blockchain specific message and context sharing across multiple chains, Wallet development",
        },
    ];

    return (
        <div className="roadmapContainer">
            <div className="roadmapElements">
                <img className="bgGreen swiper-button-next" src={bgGreen} alt='xythum ' />

                <Swiper
                    spaceBetween={15}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.prev-slide',
                        nextEl: '.next-slide',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        1110: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                    speed={500}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="roadmapSlider"
                >
                    {elements
                        ? elements.map((value, index) => (
                            <SwiperSlide key={index}>
                                <RoadmapsmallCard
                                    heading={value.heading}
                                    // nums={index+1}
                                    // paragraph={value.paragraph}
                                    paragraph={parse(value.paragraph)}
                                />
                            </SwiperSlide>
                        ))
                        : ""}
                        {/* button at place of green arrow */}
                        <span className="next-slide roadmap-prev"></span>
                </Swiper>
            </div>
        </div>
    );
};

export default RoadmapSect;
