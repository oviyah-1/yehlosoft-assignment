import React, { useEffect, useRef } from "react";
import "./Biglander.css";
import Lottie from "lottie-web";
import p1 from "../../Assests/Lottie-files/24185-buying-a-property-ed-najarro.json";
import p2 from "../../Assests/Lottie-files/lf30_editor_jydruumx.json";
import Button from "../General/Button";
import { Link } from "react-router-dom";

const Biglander = () => {
  const cont = useRef(null);
  const cont2 = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: cont.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: p1,
    });
    Lottie.loadAnimation({
      container: cont2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: p2,
    });
  }, []);
  return (
    <>
      <div className="b-container">
        <div className="lot" ref={cont}></div>

        <div className="b-text">
          <h1>Yehlosoft Real Estate</h1>
          <h2>Best Real Estate Company</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link to="/sign-up">
            <Button buttonSize="btn--wide" buttonColor="blue">
              KNOW MORE
            </Button>
          </Link>
        </div>
        <div className="back-main" ref={cont2}></div>
      </div>
    </>
  );
};

export default Biglander;
