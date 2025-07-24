/*import Link from "next/link";
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

export default ImportantDetails;*/

import Link from "next/link";
import React from "react";
import APCRates from "../apcDetails";

function ImportantDetails() {
  return (
    // Changed background to a light gray to match the website's body color
    <div className="mt-10 bg-gray-50 p-6 rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Content section with a white background */}
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          ICIMMI 2025 – ACM ICPS Publication Pipeline
        </h2>

        <p className="mb-6 text-center text-gray-600">
          To ensure a smooth and high-quality publication process with the ACM International Conference Proceedings Series (ICPS), the following structured workflow will be followed.
        </p>

        <div className="space-y-4">
          {/* Each step is now a white card on the gray background */}
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">1. Paper Submission</h3>
            <p className="text-gray-600">Authors must submit their manuscripts via the CMT (Conference Management Toolkit) portal through the link is given below with paper submission Section.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">2. Double-Blind Peer Review</h3>
            <p className="text-gray-600">Each submission undergoes a rigorous double-blind review by subject matter experts to ensure originality, quality, and relevance.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">3. Review Decision</h3>
            <p className="text-gray-600">Based on reviewer feedback, a decision (Accept / Minor Revision / Reject) will be communicated to the authors.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">4. Integrity Check via Morressier & Revision</h3>
            <p className="text-gray-600 mb-2">Accepted papers are uploaded to Morressier for mandatory ACM integrity checks, including:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Over-citations</li>
              <li>Retracted references</li>
              <li>AI-generated content</li>
              <li>Tortured phrases</li>
              <li>Similarity/Plagiarism score</li>
            </ul>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">5. Conference Registration</h3>
            <p className="text-gray-600">Once the integrity check is cleared, authors must complete registration to confirm inclusion in the proceedings.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">6. Paper Validation & Formatting</h3>
            <p className="text-gray-600">Authors must ensure their paper complies with the ACM Master Template, making it ready for TAPS (The ACM Production System) submission.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">7. e-Rights & APC Processing</h3>
            <p className="text-gray-600">Authors fill in the e-Rights form on the ACM portal. APC (Article Processing Charges), if applicable (based on ACM’s category-specific policies), must be paid.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">8. TAPS Submission</h3>
            <p className="text-gray-600">Upload the source files to TAPS. Review and approve the generated proofs. Submit revisions if required.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">9. Final Submission to ACM</h3>
            <p className="text-gray-600">Upon final approval from TAPS, papers are officially submitted for inclusion in the ACM Digital Library.</p>
          </div>
           <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg text-gray-700">10. Online Publication</h3>
            <p className="text-gray-600">Published articles will be available in the ACM Digital Library, indexed and accessible globally.</p>
          </div>
        </div>

        <p className="mt-6 font-semibold text-gray-700 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          Note: All steps are strictly monitored and must be followed in the given sequence to ensure timely and successful publication.
        </p>

        <p className="mt-4 text-center">
          For any queries, contact us at: <a href="mailto:icimmi@poornima.org" className="text-blue-600 underline hover:text-blue-800">icimmi@poornima.org</a>
        </p>
      </div>

      {/* This is the original section that was kept, now on a white card */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-bold text-gray-800">Important Details</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>ACM and (Open Access Fees is to be paid by authors).</li>
          <li>
            JDMSC (Additional APC is applicable, that is Rs 45000 including
            conference registration fee, with a limit of 10 pages in journal
            template)
          </li>
          <li>
            CRC Press, Taylor & Francis Books Series (Additional APC is
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
