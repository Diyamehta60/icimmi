import Link from 'next/link'
import React from 'react'

function APCRates() {
  return (
     <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">
          APC Paid Publication Rates For ACM New Open Access for publishing model Starting January 2024 
        </h3>

        <div className="container relative my-12 w-[100%] overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-[#1a1212] text-xs uppercase text-white dark:bg-red-700 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  APC
                </th>
                <th scope="col" className="px-6 py-3">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Papers with International Authors (from low-income countries
                  as per World Bank list)
                </th>
                <td className="px-6 py-4">Zero APC</td>
                <td className="px-6 py-4 text-blue-600 underline">
                  <Link href="https://www.acm.org/publications/policies/full-waiver-countries">Link</Link>
                </td>
              </tr>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Papers with Authors from ACM Open listed institutes
                </th>
                <td className="px-6 py-4">Zero APC</td>
                <td className="px-6 py-4 text-blue-600 underline">
                  <Link href="https://libraries.acm.org/acmopen/open-participants">Link</Link>
                </td>
              </tr>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Papers with any Author as an ACM Member
                </th>
                <td className="px-6 py-4">$125</td>
                <td className="px-6 py-4 text-blue-600 underline">
                  <Link href="https://www.acm.org/publications/icps/author-guidance">Link</Link>
                </td>
              </tr>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Authors from India & other lower-middle-income countries (as
                  per World Bank list) None of the Author is ACM Member
                </th>
                <td className="px-6 py-4">$175</td>
                <td className="px-6 py-4 text-blue-600 underline">
                  <Link href="https://www.acm.org/publications/policies/lower-middle-income-countries">Link</Link>
                </td>
              </tr>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Authors from international fraternity not mentioned above
                </th>
                <td className="px-6 py-4">$350</td>
                <td className="px-6 py-4 text-blue-600 underline">
                  <Link href="https://www.acm.org/publications/icps/author-guidance">Link</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default APCRates
