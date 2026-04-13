import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PaperSubmission() {
  return (
    <div className="mx-4">
      <Head>
        <title>
          Paper Submission - ICIMMI - International conference on information
          management & machine intelligence
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>

      <Schedule />

      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      <div className={"prose my-8"}>
        <h1 className={"heading"}>Paper Submission</h1>

        <p className="text-2xl">
          Click{" "}
          <span>
            <Link
              target="_blank"
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICIMMI2026%2FSubmission%2FIndex"
            >
              here
            </Link>
          </span>{" "}
          to submit the paper
        </p>
      </div>

      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      <div className="my-8 space-y-4 leading-relaxed text-gray-800">
        <h2 className="text-xl font-bold">Submission Guidelines:</h2>

        <p>
          Authors are invited to submit original research papers to ICIMMI 2026
          following the standard IEEE Conference Template. Manuscripts must be
          prepared using the official IEEE templates available at:{" "}
          <Link
            href="https://www.ieee.org/conferences/publishing/templates"
            target="_blank"
            className="break-all font-medium text-blue-600 underline"
          >
            https://www.ieee.org/conferences/publishing/templates
          </Link>
          .
        </p>

        <p>
          Submissions should strictly comply with IEEE formatting requirements,
          including font styles, margins, reference format, and layout.
        </p>

        <p>
          The manuscript must not exceed six (6) pages, including figures,
          tables, and references. Authors are required to include an abstract of
          no more than 200 words, clearly summarizing the objectives,
          methodology, results, and contributions of the work.
        </p>

        <p>
          All submissions must be original and unpublished, and must not be
          under consideration for publication elsewhere.
        </p>

        <p>
          To maintain academic integrity, the similarity index must not exceed
          10%. Papers exceeding this threshold will be rejected without review.
        </p>

        <hr />

        <h2 className="text-xl font-bold">Review Process and Presentation</h2>

        <p>
          All eligible submissions will undergo a double-blind peer review
          process conducted by the conference technical committee in accordance
          with IEEE standards.
        </p>

        <p>Based on the review outcome, papers will be categorized as:</p>

        <ul className="ml-6 list-disc space-y-1 pl-6">
          <li>Accepted for Oral Presentation</li>
          <li>Accepted with Minor Revisions (Oral Presentation)</li>
          <li>Rejected</li>
        </ul>

        <p>
          Only accepted and presented papers will be considered for inclusion in
          the conference proceedings.
        </p>

        <hr />

        <h2 className="text-xl font-bold">Additional Notes</h2>

        <ul className="ml-6 list-disc space-y-1 pl-6">
          <li>
            Authors must ensure that the final manuscript complies with IEEE
            Xplore compatibility requirements (e.g., PDF format validation).
          </li>
          <li>
            At least one author of each accepted paper must register and present
            the paper at the conference.
          </li>
          <li>
            Detailed instructions regarding submission, registration, and
            presentation will be communicated after acceptance.
          </li>
        </ul>

        <p>
          <span className="font-semibold">Note:</span> Further updates regarding
          schedule and presentation mode will be announced in due course.
        </p>
      </div>

      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      <h2 className="my-3 text-center text-lg font-bold lg:text-start lg:text-2xl">
        Downloads:
      </h2>

      <div className="flex flex-col gap-y-3">
        <Link
          href="/ICIMMI_Authors_Template.docx"
          className="inline-flex w-full items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 sm:w-[40%] md:w-[30%] lg:w-[20%]"
        >
          <svg
            className="mr-2 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Paper Template Doc</span>
        </Link>

        <Link
          href="#"
          className="inline-flex w-full items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 sm:w-[40%] md:w-[30%] lg:w-[20%]"
        >
          <svg
            className="mr-2 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Paper Template Latex</span>
        </Link>
      </div>

      <Sponsored />
    </div>
  );
}
