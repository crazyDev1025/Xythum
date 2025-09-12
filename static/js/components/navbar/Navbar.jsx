import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { data } from "../../config/data";
import "./Navbar.css";
import blackImage from "../../../src/assets/image1.webp";
import { Helmet } from "react-helmet";

const Navbar = () => {



  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  const classes = `navbar ${sticky}`;

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={classes}>
      <Helmet>
        <link rel="preload" href={blackImage} as="image" />
      </Helmet>
      <div className="blackImage">
        <img  src={blackImage} alt='xythum ' />
      </div>
      <div className="navItems">
        <div className="logo">
          <Logo width="75.9px" height="65px" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <div className={active ? "toggle active" : "toggle"}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div onClick={handleClick} className={active ? "nav-menu-box active" : "nav-menu-box"}>
          <div className={"nav-menu"}>
            <div className="navMenuItem">
              {data?.navbar?.map((item, index) => {
                return (
                  <a
                    key={index}
                    target={item.newPage}
                    href={item.linkUrl}
                    onClick={handleClick}
                    className={`navItem ${index === 0 && "active"}`}
                  >
                    {item.name}{" "}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="navButtons">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
