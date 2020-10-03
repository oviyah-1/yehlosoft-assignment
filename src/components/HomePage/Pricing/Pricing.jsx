import React from "react";
import Button from "../../General/Button";
import "./Pricing.css";
import { GiMoneyStack } from "react-icons/gi";
import { SiTrustpilot } from "react-icons/si";
import { ImStatsDots } from "react-icons/im";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">WHY CHOOSE US</h1>

          <div className="pricing__container">
            <Link to="/Case/#section1" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiMoneyStack />
                </div>
                <h3>Low Cost</h3>

                <ul className="pricing__container-features">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur debits adipisicing</li>
                  <li>Business Directory.</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  About
                </Button>
              </div>
            </Link>
            <Link to="/Case/#section1" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <SiTrustpilot />
                </div>
                <h3>Trusted By Many</h3>

                <ul className="pricing__container-features">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur debits adipisicing</li>
                  <li>Business Directory.</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Contact
                </Button>
              </div>
            </Link>
            <Link to="/Events/#section1" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <ImStatsDots />
                </div>
                <h3>Easy Financing</h3>

                <ul className="pricing__container-features">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur debits adipisicing</li>
                  <li>Business Directory.</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Know More
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Pricing;
