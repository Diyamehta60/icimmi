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
      <div className={"mx-4 my-8 w-full"}>
        <Schedule />
        <ImportantDetails />
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <h1 className={"heading mb-12 text-xl font-semibold"}>
          Registration Fees Details For Conference Registration the Author can
          pay the corresponding fees in the following Bank Account:
        </h1>

        <div>
          <div className="container relative my-12 w-[100%] overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="bg-[#1a1212] text-xs uppercase text-white dark:bg-red-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    On or Before Nov 20, 2024
                  </th>
                  <th scope="col" className="px-6 py-3">
                    After Nov 20, 2024
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Faculty Member (International Professional Membership)
                  </th>
                  <td className="px-6 py-4">INR 9000</td>
                  <td className="px-6 py-4">INR 10,000</td>
                </tr>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Faculty (International Professional Membership) With
                    International co- Author
                  </th>
                  <td className="px-6 py-4">INR 3000</td>
                  <td className="px-6 py-4">INR 4000</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Faculty International Author and Member (International
                    Professional Membership)
                  </th>
                  <td className="px-6 py-4">$100</td>
                  <td className="px-6 py-4">$130</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Faculty Non-Member (International Professional Membership)
                  </th>
                  <td className="px-6 py-4">INR 5,000</td>
                  <td className="px-6 py-4">INR 6,000</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Faculty Non-Member (International Professional Membership)
                    with international co-Author
                  </th>
                  <td className="px-6 py-4">INR 4,000</td>
                  <td className="px-6 py-4">INR 5,000</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    International Author Non-Member (International Professional
                    Membership)
                  </th>
                  <td className="px-6 py-4">$150</td>
                  <td className="px-6 py-4">$200</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Corporate/Industry Professional
                  </th>
                  <td className="px-6 py-4">INR 6,000</td>
                  <td className="px-6 py-4">INR 7,000</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Ph.D Student
                  </th>
                  <td className="px-6 py-4">INR 5,000</td>
                  <td className="px-6 py-4">INR 4,000</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    PG/UG Student
                  </th>
                  <td className="px-6 py-4">INR 2,000</td>
                  <td className="px-6 py-4">INR 3,000</td>
                </tr>
                <tr className="border-b bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Attendee
                  </th>
                  <td className="px-6 py-4">INR 1000 </td>
                  <td className="px-6 py-4">INR 2000 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-sm font-bold lg:text-xl">
            No Paper To Have More Than 5 Authors
          </p>
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
