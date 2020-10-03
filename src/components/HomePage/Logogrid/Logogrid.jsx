import React from "react";
import "./Logogrid.css";
import Button from "../../General/Button";
import { Link } from "react-router-dom";
const Logogrid = () => {
  return (
    <div className="logo-block">
      <div class="lo-container">
        <ul class="logogrid">
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
              class="logogrid__img"
              alt="Coca Cola"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              class="logogrid__img"
              alt="Google"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
              class="logogrid__img"
              alt="AirBnB"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
              class="logogrid__img"
              alt="Spotify"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/de/f/f9/Guinness_Logo.svg"
              class="logogrid__img"
              alt="Guinness"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg"
              class="logogrid__img"
              alt="Audi"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              class="logogrid__img"
              alt="Nike"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              class="logogrid__img"
              alt="Netflix"
            />
          </li>
        </ul>
      </div>
      <div className="logo-text">
        <div className="logo-texts">
          <h1>Relentlessly Track & Learn From</h1>
          <h2>
            100+ ​FULLTIME/ EXECUTIVE DEVELOPMENT PROGRAMS AT PRE-EMINENT
            UNIVERSITIES
          </h2>
          <p>
            Harnesses the world's best Career Advancement & Leadership
            Development resources,helping you gain Expert
            Knowledge,&nbsp;Practical Guidance & Actionable Insights from
            Extraordinary Leaders & World Class Institutions through
            Specialized,&nbsp; Affordable,&nbsp;Online & Offline Programs custom
            crafted to Accelerate your Career & Business Success while
            transforming you into a better & more effective Leader.
          </p>
          <Link to="/sign-up">
            <Button buttonSize="btn--wide" buttonColor="blue">
              KNOW MORE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logogrid;
