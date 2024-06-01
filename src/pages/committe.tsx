import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

function Committe() {
  const honaryPateron = [
    {
      name: "Mr. Hari Singh",
      designation: "Director (Infrastructure), Poornima Group, Jaipur",
    },
    {
      name: "Mr. MKM Shah",
      designation: "Director (Admin & Finance), Poornima Group, Jaipur",
    },
  ];
  const honarayChair = [
    {
      name: "Prof Dharm Singh",
      designation: "Namibia University of Science & Tech., Namibia",
    },
    {
      name: "Prof. Marcin Paprzycki",
      designation:
        "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
    },
    {
      name: "Prof. B.B. Gupta",
      designation:
        "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan",
    },
    {
      name: "Dr. Sugandha Singh",
      designation: "Dean-Faculty of Engineering and Technology and Prof - CSE(SGTU) Gurugra",
    },
  ];
  const conferenceChair = [
    {
      name: "Dr. Dinesh Goyal",
      designation: "Professor & Director, PIET, Jaipur",
    },
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur",
    },
    {
      name: "Dr. JC Bansal",
      designation: "Professor, South Asian University",
    },
    {
      name: "Dr. Carlos M. Travieso-Gonzalez",
      designation:
        "Signals and Communication Department. University of Las Palmas de Gran Canaria, Spain",
    },
    {
      name: "Dr. Saurabh Sinha",
      designation: "University Of Canterbury",
    },
    {
      name: "Dr. Dharam Singh",
      designation: "Namibia University Of Science And Technology",
    },
  ];
  const conferenceCoChair = [
    {
      name: "Dr. Anil Kumar",
      designation: "Professor & HoD CSE, PIET, Jaipur",
    },
    {
      name: "Prof. (Dr.) Budesh Kanwar",
      designation: "Professor & HoD AI & DS, PIET, Jaipur",
    },
    {
      name: "Dr. Payal Bansal",
      designation: "Professor, IOT, PIET Jaipur",
    },
  ];
  const organizingChair = [
    {
      name: "Dr. Uday Pratap Singh",
      designation: "Asso. Prof. & Dy HoD, AI & DS, PIET, Jaipur",
    },
  ];
  // const organizingCoChair = [
  //   {
  //     name: "Mr. Udit Mamodiya",
  //     designation: "Assistant Professor, PIET, Jaipur",
  //   },
  //   {
  //     name: "Dr. Bhanu Pratap Singh",
  //     designation: "Associate Professor, PIET, Jaipur",
  //   },
  // ];
  const technicalProgramChair = [
    {
      name: "Dr. Atul Gonsai",
      designation: "Professor, Saurasthra University, Rajkot",
    },
    {
      name: "Dr. Manoj Kumar",
      designation: "Professor, Delhi Technical University, Delhi",
    },
    {
      name: "Dr. Harish Sharma",
      designation: "Associate Professor, RTU",
    },
    {
      name: "Dr. OP Verma",
      designation: "Professor, DTU",
    },
    {
      name: "Dr. Akash Saxena",
      designation: "Professor,University Of Haryana",
    },
    {
      name: "Dr. Shruti Thapar",
      designation: "Associate Professor, PIET, Jaipur",
    },
    {
      name: "Dr. Jasdeep Kaur Dhanoa",
      designation: "Professor, IGDTUW",
    },
    {
      name: "Mr. Vivek Saxena",
      designation: "Assistant Professor, PIET, Jaipur",
    },
    {
      name: "Dr. Monika Agrawal",
      designation: "Associate Professor, IIT, Delhi",
    },
    {
      name: "Prof. (Dr.) Rambilas",
      designation: "Professor ,IIT Indore",
    },
    {
      name: "Dr. Sandeep Gupta",
      designation: "Associate Professor, AI & DS, PIET, Jaipur",
    },
    {
      name: "Dr. Dilip Singh Sisodia",
      designation: "Associate Professor, Computer Science & Engineering National Institute of Technology, Raipur, India",
    },
  ];
  const editorial = [
    {
      name: "Dr. Dinesh Goyal",
      designation: "Professor & Director, PIET, Jaipur",
    },
    {
      name: "Dr. Anil Kumar",
      designation: "Professor & HOD, CSE, PIET, Jaipur",
    },
    {
      name: "Dr. Payal Bansal",
      designation: "Professor, IOT, PIET Jaipur",
    },
    {
      name: "Prof. Dharm Singh",
      designation: "Namibia University of Science & Tech., Namibia",
    },
    {
      name: "Prof. Marcin Paprzycki",
      designation:
        "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
    },
  ];
  const keynoteSpeakers = [
    {
      name: "Prof Dharm Singh",
      designation:
        "Professor & UNESCO Chair Holder Secure on High-performance Computing for Higher Education and Research, Namibia University of Science and Technology",
    },
    {
      name: "Dr. J. C. Bansal",
      designation: "Associate Professor, South Asian University, New Delhi",
    },
    {
      name: "Dr.Ashish Khanna",
      designation: "Associate professor CSE DEPT MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY ",
    },
    {
      name: "Dr. Saurabh Sinha",
      designation: "University Of Canterbury",
    },
    {
      name: "Dr. Maria Ganzha",
      designation:
        "Associate Professor, Warsaw University of Technology (Warsaw, Poland)",
    },
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur",
    },
    {
      name: "Dr. Enrico Cambiaso",
      designation: "Consiglio Nazionale delle Ricerche (CNR) A Via De Marini, 16 - 16149 Genoa (Italy)"
    },
    {
      name: "Dr. Anshuman Kalla",
      designation: "Centre for Wireless Communications (CWC) University of Oulu, Finland."
    },
    {
      name: "Dr. Majusri Misra",
      designation: "Professor & Tier 1 Canada Research Chair (CRC) in Sustainable Biocomposites, Fellow RSC(UK), Fellow AIChE, Fellow SPE University of Guelph, Canada"
    },
  ];
  const financeCommittee = [
    {
      name: "Dr. Ajay Maurya",
      designation: "Professor, PIET, Jaipur",
    },
  ];
  const publicityChair = [
    {
      name: "Dr. Basant Agarwal",
      designation: "Associate Professor, Central University Rajasthan",
    },
    {
      name: "Dr. Priya Mathur",
      designation: "PIET, Jaipur",
    },
    {
      name: "Shruti Jain",
      designation: "IEEE",
    },
  ];
  const internationalAdvisoryCommittee = [
    {
      name: "Aleksandra Mileva",
      designation: "Goce Delcev University STIP, Macedonia",
    },
    {
      name: "Carlos M. Travieso",
      designation: "University of Las Palmas de Gran Canaria, Spain",
    },
    {
      name: "Armin Aberle",
      designation: "SERIS National University of Singapore, Singapore",
    },
    {
      name: "Sedat Akleylek",
      designation: "Ondokuz Mayis University Samsun, Turkey",
    },
    {
      name: "Sureswaran Ramadass",
      designation: "USM University Penang, Malaysia",
    },
    {
      name: "Youcef Soufi",
      designation: "University of Tabessa, Algeria",
    },
    {
      name: "Lalit Kumar Goel",
      designation: "NTU Nanyang, Singapore",
    },
    {
      name: "Pinnamaneni Bhanu",
      designation: "Kelenn Technology Antony, France",
    },
    {
      name: "Daniele Riboni",
      designation: "University of Cagliari, Italy",
    },
    {
      name: "Wan Young Chung",
      designation: "Pukyong National University Busan, South Korea",
    },
    {
      name: "Dr. Sheng-Lung Peng",
      designation: "Prof., National Dong Hua University, Taiwan",
    },
    {
      name: "Dr. Ahmed Elngar",
      designation: "Assistant Professor, Egypt",
    },
  ];
  const nationalAdvisoryCommittee = [
    {
      name: "Dr. Rajat Rastogi",
      designation: "Professor, IIT Roorkee",
    },
    {
      name: "Dr. C. Periswamy",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Paresh Vallabhbhai Virparia",
      designation: "Professor, SPU",
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Arun Kumar Verma",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Rajendra K Asthana",
      designation: "IEEE Senior Life Member",
    },
    {
      name: "Dr. Amit Srivastava",
      designation: "Jaypee University, Greater Noida",
    },
    {
      name: "Prof. Anu Gupta",
      designation: "BITS, Pilani",
    },
    {
      name: "Dr. Vinod Kumar Chaubey",
      designation: "BITS, Pilani",
    },
    {
      name: "Dr. Ravinder Agarwal",
      designation: "Thapar University, Patiala",
    },
    {
      name: "Dr. Namita Mittal",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Trilok Mathur",
      designation: "BITS, Pilani",
    },
    {
      name: "Dr. A.K. Dwivedi",
      designation: "RTU, Kota",
    },
    {
      name: "Dr. Anil K Mathur",
      designation: "RTU, Kota",
    },
    {
      name: "Dr. C.P. Gupta",
      designation: "RTU, Kota",
    },
    {
      name: "Dr. Balamurugan Shanmugam",
      designation: "Director R & D, QUANTS IS & CS, Tamil Nadu",
    },
  ];

  const organizingCommittee = [
    {
      name: "Ms. Jayshree Surolia",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Ashima Tiwari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Dr. Saurabh Raj",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Bersha Kumari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Shikha Gautam",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Abhishek Dadhich",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Alka Rani",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Bhawna Kumari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Smita Bisht",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Punit Kumawat",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Chanchal Tiwari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Anurag Anand Dubey",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Mohnish Sachdeva",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Shefali Khandelwal",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Indra Kishor",
      designation: "PIET, Jaipur",
    },
  ];

  return (
    <div className="mx-4">
      <Head>
        <title>Committees- ICIMMI - International conference on information management & machine intelligence</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <div>
        <Schedule />
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Honorary Patron
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {honaryPateron.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Honorary Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {honarayChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Conference Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {conferenceChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Conference Co Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {conferenceCoChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Organizing Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {organizingChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Organizing Co Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {organizingCoChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div> */}
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Technical Program Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {technicalProgramChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Editorial
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {editorial.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Keynote Speaker
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {keynoteSpeakers.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Finance Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {financeCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Publicity Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {publicityChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            International Advisory Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {internationalAdvisoryCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            National Advisory Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {nationalAdvisoryCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Organizing Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {organizingCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Sponsored />
    </div>
  );
}

export default Committe;