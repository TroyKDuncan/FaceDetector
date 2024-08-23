import React from "react";

const Navigation = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex justify-center m-4 w-28 transition active:scale-100 ease-in-out hover:scale-110 text-white bg-slate-800 hover:drop-shadow-lg rounded-3xl px-4 py-1 shadow-lg hover:cursor-pointer">
        <p>Sign Out</p>
      </nav>
    </div>
  );
};

export default Navigation;
