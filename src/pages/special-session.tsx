import Schedule from "@/components/schedule";
import Head from "next/head";
import React from "react";

const tracks = [
  {
    title: "Track 1: Practical Appplication of Data Science and IT Systems in Society",
    members: [
      {
        name: "Dr. Keshav Kaushik",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track1/i3.jpg",
      },
    ],
  },
  {
    title: "Track 2: AI and Machine Learning in Predictive Analytics",
    members: [
      {
        name: "Dr. Nidhi Malik",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track2/i3.jpg",
      },
      {
        name: "Dr.Akanksha Kaushik",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track2/i4.jpg",
      },
    ],
  },
  {
    title: "Track 3:  Recent Trends and Challenges in Artificial Intelligence, Biomedical Science, and Healthcare Informatics for Society 5.0 Using New Age Technologies",
    members: [
      {
        name: "Dr. Dilip Saini",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track3/i5.jpg",
      },
      {
        name: "Dr. VS Devi Priya",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track3/i4.jpeg",
      },
    ],
  },
  {
    title: "Track 4:  Trustworthy and Explainable AI in Information-Centric Systems",
    members: [
      {
        name: "Dr. Avinash Kumar Sharma",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track4/i3.png",
      },
      {
        name: "Dr. Ashwani Kumar ",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track4/i4.png",
      },
    ],
  },
  {
    title: "Track 5: Recent Trends and Application of Industrial Internet of Things and Computing",
    members: [
      {
        name: "Dr. Ashish Tiwari",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track5/i3.jpg",
      },
      {
        name: "Dr.Neeraj Kumar Verma",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track5/i4.jpeg",
      },
      {
        name: "Dr.Surendra Kumar",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track5/i5.jpeg",
      },
      {
        name: "Mr.Sarvesh Kumar",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track5/i6.png",
      },
    ],
  },
  {
    title: "Track 6: Artifical Intelligence-Based Internet of Things for Industry 5.0",
    members: [
      {
        name: "Dr. Khyati Chopra,",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/Khyati.png",
      },
      {
        name: "Dr. Sherin Zafar",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/Sherin.png",
      },
    ],
  },
  {
    title: "Track 7: Machine Learning Applications in Buisness Decision Making",
    members: [
      {
        name: "Dr. A. Mansurali",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/Mansurali.jpg",
      },
      {
        name: "Dr. Manikandan Rajagopal",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/Manikandan.jpg",
      },
    ],
  },
  {
    title: "Track 8: Cloud-Based AI for Autonomous Systems: Challenges and Opportunities",
    members: [
      {
        name: "Prof. Sarvesh Kumar",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track8/i1.png",
      },
      {
        name: "Dr. Ashish Tiwari",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track8/i2.jpg",
      },
      {
        name: "Dr. Surendra Kumar",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track8/i3.jpg",
      },
      {
        name: "Dr. Neeraj kumar Verma",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track8/i4.png",
      },
    ],
  },
  {
    title: "Track 9: Emerging Trends in ML and IoT for Smart Agriculture, Healthcare and Automation",
    members: [
      {
        name: "Dr. Dilip Kumar J Saini",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track9/i1.png",
      },
      {
        name: "Dr Sagar Pandey",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track9/i2.jpg",
      },
    ],
  },
  {
    title: "Track 10: Trends in ML and IoT for Smart Agriculture, Healthcare and Automation",
    members: [
      {
        name: "Dr. Dilip Kumar J Saini",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track9/i1.png",
      },
      {
        name: "Dr Sagar Pandey",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track9/i2.jpg",
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
      <h1 className="text-center text-sm font-semibold lg:text-2xl">
        SPECIAL SESSIONS
      </h1>

      {tracks.map((track, tIndex) => (
        <div className="my-12" key={tIndex}>
          <h1 className="heading my-2 mb-12 text-sm font-bold lg:text-2xl">
            {track.title}
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {track.members.map((item, index) => (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md">
                  <div className="col-span-1 h-44 w-full">
                    <img
                      src={item.image}
                      className="h-full w-full rounded-lg object-cover"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-span-2 my-2 flex flex-col gap-1">
                    <span className="text-lg font-semibold">{item.name}</span>
                    <span className="pr-2 text-xs font-light">
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
