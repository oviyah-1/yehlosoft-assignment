import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import gsap, {
  TweenMax,
  Linear,
  Expo,
  TimelineLite,
  Power2,
  CSSRulePlugin,
} from "gsap";

const CursorStyle = styled.div`
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 92px;
  height: 92px;
  background: ${(props) => props.color};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img});

  @media (pointer: coarse) {
    visibility: none !important;
    background: none !important;
  }
`;

const CursorStyle2 = styled.div`
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 92px;
  height: 92px;
  background: rgba(73, 72, 72, 0.209);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  @media (pointer: coarse) {
    visibility: none !important;
    background: none !important;
  }
`;

const Cursor = (props) => {
  let line1 = useRef();
  let line2 = useRef(null);
  const [mousestate, setMouseState] = useState({
    x: -1,
    y: -1,
    height: "12px",
    width: "12px",
    heighthover: "62px",
    widthhover: "62px",
    curimg: "none",
    color: "#212529",
  });
  // const [curdisp, setCurdisp] = useState({
  //   curmob: "hidden",
  // });

  const animatemouse = () => {
    gsap.set([".line1"], {
      delay: 0.1,
      css: {
        left: mousestate.x,
        top: mousestate.y,
        height: mousestate.heighthover,
        width: mousestate.widthhover,
      },
    });
  };
  // const checker = () => {
  //   var supportsTouch =
  //     "ontouchstart" in window ||
  //     navigator.maxTouchPoints > 0 ||
  //     navigator.msMaxTouchPoints > 0;
  //   if (supportsTouch) {
  //     setCurdisp({ curmob: "hidden" });
  //   } else {
  //     setCurdisp({ curmob: "visible" });
  //   }

  //   console.log("coming from checker==>", supportsTouch);
  // };
  const onMouseMove = (e) => {
    // checker();
    const x = e.clientX;
    const y = e.clientY;
    const curimg = props.hoverImage;
    const height = props.hoverclass ? "94px" : "12px";
    const width = props.hoverclass ? "94px" : "12px";
    const heighthover = props.hoverclass ? "0px" : "62px";
    const widthhover = props.hoverclass ? "0px" : "62px";
    const color = props.hoverclass ? "none" : "#212529";
    setMouseState({
      x,
      y,
      curimg,
      height,
      width,
      heighthover,
      widthhover,
      color,
    });
    animatemouse();
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    // document.addEventListener("click", checker);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      // document.removeEventListener("click", checker);
    };
  });

  return (
    <div>
      <CursorStyle
        img={mousestate.curimg ? mousestate.curimg : "none"}
        color={mousestate.color}
        style={{
          left: `${mousestate.x}px`,
          top: `${mousestate.y}px`,
          height: `${mousestate.height}`,
          width: `${mousestate.width}`,
        }}
      />
      <CursorStyle2 className="line1" />
    </div>
  );
};

export default Cursor;
