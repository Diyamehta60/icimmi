import { StarterLayout } from "layout";
import Head from "next/head";
import React from "react";
import Sponsored from "@/components/sponsored";
import Schedule from "@/components/schedule";

const callForPapers = () => {
  return (
    <>
      <Head>
        <title>
          Call for Papers - ICIMMI - International conference on information
          management & machine intelligence
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>

      <Schedule />

      <div className={"mx-4 my-8"}>
        <h1 className={"heading text-sm font-bold text-black lg:text-2xl"}>
          Call for Papers
        </h1>

        <p className="mx-4 mt-4">
          The International Conference on Information Management & Machine
          Intelligence (ICIMMI 2026) invites researchers, academicians, industry
          professionals, and practitioners to submit original and high-quality
          research contributions addressing emerging challenges and innovations
          in intelligent systems and interdisciplinary domains. The conference
          aims to provide a dynamic platform for sharing novel ideas, recent
          advancements, and practical experiences in the fields of computing,
          engineering, and technology-driven solutions.
        </p>

        {/* Tracks Section */}
        <div className="mt-10 flex flex-col gap-10">

          {/* Track 1 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-4">
              Track-1: Intelligent Computing & Information Systems (CS/IT)
            </h2>
            <ul className="flex flex-wrap list-disc ml-6">
              {[
                "Artificial Intelligence & Machine Learning",
                "Data Mining & Knowledge Discovery",
                "Big Data Analytics",
                "Cloud Computing & Edge Computing",
                "Cyber Security & Cryptography",
                "Natural Language Processing",
                "Computer Vision & Image Processing",
                "Software Engineering & DevOps",
                "Distributed & Parallel Computing",
                "Database Systems & Information Management",
                "High Performance Computing",
                "Blockchain Technologies",
                "Internet of Things (IoT)",
                "Quantum Computing & Advanced Algorithms",
                "Human-Computer Interaction",
              ].map((item, i) => (
                <li key={i} className="w-1/2 p-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Track 2 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-4">
              Track-2: Smart Electronics & Communication Systems (ECE)
            </h2>
            <ul className="flex flex-wrap list-disc ml-6">
              {[
                "Wireless Communication Systems",
                "Digital Signal Processing",
                "VLSI & Embedded Systems",
                "Internet of Things Hardware",
                "Antenna Design & RF Systems",
                "Optical & Satellite Communication",
                "Radar & Microwave Engineering",
                "Sensor Networks & IoT Communication",
                "Embedded Real-Time Systems",
                "Communication Network Protocols",
                "Control Systems & Robotics",
                "Signal Processing Applications",
                "Nanoelectronics & Semiconductor Devices",
                "Software Defined Networks",
                "Vehicular Communication Systems",
              ].map((item, i) => (
                <li key={i} className="w-1/2 p-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Track 3 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-4">
              Track-3: Innovation, IPR & Technology Entrepreneurship
            </h2>
            <ul className="flex flex-wrap list-disc ml-6">
              {[
                "Technology Innovation Management",
                "Intellectual Property Rights (IPR)",
                "Patent Analytics & Technology Transfer",
                "Startup Ecosystems & Incubation",
                "Technology Commercialization",
                "Digital Entrepreneurship",
                "Innovation Policy & Strategy",
                "Innovation in Industry 4.0",
                "Business Model Innovation",
                "Technology-Driven Startups",
                "Innovation in Digital Platforms",
                "Innovation in Smart Manufacturing",
                "Technology Management in SMEs",
                "Entrepreneurship in Emerging Technologies",
                "Innovation in Smart Cities",
              ].map((item, i) => (
                <li key={i} className="w-1/2 p-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Track 4 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-4">
              Track-4: Sustainable Energy & Green Technologies
            </h2>
            <ul className="flex flex-wrap list-disc ml-6">
              {[
                "Renewable Energy Systems",
                "Smart Grid Technologies",
                "Micro-grid Systems",
                "Power Electronics for Renewable Energy",
                "Energy Storage Systems",
                "Sustainable Smart Cities",
                "Energy Efficiency & Audit",
                "Electric Vehicles & Charging Infrastructure",
                "Power System Optimization",
                "Power System Stability & Control",
                "Renewable Power Integration",
                "Green Computing & Sustainable ICT",
                "Carbon Neutral Energy Systems",
                "Hydrogen Energy Systems",
                "Energy Management Systems",
              ].map((item, i) => (
                <li key={i} className="w-1/2 p-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <Sponsored />
    </>
  );
};

export default callForPapers;