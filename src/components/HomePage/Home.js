import React, { useState, useEffect, useRef } from "react";
import gsap, {
  TweenMax,
  Linear,
  TimelineLite,
  Power3,
  Expo,
  Power,
} from "gsap";
import HeroSection from "../General/HeroSection";
import Biglander from "./Biglander";
import Card from "./Card/Card";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

import LogoSlider from "./Logoslider/LogoSlider";
import Search from "./Search/Search";
import Pricing from "./Pricing/Pricing";
import Customer from "./Customer/Customer";
import Footer from "./Footer/Footer";

function Home() {
  useEffect(() => {
    gsap.to(".first", 1, {
      delay: 0.2,
      top: "-100%",
      ease: Expo.easeInOut,
    });
    gsap.to(".second", 1, { delay: 0.4, top: "-100%", ease: Expo.easeInOut });
    gsap.to(".third", 1, { delay: 0.6, top: "-100%", ease: Expo.easeInOut });
  }, []);
  return (
    <div className="width-main">
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>
      <Biglander />
      <Search />
      {/* <Logogrid /> */}
      <LogoSlider />
      {/* <HeroSection {...homeObjTwo} /> */}
      <Card />
      {/* <div className="col-1">
        <HeroSection {...homeObjOne} />
      </div> */}
      <div className="col-1">
        <HeroSection {...homeObjThree} />
      </div>

      {/* <HeroSection {...homeObjFour} /> */}
      <Pricing />
      <Customer />
      <Footer />
    </div>
  );
}

export default Home;
