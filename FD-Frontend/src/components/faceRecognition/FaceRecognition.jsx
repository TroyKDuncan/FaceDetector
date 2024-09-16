import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, boxes }) => {
  return (
    <div className="w-full flex justify-center mb-4">
      <div className="absolute">
        <img
          id="inputimage"
          className="rounded-xl"
          src={imageURL}
          width="500px"
          height="auto"
        />
        <div>
          {boxes.map((box) => (
            <div
              key={box.topRow}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
