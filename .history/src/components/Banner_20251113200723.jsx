import React from "react";
import slideImg1 from "../assets/slider-1.jpg";
import slideImg2 from "../assets/slider-2.jpg";
import slideImg3 from "../assets/slider-3.jpg";
import Typewriter from "typewriter-effect";

const BannerSlider = () => {
  return (
    <div>
      <div style={{ fontFamily: "monospace", fontSize: "2em", color: "blue", textAlign }}>
        <Typewriter
          options={{
            strings: ["Welcome to Habit Tracker !!"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slideImg1} className="w-full h-120" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slideImg2} className="w-full h-120" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slideImg3} className="w-full h-120" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
