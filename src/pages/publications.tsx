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
          the ICIMMI 2026 Conference Proceedings, subject to the conference&apos;s
          publication agreement and the publisher&apos;s editorial policies.
        </p>

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
