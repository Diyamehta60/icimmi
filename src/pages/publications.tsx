import APCRates from "@/components/apcDetails";
import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
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
      <ImportantDetails />
      <APCRates/>
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      <p>
        Selected, Registered and post conference papers will be published in the
        proceedings of ICIMMI 2025 in Scopus Indexed ACM International
        Conference Proceedings.
      </p>
      <p>
        Selected, Extended Versions of the Conference papers may be considered
        for the following Journal. Extended papers must have at least 70% of new
        contents in the extended manuscripts for consideration for the following
        Journal.
      </p>
      <ul className="prose mx-4 my-12 list-disc">
        <li>ACM International Conference Proceeding Series</li>
        <li>
          {" "}
          Journal of Discrete Mathematical Sciences & Cryptography
          ISSN:0972-0529 (Q1-Scopus & WoS Indexed) (Additional APC will be
          applicable)
        </li>
      </ul>
      <Sponsored />
    </div>
  );
}

export default Publications;
