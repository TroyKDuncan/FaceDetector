import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./face.png";

const Logo = () => {
  return (
    <div className="flex justify-center w-full mb-5">
      <Tilt className="rounded-3xl grid place-content-center size-44 bg-gradient-to-r from-pink-500 to-indigo-500">
        <img src={face} alt="face" />
      </Tilt>
    </div>
  );
};

export default Logo;
