import React from "react";

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="w-full">
      <img src={imageURL} />
    </div>
  );
};

export default FaceRecognition;
