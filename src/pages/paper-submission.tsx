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
        <h2 className="text-xl font-bold">Submission Guidelines</h2>

        <ul className="ml-6 list-disc space-y-2 pl-6">
          <li>
            Authors are invited to submit original and unpublished research
            papers relevant to the conference themes.
          </li>

          <li>
            Manuscripts must be prepared using the official conference template
            available on the conference website.
          </li>

          <li>
            Papers should be up to six (6) pages, including figures, tables, and
            references.
          </li>

          <li>The abstract should not exceed 200 words.</li>

          <li>
            Submitted papers must not be under consideration for publication
            elsewhere.
          </li>

          <li>
            The similarity index must not exceed 10% (excluding references), and
            all papers will undergo plagiarism screening.
          </li>
        </ul>

        <hr />

        <h2 className="text-xl font-bold">Review Process and Presentation</h2>

        <ul className="ml-6 list-disc space-y-2 pl-6">
          <li>
            All submissions will undergo a rigorous double-blind peer review by
            the Technical Program Committee.
          </li>

          <li>
            Papers will be evaluated based on originality, technical quality,
            relevance, significance, and presentation.
          </li>

          <li>
            Only accepted, registered, and presented papers will be considered
            for publication in the conference proceedings, subject to the
            publisher's policies.
          </li>
        </ul>

        <hr />

        <h2 className="text-xl font-bold">Important Notes</h2>

        <ul className="ml-6 list-disc space-y-2 pl-6">
          <li>
            At least one author must register and present the accepted paper.
          </li>

          <li>
            Authors of accepted papers must submit a camera-ready manuscript
            incorporating the reviewers' comments.
          </li>

          <li>
            Detailed instructions for submission, registration, and presentation
            will be communicated after acceptance.
          </li>
        </ul>

        <p>
          <span className="font-semibold">Note:</span> Further updates regarding
          the conference schedule and presentation mode will be announced in due
          course.
        </p>
      </div>

      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      {/* <h2 className="my-3 text-center text-lg font-bold lg:text-start lg:text-2xl">
        Downloads:
      </h2> */}

      {/* <div className="flex flex-col gap-y-3">
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
      </div> */}

      <div className="rounded-lg mb-10">
        <h2 className="mb-2 text-xl font-bold">Paper Template (Coming Soon)</h2>

        <p className="text-gray-700">
          The official conference paper template and formatting guidelines will
          be made available shortly.
        </p>
      </div>

      <Sponsored />
    </div>
  );
}
