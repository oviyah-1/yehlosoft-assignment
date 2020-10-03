import React, { useEffect, useRef } from "react";
import "./Search.css";
import Lottie from "lottie-web";
import p1 from "../../../Assests/Lottie-files/29034-map.json";
const Search = () => {
  const cont = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: cont.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: p1,
    });
  }, []);
  return (
    <div className="app-wrap">
      <div className="car-lot" ref={cont}></div>
      <div class="app">
        <div class="wrapper">
          <div class="card">
            <header class="card__header">
              <div class="card__content">
                <h1 class="card__head">Explore Houses</h1>
                <p class="card__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div class="card__form">
                <select class="card__select" name="region" id="reg">
                  <option value="region">Region</option>
                  <option value="Northeast">Northeast</option>
                  <option value="Southwest">Southwest</option>
                  <option value="West">West</option>
                  <option value="Southeast">Southeast</option>
                  <option value="Midwest">Midwest</option>
                </select>
                <select class="card__select" name="city" id="ct">
                  <option value="city">City</option>
                  <option value="newyork">Chennai</option>
                  <option value="sanfrancisco">Mumbai</option>
                  <option value="washington">Bangalore</option>
                  <option value="miami">Hyderbad</option>
                  <option value="minneapolis">Kochi</option>
                </select>
                <a href="#" class="card__btn">
                  Find
                </a>
              </div>
            </header>
            <main class="main">
              <div class="main-grid">
                <div class="post">
                  <header class="post__hd">
                    <span class="post__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                      >
                        <g
                          transform="translate(-3 -3)"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <path d="M0 0h34v34H0z" />
                          <circle
                            cx="14.167"
                            cy="14.167"
                            r="9.917"
                            stroke="#2ECF9A"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.125"
                          />
                          <path
                            stroke="#2ECF9A"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.125"
                            d="M29.75 29.75l-8.5-8.5"
                          />
                        </g>
                      </svg>
                    </span>
                    <h3 class="post__title">
                      Discovere <br />
                      House
                    </h3>
                  </header>
                  <p class="post__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div class="post">
                  <header class="post__hd">
                    <span class="post__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M-4-4h34v34H-4z" />
                          <path
                            stroke="#2ECF9A"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.125"
                            d="M18.667 4.5h4.25c.782 0 1.416.634 1.416 1.417V21.5a2.833 2.833 0 11-5.666 0V3.083c0-.782-.635-1.416-1.417-1.416H3.083c-.782 0-1.416.634-1.416 1.416v17a4.25 4.25 0 004.25 4.25H21.5m-14.167-17H13M7.333 13H13m-5.667 5.667H13"
                          />
                        </g>
                      </svg>
                    </span>
                    <h3 class="post__title">
                      Best <br />
                      Prices
                    </h3>
                  </header>
                  <p class="post__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div class="post">
                  <header class="post__hd">
                    <span class="post__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="27"
                      >
                        <g
                          transform="translate(-3 -3)"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <path d="M0 0h34v34H0z" />
                          <rect
                            width="25.5"
                            height="18.417"
                            x="4.25"
                            y="9.917"
                            stroke="#2ECF9A"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.125"
                            rx="2.833"
                          />
                          <path
                            stroke="#2ECF9A"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.125"
                            d="M11.333 9.917V7.083a2.833 2.833 0 012.834-2.833h5.666a2.833 2.833 0 012.834 2.833v2.834M17 17v.014M4.25 18.417a28.333 28.333 0 0025.5 0"
                          />
                        </g>
                      </svg>
                    </span>
                    <h3 class="post__title">
                      Easy <br />
                      Finance
                    </h3>
                  </header>
                  <p class="post__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
