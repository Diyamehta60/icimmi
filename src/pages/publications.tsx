import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Image from "next/image";

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

      <hr className="mb-0 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      <div className="mt-0 mb-8 leading-relaxed text-gray-800">
        <div className="flex justify-center mt-4">
          <div className="max-w-[240px] w-full">
            <Image
              src="/gallery/logos/IET%20Logo.png"
              alt="IET logo"
              width={240}
              height={90}
              className="object-contain"
            />
          </div>
        </div>
        <p>
          The proceedings of ICIMMI-2026 have been approved for publication by
          The Institution of Engineering and Technology (IET), UK. Accepted,
          registered and presented papers will be submitted to IET for final
          quality and integrity checks. Papers approved by IET will be
          published in the IET Conference Proceedings, made available through
          the IET Digital Library and IEEE Xplore, and submitted for indexing
          in Scopus, IET Inspec and Ei Compendex. Final publication and
          indexing are subject to IET and the respective databases' policies.
        </p>
      </div>

      <Sponsored />
    </div>
  );
}

export default Publications;
