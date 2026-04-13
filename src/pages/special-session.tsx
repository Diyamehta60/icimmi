import Schedule from "@/components/schedule";
import Head from "next/head";
import React from "react";

const tracks = [
  {
    title: "Track 1: Intelligent Computing and Information Systems",
    members: [
      {
        name: "Dr. Somitra",
        designation: "IIT Kanpur",
      },
      {
        name: "Dr. Deepak Arora",
        designation:
          "Professor, Poornima Institute of Engineering & Technology, Jaipur",
      },
      {
        name: "Dr. Madhav Sharma",
        designation:
          "Associate Professor, Poornima Institute of Engineering & Technology, Jaipur",
      },
    ],
  },
  {
    title: "Track 2: Smart Electronics, Communication and Power Systems",
    members: [
      {
        name: "Dr. Ghanshyam",
        designation: "MNIT",
      },
      {
        name: "Dr. Ashish Ladda",
        designation:
          "Poornima Institute of Engineering & Technology, Jaipur",
      },
      {
        name: "Dr. Shipra Bhatia",
        designation:
          "Poornima Institute of Engineering & Technology, Jaipur",
      },
    ],
  },
  {
    title:
      "Track 3: Innovation Management, Technology Transfer and Entrepreneurship",
    members: [
      {
        name: "Dr. John Jose",
        designation: "Professor, IIT Guwahati",
      },
      {
        name: "Dr. Shruti Thapar",
        designation:
          "Poornima Institute of Engineering & Technology, Jaipur",
      },
      {
        name: "Babita Jain",
        designation: "Poornima College of Engineering, Jaipur",
      },
    ],
  },
  {
    title:
      "Track 4: Sustainable Energy, Green Technologies and Environmental Systems",
    members: [
      {
        name: "Dr. Akash Saxena",
        designation: "Central University, Haryana",
      },
      {
        name: "Dr. Aditya Pundir",
        designation:
          "Poornima Institute of Engineering & Technology, Jaipur",
      },
      {
        name: "Dr. Ritam Dutta",
        designation:
          "Poornima Institute of Engineering & Technology, Jaipur",
      },
    ],
  },
];

function SpecialSession() {
  return (
    <div className="mx-4">
      <Head>
        <title>
          Special Sessions - International conference on information management
          & machine intelligence
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>

      <Schedule />

      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      <h1 className="text-center text-lg font-semibold lg:text-2xl">
        SPECIAL SESSIONS
      </h1>

      {tracks.map((track, tIndex) => (
        <div className="my-12" key={tIndex}>
          {/* Track Title */}
          <h1 className="heading my-2 mb-12 text-sm font-bold lg:text-2xl border-l-4 border-[#1a1212] pl-3">
            {track.title}
          </h1>

          {/* Members */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {track.members.map((item, index) => (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md p-3">
                  
                  {/* Avatar (replacing image) */}
                  <div className="col-span-1 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1a1212] text-white text-2xl font-semibold">
                      {item.name.charAt(0)}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="col-span-2 flex flex-col justify-center">
                    <span className="text-lg font-semibold">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-600 mt-1">
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SpecialSession;