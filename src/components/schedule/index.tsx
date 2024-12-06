import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
import Marquee from "../marquee";

const dates = [
  {
    label: "Full Paper Submission Date",
    date: "Sept 15, 2024",
    color: "green",
    gone: true, 
  },
  {
    label: "Notification of Acceptance",
    date: "Nov 15, 2024",
    color: "red",
    gone: true, 
  },
  {
    label: "Revised Paper Submission",
    date: "Dec 10, 2024",
    color: "cyan",
    gone: false, 
  },
  {
    label: "Early Bird Registration",
    date: "Dec 10, 2024",
    color: "orange",
    gone: false, 
  },
  {
    label: "Late Registration",
    date: "Dec 14, 2024",
    color: "purple",
    gone: false, 
  },
  {
    label: "Conference Dates",
    date: "Dec 23-24, 2024 ",
    color: "black",
    gone: false, 
  },
];

function Schedule() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <Marquee />
      {dates.map((dateInfo, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center text-center sm:w-auto"
        >
          <div
            className={`mb-2 h-16 w-16 bg-${dateInfo.color}-500 flex items-center justify-center text-white transform rounded transition duration-300 hover:scale-110`}
          >
            <FaCalendarAlt size={32} color={`${dateInfo.color}`} />
          </div>
          <div className="font-semibold">{dateInfo.label}</div>
          <div
            className={`text-sm ${
              dateInfo.gone ? "line-through text-gray-400" : ""
            }`}
          >
            {dateInfo.date}
          </div>
          {index === 0 && dateInfo.gone ? (
            <span className="text-sm line-through text-gray-400">(Extended 31 Oct, 2024)</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Schedule;
