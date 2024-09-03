import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="flex justify-center w-full mb-5">
      <Tilt className="rounded-3xl grid place-content-center size-44 bg-white bg-gradient-to-r from-pink-500 to-indigo-500">
        <img src={brain} alt="brain" />
      </Tilt>
    </div>
  );
};

export default Logo;
