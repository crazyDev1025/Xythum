import React from "react";
import Heading from "../Heading/Heading";
import "./TechStack.css";
import TechStackCard from "../TechStackCard/TechStackCard";
import img1 from "../../assets/lock-2.mp4";
import img2 from "../../assets/frost.mp4";
import img3 from "../../assets/lock.mp4";
import img4 from "../../assets/ZKF.mp4";

const TechStack = () => {
  const data = [
    {
      heading: "FROST",
      description:
        "Xythum leverages FROST to facilitate efficient and Secure Multi-Party Computation (SMPC), enabling seamless interchain communication and supporting infinite scalability across decentralized networks.",
      image: (
        <video loading="lazy" preload="auto" width="100%" height="auto" autoPlay muted loop playsInline   >
        <source src={img2} type="video/mp4"></source>
    </video>
      ),
    },
    {
      heading: "Fully Homomorphic Encryption (FHE)",
      description:
        "FHE ensures that sensitive data remains encrypted even during processing. This layer of encryption protects user privacy and guards against potential threats during cross-chain transactions.",
      image: (
        <video loading="lazy" preload="auto" width="100%" height="auto" autoPlay muted loop playsInline   >
                <source src={img3} type="video/mp4"></source>
            </video>
      ),
    },
    {
      heading: "Trusted Execution Environments (TEE)",
      description:
        "TEE, backed by Intel SGX, establishes a secure hardware enclave for sensitive computations. For Xythum, this ensures critical operations and data remain protected, even if external systems are compromised.",
      image: (
        <video loading="lazy" preload="auto" width="100%" height="auto" autoPlay muted loop playsInline   >
                <source src={img1} type="video/mp4"></source>
            </video>
      ),
    },
    {
      heading: "ZK Functionality",
      description:
        "Ensures secure, private verification by confirming transactions without exposing sensitive details. This enables trustless, confidential asset transfers across chains, maintaining privacy and integrity throughout cross-chain interactions.",
      image: (
        <video loading="lazy" preload="auto" width="100%" height="auto" autoPlay muted loop playsInline   >
        <source src={img4} type="video/mp4"></source>
    </video>
      ),
    },
  ];

  return (
    <div className="tech_stack">
      <div className="center headingGap">
        <Heading heading={"Tech Stack"} />
      </div>
      {/* <div className="center descriptionGap">
        <Paragraph
          paragraph={
            "Xythum consists of numerous cryptographic functions to ensure flawless operation"
          }
        />
      </div> */}
      <div className="techItems">
        {data?.map((item, index) => (
          <TechStackCard
            key={index}
            // index={String(index + 1).padStart(2, "0")}
            heading={item.heading}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
