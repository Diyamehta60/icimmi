import Schedule from "@/components/schedule";
import Sponsored2 from "@/components/sponser2";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

function Partners() {
  return (
    <>
      <Head>
        <title>Conference Partners - ICIMMI - International conference on information management & machine intelligence</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <div className="my-12 mx-4">
        <Schedule />
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <h1 className={"heading my-12"}>Introducing with great excitement: ICIMMI 2024, in partnership with IIIT Nagpur, Asia University Taiwan, and Namibia University.</h1>
        <p className="my-12">
          “This groundbreaking event marks a new era of innovation, collaboration, and knowledge exchange. Join us as we unveil a remarkable conference experience that will shape the future of technology and academia.”
        </p>
        <Sponsored2 />
        <ul className="my-12 ">
          <li>1. IIIT Nagpur: Indian Institute of Information Technology Nagpur, is a prestigious institution of higher education in the field of Information Technology and Computer Science it is one of the leading institutes in India dedicated to fostering excellence in education, research, and innovation. With a focus on providing industry-relevant curriculum, state-of-the-art facilities, and a vibrant academic environment, IIIT Nagpur aims to nurture the next generation of technocrats and leaders in the IT industry.</li>
          <li>2. Asia University: Asia University , located in Taiwan, is a prestigious institution renowned for its commitment to academic excellence and innovative research. With a diverse and vibrant campus community, Asia University offers a wide range of undergraduate and graduate programs in various fields. With a focus on global perspectives, interdisciplinary learning, and practical skills development, Asia University prepares students to excel in their chosen careers and make a positive impact in the world.</li>
          <li>3. Namibia University: Namibia University provide exceptional education and a vibrant learning community. This institution is dedicated to nurturing intellectual growth, fostering critical thinking skills, and promoting a spirit of innovation. With a wide range of academic programs, state-of-the-art facilities, and a supportive faculty and aim to empower their students to become future leaders and contribute positively to society. The Namibia University provides transformative educational journey, where knowledge meets opportunity.</li>
        </ul>
      </div>
      <Sponsored />
    </>
  );
}

export default Partners;
