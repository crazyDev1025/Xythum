import React, { lazy } from 'react';
import Navbar from '../navbar/Navbar'
import HeroCenter from '../HeroCenter/HeroCenter'
import { Description } from '../description/Description'
import { Sequence } from '../SequenceDiagram/Sequence';
const DarkPool = lazy(() => import('../darkPool/DarkPool'));
const TechStack = lazy(() => import('../TechStack/TechStack'));
const Roadmap = lazy(() => import('../Roadmap/Roadmap'));
const Mailing = lazy(() => import('../Mailing/Mailing'));
const Footer = lazy(() => import('../Footer/Footer'));
const FAQ = lazy(() => import('../FAQS/FAQ'));
const Challange = lazy(() => import('../Challange/Challenge'));

const Hero = () => {

  return (
    <div>
      <Navbar />
      <HeroCenter  />
      <Description />
      <DarkPool  />
      <Challange/>
      <TechStack/>
      <Sequence/>
      <Roadmap/>
      <FAQ/>
      {/* <Blog data-aos="fade-left" /> */}
      <Mailing/>
      <Footer />
    </div>
  );
};

export default Hero;
