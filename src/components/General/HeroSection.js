import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./HeroSection.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  const cont = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: cont.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: img,
    });
  }, []);
  {
    return (
      <>
        <div
          className={
            lightBg ? "home__hero-section" : "home__hero-section darkBg"
          }
        >
          <div className="container">
            <div
              className="row home__hero-row"
              style={{
                display: "flex",
                flexDirection: imgStart === "start" ? "row-reverse" : "row",
              }}
            >
              <div className="col">
                <div className="home__hero-text-wrapper">
                  <div className="top-line">{topLine}</div>
                  <h1 className={lightText ? "heading" : "heading dark"}>
                    {headline}
                  </h1>
                  <p
                    className={
                      lightTextDesc
                        ? "home__hero-subtitle"
                        : "home__hero-subtitle dark"
                    }
                  >
                    {description}
                  </p>
                  <Link to="/sign-up">
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      {buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="home__hero-img-wrapper" ref={cont}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default HeroSection;
