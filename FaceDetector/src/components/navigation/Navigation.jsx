import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <div className="flex justify-end">
      <nav
        onClick={() => onRouteChange("signIn")}
        className="flex justify-center m-4 w-28 active:scale-95 text-white bg-slate-800 hover:bg-slate-700 rounded-3xl px-4 py-1 shadow-lg hover:cursor-pointer"
      >
        <p>Sign Out</p>
      </nav>
    </div>
  );
};

export default Navigation;
