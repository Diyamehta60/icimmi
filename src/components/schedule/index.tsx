import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
import Marquee from "../marquee";
const dates = [
  {
    label: "Full Paper Submission Date",
    date: "Sept 15, 2024",
    color: "green",
  },
  {
    label: "Notification of Acceptance",
    date: "Oct 30, 2024",
    color: "red",
  },
  {
    label: "Revised Paper Submission",
    date: "Nov 15, 2024",
    color: "cyan",
  },
  {
    label: "Early Bird Registration",
    date: "Nov 20, 2024",
    color: "orange",
  },
  {
    label: "Late Registration",
    date: "Nov 25, 2024",
    color: "purple",
  },
  {
    label: "Conference Dates",
    date: "Dec 23-24, 2024 ",
    color: "black",
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
            className={`mb - 2 h-16 w-16 bg-${dateInfo.color}- 500 items - center justify - center - full text - white - duration - 300 hover: scale - 110 flex transform rounded transition`}
          >
            <FaCalendarAlt size={32} color={`${dateInfo.color}`} />
          </div>
          <div className="font-semibold">{dateInfo.label}</div>
          <div className="text-sm">{dateInfo.date}</div>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
