import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Committe() {
  const chiefPatrons = [
    {
      name: "Mr. Shashikant Singhi",
      designation: "Chairman,Poornima Foundation, Jaipur, India",
      profile: "#",
    },
  ];
  const patrons = [
    {
      name: "Prof. B.B. Gupta",
      designation:
        "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan",
      profile: "#",
    },
    {
      name: "Dr. Valentina E Balas",
      designation: "Professor, Department of Automatics",
      profile: "#",
    },
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur",
      profile: "#",
    },
  ];

  const generalChair = [
    {
      name: "Prof Dharam Singh Jat",
      designation: "Namibia University of Science & Tech., Namibia",
      profile: "https://fci.nust.na/prof-dharm-singh-jat",
    },
    {
      name: "Prof. Marcin Paprzycki",
      designation:
        "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
      profile: "#",
    },
  ];

  const generalCoChair = [
    {
      name: "Dr. Dinesh Goyal",
      designation: "Principal & IEEE Senior Member, PIET, Jaipur",
      profile: "https://www.piet.poornima.org/Principal.html",
    },
  ];

  const SteeringCommittee = [
    {
      name: "Dr. JC Bansal",
      designation: "Professor, South Asian University",
      profile: "",
    },
    {
      name: "Dr. Carlos M. Travieso-Gonzalez",
      designation:
        "Professor, Signals and Communication Department, University of Las Palmas de Gran Canaria, Spain",
      profile: "",
    },
    {
      name: "Dr. Saurabh Sinha",
      designation: "Professor, University Of Canterbury",
      profile: "",
    },
    {
      name: "Dr. Nischal Verma",
      designation: "Professor, IIT Kanpur",
      profile: "",
    },
    {
      name: "Dr. Veerpratap Meena",
      designation:
        "Professor, National Institute of Technology (NIT), Jamshedpur",
      profile: "",
    },
    {
      name: "Dr. Wan-Young Chung",
      designation: "Pukyong National University, Busan, South Korea",
      profile: "",
    },
    {
      name: "Prof. Kokou Yetongnon",
      designation: "Professor, University of Bourgogne, France",
      profile: "",
    },
    {
      name: "Dr. Puneet Goyal",
      designation: "Assistant Professor, IIT Mandi",
      profile: "",
    },
    {
      name: "Dr. Abhishek Mukherjee",
      designation: "USA",
      profile: "",
    },
  ];

  const advisoryCommittee = [
    {
      name: "Prof (Dr) Uma Jha",
      designation:
        "Senior IEEE Fellow and Professor of Practice, ECE, University of Florida, Gainesville, Florida, USA",
      profile: "",
    },
    {
      name: "Prof (Dr) Parag Kulkarni",
      designation:
        "Professor, Tokyo International University, Japan; Founder, Chief Scientist and Advisor, iKnowlation Research Labs Pvt Ltd",
      profile: "",
    },
    {
      name: "Dr Marta Zurek-Mortka",
      designation:
        "Head of Mechatronics and Prototyping Centre, Lukasiewicz Research Network - Institute for Sustainable Technologies, Warsaw, Poland",
      profile: "",
    },
    {
      name: "Prof (Dr) Tanzila Saba",
      designation: "Professor, Prince Sultan University, Riyadh, Saudi Arabia",
      profile: "",
    },
    {
      name: "Prof (Dr) Wen-Cheng Lai",
      designation:
        "Professor, Dept. of Electrical Engineering, Ming Chi University of Technology, Taiwan",
      profile: "",
    },
    {
      name: "Prof (Dr) Prashant Jha",
      designation:
        "Professor, MedTech Innovation and Entrepreneurship, King’s College, London, UK",
      profile: "",
    },
    {
      name: "Prof (Dr.) Shipra Suman",
      designation: "Professor, University of London, United Kingdom",
      profile: "",
    },
    {
      name: "Prof (Dr) Vinod Kumar",
      designation:
        "Professor, Department of Physics, The University of the West Indies, St. Augustine, Trinidad & Tobago",
      profile: "",
    },
    {
      name: "Prof (Dr) Sudipto Ghosh",
      designation:
        "Professor, Computer Science, Colorado State University, USA",
      profile: "",
    },
    {
      name: "Prof (Dr) John Martin",
      designation:
        "Professor, School of Engineering and Computer Science, Jazan University, Saudi Arabia",
      profile: "",
    },
    {
      name: "Prof (Dr) Madan Singh",
      designation:
        "Professor, National University of Lesotho, Lesotho, Southern Africa",
      profile: "",
    },
    {
      name: "Dr Muluneh Lemma Woldesemayat",
      designation:
        "Associate Professor and Scientific Director, Arba Minch Institute of Technology (AMiT), Ethiopia",
      profile: "",
    },
    {
      name: "Dr Milkias Berhanu Tuka",
      designation:
        "Associate Professor, Addis Ababa Science and Technology University, College of Engineering, Ethiopia",
      profile: "",
    },
    {
      name: "Dr Arindam Pal",
      designation:
        "Director, Data Science and Optimization, Optym Bengaluru; Conjoint Senior Lecturer, University of New South Wales, Sydney, Australia",
      profile: "",
    },
    {
      name: "Dr Parnika Gupta",
      designation: "Senior Engineer, Global Foundaries, Belgium",
      profile: "",
    },
    {
      name: "Dr Promod Thakur",
      designation:
        "Assistant Professor, Hubert Curien Laboratory, Jean Monnet University in Saint-Etienne, France",
      profile: "",
    },
    {
      name: "Dr Mohit Mittal",
      designation: "Data Scientist, Shiratech-Knowtion GmbH, Germany",
      profile: "",
    },
    {
      name: "Dr Jae Yeon Park",
      designation:
        "Senior Researcher, Korea Atomic Energy Research Institute, Daejeon, South Korea",
      profile: "",
    },
    {
      name: "Dr Mohammad Ali Jallal",
      designation:
        "Research Fellow, French Alternative Energies and Atomic Energy Commission (CEA), Paris-Saclay, France",
      profile: "",
    },
    {
      name: "Dr Ilyos Rabbimov",
      designation:
        "Researcher, Center for Economic Research and Reform, Tashkent, Uzbekistan",
      profile: "",
    },
    {
      name: "Mr Prashant Gupta",
      designation: "Software Development Manager, Amazon, USA",
      profile: "",
    },
    {
      name: "Dr. Vijay K. Bhargav",
      designation: "University of British Columbia",
      profile: "",
    },
    {
      name: "Dr. Ramjee Prasad",
      designation: "Aalborg University, Denmark",
      profile: "",
    },
    { name: "Dr. Vinod Kumar", designation: "ALCATEL, France", profile: "" },
    {
      name: "Dr. Sastri",
      designation: "University of Oulu, Finland",
      profile: "",
    },
    {
      name: "Dr. Ali Al-Sherbaz",
      designation: "University of Northampton, UK",
      profile: "",
    },
    {
      name: "Dr. Atheer Matroud",
      designation: "University of Otago, New Zealand",
      profile: "",
    },
    {
      name: "Dr. George Tsaramirsis",
      designation: "King Abdulaziz University, Jeddah, Saudi Arabia",
      profile: "",
    },
    {
      name: "Dr. Ramesh C. Bansal",
      designation: "Queensland University, Australia",
      profile: "",
    },
    {
      name: "Dr. Raed Abd-Alhameed",
      designation: "University of Bradford, UK",
      profile: "",
    },
    {
      name: "Dr. Sureswaran Ramadass",
      designation: "USM University, Malaysia",
      profile: "",
    },
    {
      name: "Dr. William Puech",
      designation: "University Montpellier, France",
      profile: "",
    },
    {
      name: "Dr. Youcef Soufi Mail",
      designation: "University of Tebessa, Algeria",
      profile: "",
    },
    {
      name: "Dr. Wan Young Chung",
      designation: "Pukyong National University, Busan, South Korea",
      profile: "",
    },
    {
      name: "Dr. Li Zhiwu",
      designation: "Macau University of Science and Technology, China",
      profile: "",
    },
    {
      name: "Dr. Youcef Soufi",
      designation: "University of Tebessa, Algeria",
      profile: "",
    },
    {
      name: "Dr. Abhishek Ukil",
      designation: "Nanyang Technological University, Singapore",
      profile: "",
    },
    {
      name: "Dr. Akshay Rathore",
      designation: "Concordia University, Montreal, Canada",
      profile: "",
    },
    {
      name: "Dr. Pinnamaneni Bhanu",
      designation: "Kelenn Technology, France",
      profile: "",
    },
    {
      name: "Dr. Armin Aberle",
      designation: "SERIS, National University of Singapore",
      profile: "",
    },
    {
      name: "Dr. Thomas Zimmer",
      designation: "University of Bordeaux, France",
      profile: "",
    },
    {
      name: "Dr. Sebastien Fregonese",
      designation: "University of Bordeaux, France",
      profile: "",
    },
    {
      name: "Dr. Shuliang Wang",
      designation: "Beijing Institute of Technology, China",
      profile: "",
    },
    {
      name: "Ashutosh Dutta",
      designation: "Senior Scientist & 5G Chief Strategist, Johns Hopkins",
      profile: "",
    },
    {
      name: "Nambirajan Seshadri",
      designation: "APL; Adjunct Faculty, Johns Hopkins University",
      profile: "",
    },
    {
      name: "Vijay Raghunathan",
      designation: "Professor of Practice, UC San Diego; Former CTO, Broadcom",
      profile: "",
    },
    {
      name: "Ravi Kumar Arya",
      designation: "Director, Xiangshan Laboratory Wireless Group",
      profile: "",
    },
    {
      name: "Dr. Deepak Garg",
      designation: "Professor and Vice Chancellor, SR University",
      profile: "",
    },
  ];

  const technicalProgramCommittee = [
    {
      name: "Dr Abdur Rahman",
      designation: "Professor, AITU Almaty, Kazakhstan",
      profile: "",
    },
    {
      name: "Dr Ameer Rashed Khan",
      designation: "Faculty Member, Sharda University, Uzbekistan",
      profile: "",
    },
    {
      name: "Dr Ammar Ali Awad Abdeen",
      designation: "Associate Professor, Sudan University, Sudan",
      profile: "",
    },
    {
      name: "Dr Daniel Jr Dasig",
      designation:
        "Assistant Professor, Philippine Women's University, Philippines",
      profile: "",
    },
    {
      name: "Dr Dharm Singh",
      designation:
        "Professor, Namibia University of Science and Technology, Namibia",
      profile: "",
    },
    {
      name: "Dr Divya Chaudhary",
      designation: "Assistant Professor, Northeastern University, Seattle, USA",
      profile: "",
    },
    {
      name: "Dr G R Sinha",
      designation:
        "Professor, Myanmar Institute of Information Technology, Myanmar",
      profile: "",
    },
    {
      name: "Dr Marcin Paprzycki",
      designation: "Professor, IBSPAN Warsaw, Poland",
      profile: "",
    },
    {
      name: "Dr Rabia Mushkbar",
      designation:
        "Associate Professor, COMSATS University Islamabad, Pakistan",
      profile: "",
    },
    {
      name: "Dr Rajkumar Buyya",
      designation: "Professor, University of Melbourne, Australia",
      profile: "",
    },
    {
      name: "Dr Sapna Gambhir",
      designation: "Associate Professor, George Mason University, USA",
      profile: "",
    },
    {
      name: "Dr Vibhor Kumar",
      designation: "Researcher, Texas A&M University, USA",
      profile: "",
    },
    {
      name: "Dr Wanlei Zhou",
      designation: "Professor, University of Technology Sydney, Australia",
      profile: "",
    },
    {
      name: "Dr Weiwei Jiang",
      designation:
        "Professor, Beijing University of Posts and Telecommunications, China",
      profile: "",
    },
    {
      name: "Dr Abhinav Dhall",
      designation:
        "Associate Professor, IIT Ropar; Flinders University, Australia",
      profile: "",
    },
    {
      name: "Dr Akshar Patel",
      designation:
        "Department of Computer Science, City College of New York, USA",
      profile: "",
    },
    {
      name: "Dr Anita Venugopal",
      designation: "Faculty Member, Dhofar University, Oman",
      profile: "",
    },
    {
      name: "Marcin Paprzycki",
      designation: "Faculty Member, IBSPAN, Warsaw, Poland",
      profile: "",
    },
    {
      name: "Nana Yaw Duodu",
      designation: "Faculty Member, Accra Technical University, Ghana",
      profile: "",
    },
    {
      name: "Prof (Dr) Mohammed Zakariah",
      designation: "Professor, King Saud University, Riyadh, Saudi Arabia",
      profile: "",
    },
    {
      name: "Sakthivel V",
      designation:
        "Faculty Member, Konkuk Aerospace Design-Airworthiness Institute, Konkuk University, South Korea",
      profile: "",
    },

    // India
    {
      name: "Dr Giri Yogeshwari L.",
      designation: "Professor, Amrita Vishwa Vidyapeetham, Coimbatore, India",
      profile: "",
    },
    {
      name: "Dr Hukam Saini",
      designation:
        "Associate Professor, Computer Science & Engineering, Jagannath University, India",
      profile: "",
    },
    {
      name: "Dr A K Daniel",
      designation: "Professor, MJP Rohilkhand University, Bareilly, India",
      profile: "",
    },
    {
      name: "Dr A Mansurali",
      designation:
        "Assistant Professor, Central University of Tamil Nadu, India",
      profile: "",
    },
    {
      name: "Dr A Sampath Dakshina Murthy",
      designation: "Faculty Member, Vignan's VITU, Visakhapatnam, India",
      profile: "",
    },
    {
      name: "Dr Aastha Joshi",
      designation: "Assistant Professor, Manipal University Jaipur, India",
      profile: "",
    },
    {
      name: "Dr Abhay Bansal",
      designation: "Professor, Amity University, Noida, India",
      profile: "",
    },
    {
      name: "Dr Abhay Kumar Singh",
      designation: "Professor, National Institute of Technology, Patna, India",
      profile: "",
    },
    {
      name: "Dr Abhinava Tripathi",
      designation: "Associate Professor, IIM Lucknow, India",
      profile: "",
    },
    {
      name: "Dr Abhishek Bansal",
      designation: "Associate Professor, IPU Engineering College, Delhi, India",
      profile: "",
    },
    {
      name: "Dr Aditi Sharan",
      designation: "Professor, Jawaharlal Nehru University, Delhi, India",
      profile: "",
    },
    {
      name: "Dr Aditya Khamparia",
      designation:
        "Associate Professor, Babasaheb Bhimrao Ambedkar University, Lucknow, India",
      profile: "",
    },
    {
      name: "Dr Alok Aggarwal",
      designation: "Associate Professor, NIT Kurukshetra, India",
      profile: "",
    },
    {
      name: "Dr Amit Chandak",
      designation: "Faculty Member, IPS Academy, Indore, India",
      profile: "",
    },
    {
      name: "Dr Amit Dhar",
      designation: "Assistant Professor, SVPM College, India",
      profile: "",
    },
    {
      name: "Dr Anand Gupta",
      designation: "Associate Professor, NSUT, New Delhi, India",
      profile: "",
    },
    {
      name: "Dr Ananthasai Somasi",
      designation: "Assistant Professor, SVPM College of Engineering, India",
      profile: "",
    },
    {
      name: "Dr Anshul Verma",
      designation: "Assistant Professor, Banaras Hindu University, India",
      profile: "",
    },
    {
      name: "Dr Anu G Thomas",
      designation:
        "Associate Professor, College of Engineering Trivandrum, Kerala, India",
      profile: "",
    },
    {
      name: "Dr Anuj Grover",
      designation: "Associate Professor, IIT Delhi, India",
      profile: "",
    },
    {
      name: "Dr Arun Kumar",
      designation: "Associate Professor, NIT Hamirpur, India",
      profile: "",
    },
    {
      name: "Dr Arun Kumar Singh",
      designation: "Assistant Professor, Galgotias University, India",
      profile: "",
    },
    {
      name: "Dr Ashima Rani",
      designation: "Associate Professor, SGT University, India",
      profile: "",
    },
    {
      name: "Dr Ashima Singh",
      designation: "Assistant Professor, Thapar University, Patiala, India",
      profile: "",
    },
    {
      name: "Dr Ashish Sharma",
      designation: "Professor, RTU Kota, India",
      profile: "",
    },
    {
      name: "Dr Ashok Yadav",
      designation:
        "Associate Professor, Dayalbagh Educational Institute, Agra, India",
      profile: "",
    },
    {
      name: "Dr Ashutosh Kumar Singh",
      designation: "Professor, GGSIPU Delhi, India",
      profile: "",
    },
    {
      name: "Dr Ashwin Dobariya",
      designation: "Professor, Marwadi University, Rajkot, India",
      profile: "",
    },
    {
      name: "Dr Atul Gonsai",
      designation: "Associate Professor, Saurashtra University, Rajkot, India",
      profile: "",
    },
    {
      name: "Dr Awadhesh Kumar",
      designation: "Professor, NIT Kurukshetra, India",
      profile: "",
    },
    {
      name: "Dr B Subbulakshmi",
      designation: "Faculty Member, Patrician College, Chennai, India",
      profile: "",
    },
    {
      name: "Dr Bharat Bhushan Sagar",
      designation: "Professor, BIT Mesra, Ranchi, India",
      profile: "",
    },
    {
      name: "Dr Bhupesh Rawat",
      designation: "Associate Professor, DIT University, Dehradun, India",
      profile: "",
    },
    {
      name: "Dr Brij Gupta",
      designation: "Professor, NIT Kurukshetra, India",
      profile: "",
    },
    {
      name: "Dr Chandra Prakash",
      designation: "Associate Professor, NIT Hamirpur, India",
      profile: "",
    },
    {
      name: "Dr Charanjeet Singh",
      designation:
        "Assistant Professor, GGNI Management & Technology, Ludhiana, India",
      profile: "",
    },
    {
      name: "Dr Debasish Jena",
      designation: "Professor, NIT Rourkela, India",
      profile: "",
    },
  ];

  const workshopChairs = [
    {
      name: "Marcin Paprzycki",
      designation: "Professor, Warsaw Management University, Poland",
      profile: "",
    },
  ];

  const workshopCoChairs = [
    {
      name: "Dr. Anil Kumar",
      designation:
        "Head of Department, Poornima Institute of Engineering & Technology, Jaipur",
      profile: "",
    },
  ];

  const tutorialChairs = [
    {
      name: "Maria Ganzha",
      designation:
        "System Research Institute, Polish Academy of Sciences, Poland",
      profile: "",
    },
  ];

  const tutorialCoChairs = [
    {
      name: "Uday Pratap Singh",
      designation: "Poornima Institute of Engineering and Technology, Jaipur",
      profile: "",
    },
  ];

  const programConductionChair = [
    {
      name: "Vivek Saxena",
      designation: "Poornima Institute of Engineering and Technology, Jaipur",
      profile: "",
    },
  ];

  const registrationChair = [
    {
      name: "Bersha Kumari",
      designation: "Poornima Institute of Engineering and Technology, Jaipur",
      profile: "",
    },
  ];

  const publicationsMediaCommittee = [
    {
      name: "Shalini Chaudhary",
      designation: "Poornima Institute of Engineering and Technology, Jaipur",
      profile: "",
    },
  ];

  const financialChair = [
    {
      name: "Mr. M.K.M. Shah",
      designation:
        "Director Admin & Finance, Poornima Group of Colleges, Jaipur",
      profile: "",
    },
  ];

  const organizingCommittee = [
    {
      name: "Ms. Jayshree Surolia",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Ms. Ashima Tiwari",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Ms. Shikha Gautam",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Mr. Abhishek Dadhich",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Mr. Vikas Kumar",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Ms. Alka Rani",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Ms. Bhawna Kumari",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Ms. Smita Bisht",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Mr. Punit Kumawat",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Mr. Anurag Anand Dubey",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Mr. Mohnish Sachdeva",
      designation: "PIET, Jaipur",
      profile: "",
    },
    {
      name: "Mr. Indra Kishor",
      designation: "PIET, Jaipur",
      profile: "",
    },
  ];

  const committees = [
    { title: "Chief Patrons", members: chiefPatrons },
    { title: "Patrons", members: patrons },
    { title: "General Chair", members: generalChair },
    { title: "General Co-Chairs", members: generalCoChair },
    { title: "Steering Committee", members: SteeringCommittee },
    { title: "Advisory Committee", members: advisoryCommittee },
    { title: "Technical Program Committee", members: technicalProgramCommittee },
    { title: "Workshop Chairs", members: workshopChairs },
    { title: "Workshop Co-Chairs", members: workshopCoChairs },
    { title: "Tutorial Chairs", members: tutorialChairs },
    { title: "Tutorial Co-Chairs", members: tutorialCoChairs },
    { title: "Program Conduction Chair", members: programConductionChair },
    { title: "Registration Chair", members: registrationChair },
    {title: "Publications & Media Committee", members: publicationsMediaCommittee },
    { title: "Financial Chair", members: financialChair },
    { title: "Organizing Committee", members: organizingCommittee },
  ];

  return (
    <div className="mx-4">
      <Head>
        <title>
          Committees- ICIMMI - International conference on information
          management & machine intelligence
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>

      <Schedule />

      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      {committees.map((section, sIndex) => (
        <div className="my-12" key={sIndex}>
          <h1 className="heading my-2 text-sm font-bold lg:text-2xl">
            {section.title}
          </h1>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.members.map((item, index) => (
              <li
                key={index}
                className="divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="flex items-center space-x-4 p-6">
                  {/* Avatar */}
                  <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-full bg-[#1a1212] font-semibold text-white">
                    {item.name.charAt(0)}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    {item?.profile ? (
                      <Link href={item.profile} target="_blank">
                        <h3 className="text-sm font-medium text-gray-900 underline lg:text-lg">
                          {item.name}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-sm font-medium text-gray-900 lg:text-lg">
                        {item.name}
                      </h3>
                    )}

                    <p className="mt-1 text-sm text-gray-500">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Sponsored />
    </div>
  );
}

export default Committe;
