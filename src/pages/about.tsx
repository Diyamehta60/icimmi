import React from "react";
import Head from "next/head";
import Image from "next/image";

const AboutPage = () => {

    return (
        <>
            <Head>
                <title>About - ICIMMI - PIET</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <div>
                <div className={"prose max-w-screen-lg mx-4"}>
                    <h1 className={"heading"}>About GALGOTIAS EDUCATIONAL INSTITUTIONS (GEI)</h1>
                    <p className={'text-justify'}>
                        Galgotias Educational Institutions (GEI) have been inculcating practical skills and creating ‘Global
                        Professionals’ for more than 18 years. Founded by Smt. Shakuntala Educational and Welfare Society,
                        Galgotia Educational Institutions is currently led by Mr. Suneel Galgotia, Chairman and a resolute
                        visionary. Galgotias College of Engineering & Technology is placed among the best in professional
                        education in Dr. APJ Abdul Kalam Technical University (Formerly U.P. Technical University). It has
                        achieved top positions in MBA, MCA and B.Tech. finals and has a record of 100% placements with the
                        best corporate houses. It has also been ranked amongst the top engineering colleges in India by
                        DATAQUEST NASSCOM survey and OUTLOOK-C For College Survey.
                    </p>
                    <Image src={'/aboutGEI.jpg'} alt={'GEI includes'} />
                    <p>
                        Galgotia Educational Institutions combine a supremely empowering educational process, industry
                        stalwarts in their faculty, global educational associations and relentless placement efforts, to
                        offer the best of career opportunities to its students. Galgotia Educational Institutions are known
                        for a combination of state-of-the-art campus, strategic teaching-learning process, together with the
                        most advanced facilities, creating an environment in which wholesome corporate personalities are
                        created.
                    </p>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className={"prose max-w-screen-lg mx-4"}>
                    <h1 className={"heading"}>About GCET</h1>
                    <p className={'text-justify'}>
                        Galgotias College of Engineering and Technologyis approved by AICTE, Ministry of HRD, Government of
                        India and affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow formerly Uttar Pradesh
                        Technical University. Galgotias College of Engineering & Technology, established in 2000, synergizes
                        theoretical knowledge and practical skills to promote all round professional competence. Galgotias
                        College of Engineering & Technology has acquired a unique status in UP, the NCR region and the
                        country as a whole by breaking new grounds in producing professionals of national and international
                        acclaim and has been recognized as one of the top ranking institutions imparting high quality
                        education.
                    </p>
                    <Image src={'/gcet.jpg'} alt={'GEI includes'} />
                    <p>
                        The Campus, spread over 19 acres is located on an 8-lane expressway connecting Greater Noida with
                        Noida and New Delhi. It is truly a self-sufficient campus with spacious and beautifully academic
                        buildings, separate, fully secure and comfortable hostels for boys and girls, seminar and conference
                        halls as well as indoor and outdoor games facilities and a multi-cuisine cafeteria.
                    </p>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className={"prose max-w-screen-lg mx-4"}>
                    <h1 className={"heading"}>About Information Technology Department</h1>
                    <p className={'text-justify'}>
                        The department of Information Technology offers engineering programme at the undergraduate as well as at the post graduate levels. The course is designed to provide comprehensive knowledge of information technology with emphasis on applications together with a judicious blend of technical skills. The department emphasis the use of learning tools for the acquisition of knowledge and skills. Role-play, case study, project work, practical exposure, assignments, quiz, seminars, industry visits are some of the methods used for teaching learning process. The curriculum provides not only technical knowledge but also the exposure to recent technologies. To impart good quality engineering education, the department focuses on development of practical and application oriented minds. It is our attempt to make students learn by doing rather than by simply learning of topics and subjects.

                        The vibrant faculty members of the department possess demonstrated expertise in many areas of information technology and flair for teaching different courses. The department consists of a medley of faculty members with industrial and academic experience. The department has qualified and experienced faculty in the areas of Artificial Intelligence, Computer Networks, Data Mining, Database Systems, Neural Networks, Web Technology, Wireless and Sensor Networks, and Operating System. There are fully equipped laboratories in department such as: Computer Programming Lab, DBMS Lab, Software Engineering Lab, Networking Lab, Project Lab, R & D Lab. Research in the department focuses on creating and evaluating innovative learning that is inspired by technical progress. The key areas of research of the faculty members include semantic web, data mining, software reliability, wireless sensor networks, network security, big data analytics and cloud computing. The department has organized various national and international conferences.
                    </p>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className={"prose max-w-screen-lg mx-4"}>
                    <h1 className={"heading"}>About Computer Applications Department</h1>
                    <p className={'text-justify'}>
                        The Department of Computer Applications, established in the year 2003 is one of the oldest and pioneer departments of Galgotias College of Engineering and Technology. It offers the two year Post Graduate Program – Masters of Computer Applications (MCA), which is affiliated to Abdul Kalam Technical University (AKTU). It has highly qualified, committed and research-oriented faculty members who share the mission and vision of the institution in imparting quality education to the students.

                        <br />
                        The focus of the Department is to develop and to strengthen young minds to make them globally competitive by inculcating the capabilities of critical thinking, problem solving, analysis, design, research, team work, communication skills, and readiness for lifelong learning in areas of Artificial Intelligence, Machine Learning, Pattern Recognition, Cloud Computing, Internet of Things and Blockchain.

                        <br />
                        To keep itself abreast with latest developments in Computer Applications, the department makes extensive efforts to develop partnerships with industry. The department enjoys the privilege of having spacious and well-equipped laboratories that provide students, the industrial environment much needed for real life training
                    </p>
                </div>

            </div>
        </>
    )

}

export default AboutPage;