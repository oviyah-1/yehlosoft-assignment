import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import p3 from "../../../Assests/Images/hpuse1.jpg";
import p2 from "../../../Assests/Images/villa.jpg";
import left from "../../../Assests/Lottie-files/28242-left-arrow.json";
import lottie from "lottie-web";
import gsap, { Bounce, Elastic, Power3 } from "gsap";
import right from "../../../Assests/Lottie-files/28241-right-arrow.json";

const Card = () => {
  const house = [
    {
      name: "Duplex",
      title: "Price : 1 Cr",
      image: p2,
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      name: "Villa",
      title: "Price : 3 Cr",
      image: p3,
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  const [animation, setAnimation] = useState(null);
  const [animation2, setAnimation2] = useState(null);

  const cont = useRef(null);
  const cont2 = useRef(null);
  const [num, setNum] = useState(0);
  const [testimonial, setTestimonial] = useState(house[0]);

  useEffect(() => {
    if (animation === null) {
      setAnimation(ins());
      setAnimation2(ins2());
    }
    // setTestimonial(house[0]);
  }, []);

  const ins = () => {
    let anim = lottie.loadAnimation({
      container: cont.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: left,
      name: "Hello World",
    });
    return anim;
  };

  const ins2 = () => {
    let anim2 = lottie.loadAnimation({
      container: cont2.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: right,
      name: "Hello World",
    });
    return anim2;
  };

  //what hapens when we press right
  const rightpressed = () => {
    animation2.setSpeed(3);
    animation2.playSegments([0, 90], true);
    console.log(num);

    if (num < house.length - 1) {
      setNum(num + 1);
      setTestimonial(house[num + 1]);
    } else {
      setNum(0);
      setTestimonial(house[0]);
    }
  };

  //what happens when we press left
  const leftpressed = () => {
    console.log("left is called");
    console.log(num);
    animation.setSpeed(3);
    animation.playSegments([0, 90], true);
    if (num === 0) {
      setNum(house.length - 1);
      setTestimonial(house[house.length - 1]);
    } else {
      setNum(num - 1);
      setTestimonial(house[num - 1]);
    }
  };

  return (
    <div className="main-big">
      <div className="main-big-header">
        <h1>Featured Properties</h1>
      </div>
      <div className="big-b">
        <div className="arrows-left">
          <span>
            <button ref={cont} src={left} onClick={leftpressed}></button>
          </span>
        </div>
        <div className="big-cont">
          <div className="small-cont">
            <div className="cont-img">
              <img src={testimonial.image}></img>{" "}
              <div className="cont-info">
                <h1>{testimonial.name}</h1>
                <h2>{testimonial.title}</h2>
                <p>{testimonial.quote}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="arrows-right">
          <span>
            <button onClick={rightpressed} ref={cont2} src={right}></button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
