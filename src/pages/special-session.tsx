import Schedule from "@/components/schedule";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const tracks = [
  {
    title: "Track 1: Smart Healthcare Technologies and Biomedical Systems",
    members: [
      {
        name: "Mitu Sehgal",
        designation: "",
        image: "/special-sessions/track1/mitu.jpeg",
      },
      {
        name: "Dr. Sorabh Gupta",
        designation: "",
        image: "/special-sessions/track1/sorabh.png",
      },
      {
        name: "Dr. Amit Kumar Dubey",
        designation: "",
        image: "/special-sessions/track1/amit.png",
      },
    ],
  },
  {
    title:
      "Track 2: Smart Electronics, Intelligent Communication, and AI-Driven Information Systems for Sustainable Digital Transformation",
    members: [
      {
        name: "Dr. Neeraj Gupta",
        designation: "",
        image: "/special-sessions/track2/NeerajGupta.jpg",
      },
      {
        name: "Dr. Prashant Kumar",
        designation: "",
        image: "/special-sessions/track2/prashant.jpg",
      },
      {
        name: "Dr. Rashmi Gupta",
        designation: "",
        image: "/special-sessions/track2/rashmiGupta.svg",
      },
    ],
  },
  {
    title: "Track 3: AI and Explainable Machine Learning for Healthcare Applications",
    members: [
      {
        name: "Dr. Vaibhav Gandhi",
        designation: "",
        image: "/special-sessions/track3/VaibhavGandhi.jpg",
      },
      {
        name: "Dr. Dipali Kasat",
        designation: "",
        image: "/special-sessions/track3/DipaliKasat.jpeg",
      },
    ],
  },
  {
    title: "Track 4: AI for Smart Cities, Energy & Sustainable Infrastructure",
    members: [
      {
        name: "Tejinder Kaur",
        designation: "",
        image: "/special-sessions/track4/tejinder.png",
      },
    ],
  },
  {
    title: "Track 5: Next-Generation AI Engineering and Intelligent Computing Innovations",
    members: [
      {
        name: "Sarvesh Kumar",
        designation: "",
        image: "/special-sessions/track5/SarveshKumar.jpg",
      },
      {
        name: "Dr. Ashish Tiwari",
        designation: "",
        image: "/special-sessions/track5/AshishTiwari.jpeg",
      },
      {
        name: "Dr. Neeraj Kumar Verma",
        designation: "",
        image: "/special-sessions/track5/NeerajVerma.jpeg",
      },
      {
        name: "Dr. Arvind Kumar Mishra",
        designation: "",
        image: "/special-sessions/track5/ArvindMishra.jpeg",
      },
    ],
  },
  {
    title: "Track 6: The Role of Artificial Intelligence in Information Science and Library Management",
    members: [
      {
        name: "Anand Sharma",
        designation: "",
        image: "/special-sessions/track6/anandSharma.jpg",
      },
      {
        name: "Nupur Swami",
        designation: "",
        image: "/special-sessions/track6/nupur.jpg",
      },
    ],
  },
  {
    title:
      "Track 7: The Power Trio: Machine Learning, Blockchain, and IoT in Creating Intelligent, Resilient Networks",
    members: [
      {
        name: "Revathy Javabaskar",
        designation: "",
        image: "/special-sessions/track7/revathyBaskar.jpg",
      },
      {
        name: "Dr. M Martina",
        designation: "",
        image: "/special-sessions/track7/martina.jpg",
      },
    ],
  },
  {
    title: "Track 8: AI-Driven Intelligent Systems for Sustainable Development",
    members: [
      {
        name: "Dr. Manoj Agarwal",
        designation: "",
        image: "/special-sessions/track8/manojAgarwal.jpg",
      },
      {
        name: "Dr. Jitendra Sheetlani",
        designation: "",
        image: "/special-sessions/track8/jitendraSheetlani.jpeg",
      },
      {
        name: "Dr. Vishnu Kumar Mishra",
        designation: "",
        image: "/special-sessions/track8/vishnuKumar.jpeg",
      },
    ],
  },
  {
    title: "Track 9: Intelligence 5.0: Towards Building Sustainable Computational Models",
    members: [
      {
        name: "Dr. Charu Gupta",
        designation: "",
        image: "/special-sessions/track9/charuGupta.jpg",
      },
      {
        name: "Dr. Kanika Garg",
        designation: "",
        image: "/special-sessions/track9/kanikaGarg.png",
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
                  
                  {/* Avatar / image */}
                  <div className="col-span-1 flex items-center justify-center">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1a1212] text-2xl font-semibold text-white">
                        {item.name.charAt(0)}
                      </div>
                    )}
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