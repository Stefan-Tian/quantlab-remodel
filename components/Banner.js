import React from "react";

const Banner = () => {
  let particles = [];
  for (let i = 0; i < 200; i++) {
    particles.push(
      <div className="banner__particle" key={i}>
        particle
      </div>
    );
  }
  return (
    <div className="banner">
      <span className="banner__text">
        Psychometries & Quantitative Methods Lab
      </span>
      {particles}
    </div>
  );
};

export default Banner;
