import React from "react";
import slideImg1 from "../assets/slider-1.jpg";
import slideImg2 from "../assets/slider-2.jpg";
import slideImg3 from "../assets/slider-3.jpg";
import Typewriter from "typewriter-effect";




const BannerSlider = () => {
  return (
    <div>
      <div>
        <Typewriter
          options={{
            strings: ["Welcome to Habit Tracker !!"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
    
  );
};

export default BannerSlider;
