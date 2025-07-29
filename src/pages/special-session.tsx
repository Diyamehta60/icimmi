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
       {
        name: "Dr. Joshuva Arockia Dhanraj",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track3/i6.jpeg",
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
    title: "Track 6: Recent Trends in Blockchain, Machine Learning, and Big Data for Real-Life Problem-Solving",
    members: [
      {
        name: "Dr. BIPIN KUMAR RAI,",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track6/i1.jpg",
      },
    ],
  },
  {
    title: "Track 7: AI in Cybersecurity ",
    members: [
      {
        name: "Dr. Himanshi Babbar",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track7/i1.jpeg",
      },
    ],
  },
  {
    title: "Track 8: Optimizing Sustainable Analytics and Autonomous Intelligence in Healthcare ",
    members: [
      {
        name: "Dr. YOJNA ARORA",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track8/i1.jpeg",
      },
      {
        name: "Dr. Ashima Narang)",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track8/i2.jpeg",
      },
    ],
  },
  {
    title: "Track 9: Emerging Trends in ML and IoT for Smart Agriculture, Healthcare and Automation",
    members: [
      {
        name: "(Dr. SHWETA SINHA",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track9/i1.png",
      },
      {
        name: "Dr Priyanka Makkar",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track9/i2.png",
      },
    ],
  },
  {
    title: "Track 10: AI for Quality Education and Sustainable Learning Systems",
    members: [
      {
        name: "Dr. MITALI CHUGH",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track10/i2.jpg",
      },
      {
        name: "Dr. Sonali Vyas",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track10/i1.jpg",
      },
      
    ],
  },
   {
    title: "Track 11: Advances in Computational Intelligence and Embedded Systems: From AI and Machine Learning to Communication and Sensing Technologies",
    members: [
      {
        name: " Dr. NISHA CHARAYA",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track11/i1.png",
      },
      // {
      //   name: "DR. VED PRAKASH",
      //   designation: "(Session Co-Chair)",
      //   image: "/gallery/special_sessions_old/track11/i2.jpg",
      // },
    ],
  },
  {
    title: "Track 12: AI & XAI for Business Intelligence, Management Systems, and Ethical Automation",
    members: [
      {
        name: "Dr. MOHIT TIWARI",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track12/i1.jpg",
      },
      {
        name: "Dr.Aparna Marwah",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track12/i4.jpg",
      },
      {
        name: "Dr. Pallavi Chopade",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track12/i2.jpeg",
      },
      {
        name: "Ms.Tripti Tiwari",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track12/i3.jpg",
      },
    ],
  },
  {
    title: "Track 13: Intelligent Computing in Multidisciplinary Engineering Applications",
    members: [
      {
        name: "Dr. Aarti Chugh",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track13/Madam.JPG",
      },
      {
        name: "Dr.Nisha Charaya",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track13/i3.png",
      },
      {
        name: "Dr.Charu Jain",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track13/i4.jpg",
      },
    ],
  },
  {
    title: "Track 14: Generative AI for Societal Transformation: Bridging Intelligence, Infrastructure, and Innovation",
    members: [
      {
        name: "Dr. Aarti Chugh",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track14/chugh.JPG",
      },
      {
        name: "Dr. Pooja Batra",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track14/i2.jpeg",
      },
    ],
  },
  {
    title: "Track 15: Distributed Machine Learning in Edge-IoT Systems Architectures and Applications",
    members: [
      {
        name: "Dr POONGODI T",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track15/i1.jpg",
      },
      {
        name: "Dr. M Kiruthika",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track15/i2.png",
      },
      {
        name: "Dr. D. Sumathi",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track15/i3.png",
      },
    ],
  },
  {
    title: "Track 16: AI-Based Applications in Machine Learning & Big Data Analytics",
    members: [
      {
        name: "Dr. MANOJ AGRAWAL",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track16/i1.jpg",
      },
      {
        name: "Dr. Jitendra Sheetlani",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track16/i2.jpeg",
      },
      {
        name: "Dr. Shweta Agrawal",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track16/i3.jpeg",
      },
      {
        name: "Dr. Shilpa Bhalerao",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track16/i4.png",
      },
    ],
  },
  {
    title: "Track 17: Futuristic Trends in Information Technology",
    members: [
      {
        name: "Dr. RAHUL DEO SAH",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track17/i1.jpeg",
      },
      {
        name: "Dr. Nagesh Salimath",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track17/i2.JPG",
      },
      {
        name: "Dr. ASHISH GUPTA",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track17/i3.jpeg",
      },
    ],
  },
  {
    title: "Track 18: Blockchain and AI for Secure Image Processing and Information Management",
    members: [
      {
        name: "Dr. SHARMILA",
        designation: "(Session Chair)",
        image: "/gallery/special_sessions_old/track18/i1.jpg",
      },
      {
        name: "Dr. Shashi Bhushan",
        designation: "(Session Co-Chair)",
        image: "/gallery/special_sessions_old/track18/i2.jpg",
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
