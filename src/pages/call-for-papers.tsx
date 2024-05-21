import { StarterLayout } from "layout";
import Head from "next/head";
import React from "react";
import Sponsored from "@/components/sponsored";
import Schedule from "@/components/schedule";

const callForPapers = () => {
  return (
    <>
      <Head>
        <title>Call for Papers - ICIMMI  - International conference on information management & machine intelligence</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <div className={" mx-4 my-8"}>
        <h1 className={"heading pros text-sm font-bold text-black lg:text-2xl"}>Call for Papers</h1>
        <p className="mx-4 mt-4 ">
          Prospective authors from academia as well as industry are invited to
          submit their full papers in main conference ICIMMI-2024 which have not
          been yet submitted published and that illustrate research, surveying
          works, and industrial application in all disciplines of Engineering
          for Intelligence based applications & automation activities,
          especially with the emergence of Data Analytics, AI, Machine Learning
          & Deep Learning or in following broad areas, but not limited to:
        </p>

        <div className="mt-1 mx-8 flex ">
          <ul className="mt-16 flex flex-wrap w-full max-w-4xl list-disc">
            <li className="w-1/2 p-2">Information Management</li>
            <li className="w-1/2 p-2">Information Security</li>
            <li className="w-1/2 p-2">Information Processing Techniques</li>
            <li className="w-1/2 p-2">Information Interpretation</li>
            <li className="w-1/2 p-2">Big Data Analytics</li>
            <li className="w-1/2 p-2">Data Analytics</li>
            <li className="w-1/2 p-2">Automations and Robotics in Construction</li>
            <li className="w-1/2 p-2">Artificial Intelligence and Soft Computing</li>
            <li className="w-1/2 p-2">
              Intelligent Software Methodologies, Tools and Techniques
            </li>
            <li className="w-1/2 p-2">
              Artificial Intelligence and Pattern Recognition
            </li>
            <li className="w-1/2 p-2">Multimedia Analytics using Machine Learning</li>
            <li className="w-1/2 p-2">Soft Computing Techniques in Power Systems</li>
            <li className="w-1/2 p-2">Intelligent Power Distribution System</li>
            <li className="w-1/2 p-2">Computer and Intelligent Communication</li>
            <li className="w-1/2 p-2">Adaptive Wireless Communication</li>
            <li className="w-1/2 p-2">Wireless Sensor Networks</li>
            <li className="w-1/2 p-2">Network Security</li>
            <li className="w-1/2 p-2">Cloud Based Applications for Machine Learning</li>
            <li className="w-1/2 p-2">Healthcare Automation using ML &amp; DL</li>
            <li className="w-1/2 p-2">Intelligent Devices</li>
            <li className="w-1/2 p-2">IoT Based Automation</li>
            <li className="w-1/2 p-2">Industrial Automation over IoT</li>
            <li className="w-1/2 p-2">Industrial Automation over Robotics</li>
            <li className="w-1/2 p-2">Smart Systems</li>
            <li className="w-1/2 p-2">Smart Society</li>
            <li className="w-1/2 p-2">Information Security using Machine Learning</li>
            <li className="w-1/2 p-2">Network Security using Machine Learning</li>
          </ul>
        </div>

      </div>
      <Sponsored />
    </>
  );
};

export default callForPapers;