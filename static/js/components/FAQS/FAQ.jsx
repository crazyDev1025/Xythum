import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import './FAQ.css';
import HeadingAndPara from '../HeadingAndPara/HeadingAndPara';


const FAQ = () => {
    const faqData = [
        {
            question: 'What is Dark Pool ?',
            answer: 'Dark pool is a private execution layer that facilitates large-scale trades without impacting the market. Xythum’s Dark Pools leverage advanced encryption techniques to keep trades confidential and secure.'
        },
        {
            question: 'How does Xythum ensure transaction security?',
            answer: 'Xythum employs a combination of advanced programmable cryptographic techniques, integrating FHE with ZK for encrypted user data computation and private data validation, along with TEE (hardware enclave) for secure decentralized execution. This ensures privacy and protection against potential front-running, sandwich attacks, and identity tracing.'
        },
        {
            question: 'How does Xythum Scale ?',
            answer: 'Xythum is inherently scalable, leveraging dynamic sharding for decentralized networks, efficient multi-processing, and asynchronous signing. It employs chain-specific techniques like RBF (Replace-By-Fee), order batching, and aggregated Schnorr signatures to ensure infinite scalability and optimal performance.'
        },
        {
            question: 'Which blockchains does Xythum support?',
            answer: 'Xythum is a versatile cross-chain solution supporting any chain where Schnorr signatures or HTLC atomic swaps are feasible, including Bitcoin, Bitcoin derivatives (UTXO like chains), EVM-compatible chains, Solana, Aptos, and Sui, with plans for future expansion.'
        },
        {
            question: 'How does TEE enhance security within Xythum?',
            answer: 'TEE, via Intel SGX, creates a secure environment for processing sensitive data, ensuring privacy and security even in hostile environments. This is a key component of Xythum’s robust security framework.'
        },
        {
            question: 'What makes Xythum’s decentralized aggregation stand out?',
            answer: 'Xythum combines speed, security, and privacy to deliver a seamless cross-chain experience. Using FROST, FHE, and TEE, it offers fast, private, and secure transactions, making it one of the most advanced interoperable service in the DeFi space.'
        },
        {
            question: 'Is there an AI component in Xythum ecosystem?',
            answer: "Yes, Xythum's ecosystem includes Natty AI, an advanced AI-driven agent designed for cross-chain interactions. Natty AI leverages natural language processing to interpret instructions, analyze market data, and execute precise limit orders in real-time, ensuring seamless and intelligent communications across blockchain networks."
        },
        // Add more FAQs here
    ];

    const [isOpen, setIsOpen] = useState('faq0');

    const toggleFAQ = (faqNum) => setIsOpen(faqNum);

    return (
        <>
            {/* <div className='faq gap' id="fags">

                <div className="center faqHeading">
                    <HeadingAndPara
                        background={true}
                        heading={'FAQ'}
                        paragraph={"Got Questions? We Have Answers For You"}
                    />
                </div>

                {faqData.map((faq, index) => (
                    <FAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
                ))}
            </div> */}
            <div className='faq gap' >

                <div className="center faqHeading">
                    <HeadingAndPara
                        background={true}
                        heading={'FAQ'}
                        paragraph={"Got Questions? We Have Answers For You"}
                    />
                </div>

                {faqData.map((faq, index) => (
                    <div key={index} className="FAQ" >
                        <div
                            style={isOpen === 'faq' + index ? {
                                borderWidth: '1px 0px',
                                borderStyle: 'solid',
                                borderColor: '#EBEBEB',
                                background: 'linear-gradient(149.03deg, rgba(0, 0, 0, 0.46) 48.13%, rgba(138, 138, 138, 0.46) 95.31%)'
                            } : {}}
                            className="answerFAQ"
                        >
                            <div className="questionFAQ"
                                //  onClick={toggleFAQ}
                                onClick={() => toggleFAQ(isOpen === "faq" + index ? " " : "faq" + index)}
                            >
                                <Heading
                                    size="25px"
                                    heading={faq.question} />
                                <span>{isOpen === 'faq' + index ? '-' : '+'}</span>

                            </div>
                            {isOpen === 'faq' + index && (
                                <Paragraph
                                    size="20px"
                                    paragraph={faq.answer} />
                            )}

                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default FAQ;
