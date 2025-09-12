import React from "react";
import "./Footer.css";
import Pdf from "../../assets/xythum-whitepaper.pdf";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const footerSections = [
  {
    title: "Read",
    // links: ['WhitePaper', 'Blogs'],
    links: [
      {
        name: "Whitepaper",
        linkUrl: Pdf,
        newPage: "_blank",
      },
      {
        name: "Blogs",
        linkUrl: "https://blog.xythum.io/",
        newPage: "_blank",
      },
      {
        name: "Terms of Service",
        linkUrl: "/terms-of-service",
        newPage: "_blank",
      },
      {
        name: "Privacy Policy",
        linkUrl: "/privacy-policy",
        newPage: "_blank",
      },
    ],
  },
  {
    title: "Learn More",
    // links: ["Docs", "Github", "Forum"],
    links: [
      {
        name: "Docs",
        linkUrl: "",
        newPage: "",
      },
      {
        name: "Github",
        linkUrl: "",
        newPage: "",
      },
      {
        name: "Forum",
        linkUrl: "",
        newPage: "",
      },
    ],
  },
  {
    title: "Contact Us",
    // links: ["Contact Us", "Support", "Careers"],
    links: [
      {
        name: " hello@xythum.io",
        linkUrl: "mailto:hello@xythum.io",
        newPage: "",
      },
      {
        name: "Support",
        linkUrl: "",
        newPage: "",
      },
      {
        name: "Careers",
        linkUrl: "",
        newPage: "",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        icon: <FaXTwitter />,
        url: "https://x.com/Xythum?s=09",
        newpage: "_blank",
      },
      {
        icon: <FaTelegram />,
        url: "https://t.me/Xythum_labs",
        newpage: "_blank",
      }
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerUpperSection">
        <div className="footer1stSection">
          <Logo width="78px" style={{}} />
        </div>
        <div className="footer2ndSection">
          {footerSections.map((section, index) => (
            <div className="footer-box" key={index}>
              <div className="boldHeading">{section.title}</div>
              {section.title === "Community" ? (
                <div className="communityIcons">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iconLink"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              ) : (
                section.links.map((link, linkIndex) => (
                  <Link
                    target={link.newPage}
                    tabIndex={section.links.newpage}
                    to={link.linkUrl}
                    className="sectionLink"
                    key={linkIndex}
                  >
                    {link.name}
                  </Link>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="botttomFooter">©2025 Xythum AI</div>
    </div>
  );
};

export default Footer;
