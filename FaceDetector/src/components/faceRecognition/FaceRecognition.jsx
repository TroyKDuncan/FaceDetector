import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
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
        {/* <div>
          {boxes.map((n, i) => {
            return (
              <div
                className="bounding-box"
                style={{
                  top: boxes[i].topRow,
                  right: boxes[i].rightCol,
                  bottom: boxes[i].bottomRow,
                  left: boxes[i].leftCol,
                }}
              ></div>
            );
          })}
        </div> */}
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
