import Link from "next/link";
import React from "react";
import APCRates from "../apcDetails";

function ImportantDetails() {
  return (
    <div className="mt-10 bg-white ">
      <h2 className="mb-4 text-xl font-bold">
        Starting January 2024, ACM

        has implemented a new Open Access (OA) publishing model for ICPS
        conferences. Here is a simple summary of the new model:
      </h2>

      <p className="mb-2 font-semibold">
        Authors can opt for either of the below options for publication, after
        presenting the paper in the Conference:
      </p>
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">
          Free Publishing (Corresponding or 1st Author has to be from either of
          the below given category)
        </h3>

        <ul className="prose mx-4 my-2 list-disc">
          <li>
            <span className="font-semibold">
              ACM Open Program Institutions:
            </span>{" "}
            If the main author’s institution is part of ACM’s ACM Open program
            (which includes over 800 institutions), the paper will be published
            for free.{" "}
            <a
              href="https://libraries.acm.org/acmopen/open-participants"
              className="text-blue-600 underline"
            >
              https://libraries.acm.org/acmopen/open-participants
            </a>
          </li>
          <li>
            <span className="font-semibold">Low-Income Countries:</span> Papers
            from institutions in low-income countries or covered by ACM
            agreements will also be published for free.{" "}
            <a
              href="https://www.acm.org/publications/policies/full-waiver-countries"
              className="text-blue-600 underline"
            >
              List of Countries
            </a>
          </li>
        </ul>

        <p className="mt-4">
          <span className="font-semibold">Note:</span> Discounted Conference
          Fees: Get a 20% discount on conference registration if you are in any
          of the above mentioned categories.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">Important Details</h3>

        <ul className="prose mx-4 my-2 list-disc">
          <li>ACM and (Open Access Fess is to be paid by authors).</li>
          <li>
            JDMSC (Addition APC is applicable, that is Rs 45000 including
            conference registration fee, with a limit of 10 pages in journal
            template)
          </li>
          <li>
            CRC Press, Taylor & Francis Books Series (Addition APC is
            applicable, that is Rs 10000 per paper including Conference
            Registration fee)
          </li>
          <li>The Indian Journal of Technical Education (UGC Care)</li>
        </ul>
      </div>
    </div>
  );
}

export default ImportantDetails;
