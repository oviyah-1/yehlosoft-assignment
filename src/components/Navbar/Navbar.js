import React, { useEffect, useRef, useState } from "react";
import Button from "../General/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../Assests/Images/Logo-Color.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, TimelineLite, Power3 } from "gsap";
import lottie from "lottie-web";
import p1 from "../../Assests/Lottie-files/lf30_editor_pwffouta.json";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [clicklot, setClicklot] = useState(true);
  const cont = useRef(null);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [animation, setAnimation] = useState(null);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();

    //lottie animation
    if (animation === null) {
      setAnimation(ins());
    }

    let tl = new TimelineLite({ delay: 0.3 });
    tl.staggerFrom(
      [".lot", ".b-text"],
      3,
      { y: 40, ease: Power3.easeOut, opacity: 0 },
      0.2,
      "Start"
    );
    gsap.from([".col-1 .home__hero-text-wrapper", ".col-1 .home__hero-img"], {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".col-1",
        start: "top 90%",
        end: "bottom 60%",
        // toggleActions: "restart complete reverse reset",
      },
    });
  }, []);

  const ins = () => {
    let anim = lottie.loadAnimation({
      container: cont.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: p1,
      name: "Hello World",
    });
    return anim;
  };

  const anima = () => {
    setClicklot(!clicklot);

    animation.setSpeed(2);
    console.log("clickled");
    if (clicklot === true) {
      animation.setDirection(1, "Hello World");
      animation.play("Hello World");
    } else {
      animation.setDirection(-1, "Hello World");
      animation.play("Hello World");
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Yehlosoft
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <div className="nav-wr">
                <div ref={cont} className="lot-nav" onClick={anima}></div>
              </div>

              {/* {click ? <FaTimes /> : <FaBars />} */}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" onClick={anima}>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={anima}>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item" onClick={anima}>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
