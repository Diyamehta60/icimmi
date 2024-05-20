import Schedule from '@/components/schedule';
import Sponsored from '@/components/sponsored'
import React from 'react'

function Publications() {
    return (
        <div className='mx-4'>
            <Schedule />
            <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

            <p>Selected, Registered and post conference papers will be published in the proceedings of ICIMMI 2024 in Scopus Indexed ACM International Conference Procedings .</p>
            <p>Selected, Extended Versions of the Conference papers may be considered for the following Journal. Extended papers must have at least 70% of new contents in the extended manuscripts for consideration for following Journal.</p>
            <ul className='prose mx-4 my-12 list-disc'>
                <li>Journal of Discrete Mathematical Sciences and Cryptography</li>
                <li>Communications in Computer and Information Science (ISSN 1865-0929)</li>
                <li>Journal of Interdisciplinary Mathematics</li>
            </ul>
            <Sponsored />
        </div>
    );
}

export default Publications;