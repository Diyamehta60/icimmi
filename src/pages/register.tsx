import APCRates from "@/components/apcDetails";
import Button from "@/components/button";
import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

const Register = () => {
  return (
    <>
      <Head>
        <title>
          Register - ICIMMI - International conference on information management
          & machine intelligence
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <div className={"mx-4 my-8 w-full"}>
        {/* <ImportantDetails /> */}
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <h1 className={"heading mb-12 text-xl font-semibold"}>
          Registration Fees Details For Conference Registration the Author can
          pay the corresponding fees in the following Bank Account:
        </h1>

        <div>
          <div className="container relative my-12 w-[100%] overflow-x-auto">
            {/* Indian Participants */}
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Indian Participants
            </h2>

            <div className="overflow-hidden rounded-xl border shadow-sm">
              <table className="w-full text-sm text-gray-700">
                {/* Top Header */}
                <thead>
                  <tr className="bg-[#1a1212] text-xs uppercase tracking-wider text-white">
                    <th className="px-6 py-4 text-left">
                      Participant Category
                    </th>
                    <th
                      colSpan={2}
                      className="border-l border-gray-700 px-6 py-4 text-center"
                    >
                      IEEE Member
                    </th>
                    <th
                      colSpan={2}
                      className="border-l border-gray-700 px-6 py-4 text-center"
                    >
                      Non-IEEE Member
                    </th>
                  </tr>

                  {/* Sub Header */}
                  <tr className="bg-gray-100 text-xs uppercase text-gray-600">
                    <th></th>
                    <th className="px-6 py-3 text-center">Online</th>
                    <th className="px-6 py-3 text-center">Offline</th>
                    <th className="px-6 py-3 text-center">Online</th>
                    <th className="px-6 py-3 text-center">Offline</th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {[
                    [
                      "Student (UG, PG)",
                      "₹8,000",
                      "₹10,000",
                      "₹10,000",
                      "₹12,000",
                    ],
                    [
                      "Faculty / PhD Scholar",
                      "₹9,000",
                      "₹11,000",
                      "₹11,000",
                      "₹13,000",
                    ],
                    ["Industry", "₹10,000", "₹12,000", "₹12,000", "₹14,000"],
                    ["Attendee", "₹2,000", "₹3,000", "₹3,000", "₹4,000"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-t transition duration-150 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-center">{row[1]}</td>
                      <td className="px-6 py-4 text-center">{row[2]}</td>
                      <td className="px-6 py-4 text-center">{row[3]}</td>
                      <td className="px-6 py-4 text-center">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Foreign Participants */}
            <h2 className="mb-4 mt-10 text-xl font-semibold text-gray-800">
              Foreign Participants
            </h2>

            <div className="overflow-hidden rounded-xl border shadow-sm">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="bg-[#1a1212] text-xs uppercase tracking-wider text-white">
                    <th className="px-6 py-4 text-left">
                      Participant Category
                    </th>
                    <th
                      colSpan={2}
                      className="border-l border-gray-700 px-6 py-4 text-center"
                    >
                      IEEE Member
                    </th>
                    <th
                      colSpan={2}
                      className="border-l border-gray-700 px-6 py-4 text-center"
                    >
                      Non-IEEE Member
                    </th>
                  </tr>

                  <tr className="bg-gray-100 text-xs uppercase text-gray-600">
                    <th></th>
                    <th className="px-6 py-3 text-center">Online</th>
                    <th className="px-6 py-3 text-center">Offline</th>
                    <th className="px-6 py-3 text-center">Online</th>
                    <th className="px-6 py-3 text-center">Offline</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Student (UG, PG)", "$100", "$120", "$120", "$150"],
                    ["Faculty / PhD Scholar", "$150", "$200", "$200", "$250"],
                    ["Attendee", "$30", "$50", "$50", "$100"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-t transition duration-150 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-center">{row[1]}</td>
                      <td className="px-6 py-4 text-center">{row[2]}</td>
                      <td className="px-6 py-4 text-center">{row[3]}</td>
                      <td className="px-6 py-4 text-center">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <p className="mb-4 text-sm font-bold lg:text-xl">
            No Paper To Have More Than 5 Authors
          </p> */}
          <h1 className={"heading mb-2 text-xl font-semibold"}>
            Account Details
          </h1>
          <div
            className="mb-8 flex flex-col gap-y-3 rounded-lg border bg-white p-4 pt-3 shadow-xl"
            style={{ width: "100% !important" }}
          >
            <div className="mb-2 w-full">
              <p className="mb-2">
                <strong>Account Name:</strong> POORNIMA INSTITUTE PART ONE
              </p>
              <hr className="my-2" />
              <p className="mb-2">
                <strong>Account Number:</strong> 50200067728610
              </p>
              <hr className="my-2" />
              <p className="mb-2">
                <strong>Bank:</strong> HDFC BANK LTD. F-129 RIICO INDUSTRIAL
                AREA SITAPURA, JAIPUR
              </p>
              <hr className="my-2" />
              <p className="mb-2">
                <strong>IFSC Code:</strong> HDFC0003873
              </p>
              <hr className="my-2" />
              <p className="mb-2">
                <strong>Account Name:</strong> POORNIMA INSTITUTE PART ONE
              </p>
              <hr className="my-2" />
              <p className="mb-2">
                <strong>SWIFT Code:</strong> HDFCINBBXXX
              </p>
            </div>
          </div>
          
          
          <Sponsored />
        </div>
      </div>
    </>
  );
};

export default Register;
