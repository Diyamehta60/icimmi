import Button from "@/components/button";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

const Register = () => {

    return (
        <>

            <Head>
                <title>Register - ICIMMI - International conference on information management & machine intelligence</title>
                <link rel="icon" href="/gallery/favicon.ico" />
            </Head>
            <div className={"mx-4 my-8 w-full"}>
                <Schedule />
                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                <h1 className={"heading font-semibold text-xl mb-12"}>Registration Fees Details
                    For Conference Registration the Author can pay the corresponding fees in the following Bank Account:</h1>

                <div >
                    <div className="relative overflow-x-auto container w-[100%] my-12">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-[#1a1212] dark:bg-red-700 dark:text-white">
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
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Faculty Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">INR 9000</td>
                                    <td className="px-6 py-4">INR 10,000</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Faculty (ACM/IEEE/FIP) With International co- Author
                                    </th>
                                    <td className="px-6 py-4">INR 8000</td>
                                    <td className="px-6 py-4">INR 9000</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Faculty International Author and Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">$150</td>
                                    <td className="px-6 py-4">$180</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Faculty Non-Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">INR 10,000</td>
                                    <td className="px-6 py-4">INR 11,000</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Faculty Non-Member (ACM/IEEE/FIP) with international co-Author
                                    </th>
                                    <td className="px-6 py-4">INR 9000</td>
                                    <td className="px-6 py-4">INR 10,000</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        International Author Non-Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">$200</td>
                                    <td className="px-6 py-4">$250</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Corporate/Industry Professional
                                    </th>
                                    <td className="px-6 py-4">INR 11,000</td>
                                    <td className="px-6 py-4">INR 12,000</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Ph.D Student
                                    </th>
                                    <td className="px-6 py-4">INR 8000</td>
                                    <td className="px-6 py-4">INR 9000</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        PG/UG Student
                                    </th>
                                    <td className="px-6 py-4">INR 7000</td>
                                    <td className="px-6 py-4">INR 8000</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Attendee
                                    </th>
                                    <td className="px-6 py-4">INR 2000	</td>
                                    <td className="px-6 py-4">INR 3000	</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <p className="font-bold text-sm lg:text-xl mb-4">No Paper To Have More Than 5 Authors</p>
                    <h1 className={"heading font-semibold text-xl mb-2"}>Account Details</h1>
                    <div
                        className="mb-8 flex flex-col gap-y-3 rounded-lg bg-white p-4 shadow-xl pt-3 border"
                        style={{ width: "100% !important" }}>
                        <div className="w-full mb-2">
                            <p className="mb-2"><strong>Account Name:</strong> POORNIMA INSTITUTE PART ONE</p>
                            <hr className="my-2" />
                            <p className="mb-2"><strong>Account Number:</strong> 50200067728610</p>
                            <hr className="my-2" />
                            <p className="mb-2"><strong>Bank:</strong> HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA, JAIPUR</p>
                            <hr className="my-2" />
                            <p className="mb-2"><strong>IFSC Code:</strong> HDFC0003873</p>
                            <hr className="my-2" />
                            <p className="mb-2"><strong>Account Name:</strong> POORNIMA INSTITUTE PART ONE</p>
                            <hr className="my-2" />
                            <p className="mb-2"><strong>SWIFT Code:</strong> HDFCINBBXXX</p>
                        </div>
                    </div>
                    <Sponsored />

                </div>
            </div>
        </>
    )

}

export default Register;