import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonDetect }) => {
  return (
    <div className="grid justify-items-center">
      <p className="flex justify-center text-white">
        {"This app will detect faces in the pictures you upload!"}
      </p>
      <div className="flex justify-center m-5 min-w-full px-7 py-3 shadow-xl rounded-full bg-slate-800">
        <input
          type="text"
          className="px-3 mr-2 h-full text-sm w-full rounded-full"
          onChange={onInputChange}
        />
        <button
          className="max-w-fit px-5 h-full active:scale-95 bg-pink-400 hover:bg-pink-500 text-white rounded-full"
          onClick={onButtonDetect}
        >
          DETECT
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
