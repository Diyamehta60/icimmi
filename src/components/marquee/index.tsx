import React from "react";

const Marquee = () => {


  return (
    <div
      className="relative cursor-pointer overflow-hidden whitespace-nowrap border border-red-500 bg-red-100 py-2"
      style={{ animationDelay: "0s" }}
    >
      <div className="inline-block animate-marquee px-4 text-xl text-black">
        Note: Any Paper whose e-rights are not submitted shall not be permitted
        to present during the conference
      </div>
    </div>
  );
};

export default Marquee;
