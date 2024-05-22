import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
const dates = [
    {
        label: "Full Paper Submission Date",
        date: "Sept 15, 2024",
        extended: "Nov 10, 2024",
        color: "green",
    },
    {
        label: "Notification of Acceptance",
        date: "Nov 15, 2024",
        color: "red",
    },
    {
        label: "Revised Paper Submission",
        date: "Nov 20, 2024",
        color: "cyan",
    },
    {
        label: "Early Bird Registration",
        date: "Nov 20, 2024",
        color: "orange",
    },
    {
        label: "Late Registration",
        date: "Nov 30, 2024",
        color: "purple",
    },
    {
        label: "Conference Dates",
        date: "Dec 23-24, 2024 (New)",
        color: "black",
    },
];

function Schedule() {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {dates.map((dateInfo, index) => (
                <div key={index} className="flex w-full flex-col items-center text-center sm:w-auto">

                    <div className={`mb - 2 h-16 w-16 bg-${dateInfo.color}- 500 flex transform items - center justify - center rounded - full text - white transition - transform duration - 300 hover: scale - 110`}><FaCalendarAlt size={32} color={`${dateInfo.color}`} /></div >

                    <div className="font-semibold">{dateInfo.label}</div>
                    <div className="text-sm">{dateInfo.date}</div>

                    {
                        dateInfo.extended && (
                            <div className="text-xs text-gray-500">
                                Extended: {dateInfo.extended}
                            </div>
                        )
                    }

                </div>
            ))}

        </div>

    );
}


export default Schedule;

