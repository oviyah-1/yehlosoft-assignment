import React, { useEffect, useRef, useState } from "react";
import left from "../../../Assests/Lottie-files/28242-left-arrow.json";
import right from "../../../Assests/Lottie-files/28241-right-arrow.json";
import "./Customer.css";
import p1 from "../../../Assests/Images/image.jpg";
import p3 from "../../../Assests/Images/image2.jpg";
import p2 from "../../../Assests/Images/image3.jpg";
import gsap, { Bounce, Elastic, Power3 } from "gsap";
import lottie from "lottie-web";
import back from "../../../Assests/Lottie-files/lf30_editor_bngfmlpy.json";

const testimonials = [
  {
    name: "Mark Jacobs",
    title: "Creative Director, VISA",
    image: p1,
    quote: "It's all good. I was amazed at the quality of the Design.",
  },
  {
    name: "Julia Cameron",
    title: "Tech Lead, Google",
    image: p2,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: p3,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function Customer() {
  let line1 = useRef(null);
  const [num, setNum] = useState(0);
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const cont = useRef(null);
  const cont2 = useRef(null);
  const cont3 = useRef(null);
  const [animation, setAnimation] = useState(null);
  const [animation3, setAnimation3] = useState(null);
  const [animation2, setAnimation2] = useState(null);
  const [clicklot, setClicklot] = useState(true);
  const [buttime, setButtime] = useState(false);
  useEffect(() => {
    if (animation === null) {
      setAnimation(ins());
      setAnimation2(ins2());
      setAnimation3(ins3());
    }

    gsap.from([".inner-contents"], 0.8, {
      delay: 1,
      opacity: 0,
      x: -50,
      stagger: 0.3,
    });
    gsap.from([".inner-img"], 1, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  }, [num]);

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

  const ins3 = () => {
    let anim3 = lottie.loadAnimation({
      container: cont3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: back,
      name: "Hello World",
    });
    return anim3;
  };

  const rightpressed = () => {
    setButtime(true);

    setTimeout(() => {
      setButtime(false);
    }, 2000);
    console.log(buttime, "before");
    console.log("right is called");

    console.log(buttime, "after");

    animation2.setSpeed(3);
    animation2.playSegments([0, 90], true);
    console.log(num);
    console.log(buttime);
    if (num < testimonials.length - 1) {
      setNum(num + 1);
      setTestimonial(testimonials[num + 1]);
    } else {
      setNum(0);
      setTestimonial(testimonials[0]);
    }
  };

  const serightpressed = () => {
    setButtime(true);

    setTimeout(() => {
      setButtime(false);
    }, 2000);
  };

  const leftpressed = () => {
    setButtime(true);

    setTimeout(() => {
      setButtime(false);
    }, 2000);
    console.log("left is called");
    console.log(num);
    animation.setSpeed(3);
    animation.playSegments([0, 90], true);
    if (num === 0) {
      setNum(testimonials.length - 1);
      setTestimonial(testimonials[testimonials.length - 1]);
    } else {
      setNum(num - 1);
      setTestimonial(testimonials[num - 1]);
    }
  };
  const anima = () => {
    setClicklot(!clicklot);
    animation.setDirection(1, "Hello World");
    animation.play("Hello World");
  };
  return (
    <div className="big-wrap-cust">
      <div className="cust-head">
        <h1>Customer Testimonials</h1>
      </div>
      <div className="test-main">
        <div className="arrows-left">
          <span>
            <button
              ref={cont}
              src={left}
              disabled={buttime}
              onClick={leftpressed}
            ></button>
          </span>
        </div>

        <div className="inner" ref={(el) => (line1 = el)}>
          <div className="inner-img">
            <div>
              <div className="inner-bg" ref={cont3}></div>
              <img src={testimonial.image}></img>
            </div>
          </div>
          <div className="inner-contents">
            <p>{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
          </div>
        </div>

        <div className="arrows-right">
          <span>
            <button
              onClick={rightpressed}
              ref={cont2}
              src={right}
              disabled={buttime}
            ></button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Customer;
