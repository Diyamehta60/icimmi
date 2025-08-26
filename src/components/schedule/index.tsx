import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
import Marquee from "../marquee";

const dates = [
  {
    label: "Paper Submission Deadline",
    date: "Sept 15, 2025",
    color: "green",
    gone: false,
  },
  {
    label: "Review & Revisions",
    date: "Oct 15, 2025",
    color: "blue",
    gone: false,
  },
  {
    label: "Registration",
    date: "Oct 31, 2025",
    color: "orange",
    gone: false,
  },
  {
    label: "Paper Validation & CSV Information Submission",
    date: "Nov 20, 2025",
    color: "cyan",
    gone: false,
  },
  {
    label: "E-Rights Form Submission",
    date: "Dec 05, 2025",
    color: "pink",
    gone: false,
  },
  {
    label: "Final Paper Submission on TAPS",
    date: "Dec 10, 2025",
    color: "black",
    gone: false,
  },
];


function Schedule() {
  const handleClick = () => {
    window.open("/schedule.pdf");
  }
  return (
    <>
      {/* <Marquee />
      <div onClick={handleClick} className="mx-auto my-3 w-1/3 rounded-md px-4 py-2 text-center shadow-md cursor-pointer overflow-hidden whitespace-nowrap border border-red-500 bg-red-100 py-2">
        <h1 className="text-lg font-medium ">
          Download Schedule
        </h1>
      </div> */}

      <div className="flex flex-wrap justify-center md:flex md:flex-nowrap md:justify-center md:gap-6 p-6">
        {dates.map((dateInfo, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center text-center sm:w-auto"
          >
            <div
              className={`mb-2 h-10 w-10 flex transform items-center justify-center rounded text-white transition duration-300 hover:scale-110`}
            >
              <FaCalendarAlt size={28} color={`${dateInfo.color}`} />
            </div>
            <div className=" font-semibold">{dateInfo.label}</div>
            <div
              className={`text-xs ${dateInfo.gone ? "text-gray-400 line-through" : ""
                }`}
            >
              {dateInfo.date}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Schedule;
