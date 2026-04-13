import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";

import React from "react";

function Publications() {
  return (
    <div className="mx-4">
      <Head>
        <title>
          Publications - ICIMMI - International conference on information
          management & machine intelligence
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>

      <Schedule />

      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      <div className="my-8 space-y-4 leading-relaxed text-gray-800">
        <p>
          All accepted, registered, and presented papers will be published in
          the ICIMMI 2026 Conference Proceedings. The proceedings are intended
          for submission to IEEE Xplore for possible indexing.
        </p>

        <p className="font-semibold">
          Publication in IEEE Xplore is subject to:
        </p>

        <ul className="list-disc space-y-1 pl-6 ml-6">
          <li>Approval of the conference proposal by IEEE</li>
          <li>
            Compliance with IEEE quality standards and formatting guidelines
          </li>
        </ul>

        <p>
          The conference proposal has been submitted to IEEE and is currently
          under review.
        </p>
      </div>

      <Sponsored />
    </div>
  );
}

export default Publications;
