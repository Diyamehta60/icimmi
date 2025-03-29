import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
import Marquee from "../marquee";

const dates = [
  {
    label: "Full Paper Submission Date",
    date: "Sept 15, 2025",
    color: "green",
    gone: true,
  },
  {
    label: "Notification of Acceptance",
    date: "Nov 15, 2025",
    color: "red",
    gone: true,
  },
  {
    label: "Revised Paper Submission",
    date: "Dec 10, 2025",
    color: "cyan",
    gone: false,
  },
  {
    label: "Early Bird Registration",
    date: "Dec 10, 2025",
    color: "orange",
    gone: false,
  },
  {
    label: "Late Registration",
    date: "Dec 13, 2025",
    color: "purple",
    gone: false,
  },
  {
    label: "Conference Dates",
    date: "Dec 15-16, 2025 ",
    color: "black",
    gone: false,
  },
];

function Schedule() {
  const handleClick  = () => {
    window.open("/schedule.pdf");
  }
  return (
    <>
      <Marquee />
      <div onClick={handleClick} className="mx-auto my-3 w-1/3 rounded-md px-4 py-2 text-center shadow-md cursor-pointer overflow-hidden whitespace-nowrap border border-red-500 bg-red-100 py-2">
    <h1 className="text-lg font-medium ">
        Download Schedule
    </h1>
</div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {dates.map((dateInfo, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center text-center sm:w-auto"
          >
            <div
              className={`mb-2 h-16 w-16 bg-${dateInfo.color}-500 flex transform items-center justify-center rounded text-white transition duration-300 hover:scale-110`}
            >
              <FaCalendarAlt size={32} color={`${dateInfo.color}`} />
            </div>
            <div className="font-semibold">{dateInfo.label}</div>
            <div
              className={`text-sm ${
                dateInfo.gone ? "text-gray-400 line-through" : ""
              }`}
            >
              {dateInfo.date}
            </div>
            {index === 0 && dateInfo.gone ? (
              <span className="text-sm text-gray-400 line-through">
                (Extended 31 Oct, 2024)
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default Schedule;
