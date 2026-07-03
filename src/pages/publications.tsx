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
          the ICIMMI 2026 Conference Proceedings, subject to the conference's
          publication agreement and the publisher's editorial policies.
        </p>

        <p className="font-semibold">
          Publication in IEEE Xplore is subject to:
        </p>

        <ul className="ml-6 list-disc space-y-1 pl-6">
          <li>Approval of the conference proposal by IEEE</li>
          <li>
            Compliance with IEEE quality standards and formatting guidelines
          </li>
        </ul>

        <p>
          The conference publication proposal has been submitted to leading
          professional publishers and is currently under review. The final
          publication partner and paper template will be announced on the
          conference website upon approval.
        </p>
      </div>

      <Sponsored />
    </div>
  );
}

export default Publications;
