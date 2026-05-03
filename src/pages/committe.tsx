import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import { title } from "process";
import React from "react";

function Committe() {
  const cheifPatrons = [
    {
      name: "Mr. Shashikant Singhi",
      designation: "Chairman, Poornima Foundation, Jaipur, India",
      profile: "#",
    },
  ];
  const steeringCommittee = [
    {
      name: "Dr. Valentina E. Balas",
      designation: "Professor, Department of Automatics, Romania",
      profile: "#",
    },
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur, India",
      profile: "#",
    },
    {
      name: "Dr. Veerpratap Meena",
      designation:
        "Professor, National Institute of Technology (NIT), Jamshedpur",
      profile: "#",
    },
  ];

  const generalChair = [
    {
      name: "Dr. Dinesh Goyal",
      designation:
        "Professor, Computer Science, Principal, Poornima Institute of Engineering and Technology, Sitapura, Jaipur, Rajasthan, India",
      profile: "#",
    },
    {
      name: "Prof. Dharam Singh Jat",
      designation: "Namibia University of Science & Tech., Namibia",
      profile: "#",
    },
  ];
  const conferenceChairs = [
    {
      name: "Dr. Anil Kumar",
      designation:
        "Professor & Head, Department of Computer Engineering, Poornima Institute of Engineering and Technology, Sitapura, Jaipur, Rajasthan, India",
      profile: "#",
    },
    {
      name: "Prof. B.B. Gupta",
      designation:
        "Director, Centre for AI & Cyber Security, Asia University, Taiwan",
      profile: "#",
    },
  ];
  const executiveChairs = [
    {
      name: "Dr. Uday Pratap Singh",
      designation:
        "Associate Professor, Dept. of AI & DS, Poornima Institute of Engineering and Technology, Sitapura, Jaipur, Rajasthan, India",
      profile: "#",
    },
    {
      name: "Prof. Marcin Paprzycki",
      designation:
        "System Research Institute, Polish Academy of Sciences, Poland",
      profile: "#",
    },
  ];

  const technialProgramChairs = [
    {
      name: "Prof (Dr) Bhim Singh",
      designation:
        "SERB National Science Chair and Professor Emeritus, IIT Delhi, Delhi",
      profile: "#",
    },
    {
      name: "Mr. Deepak Mathur",
      designation: "Vice President, IEEE MGA",
      profile: "#",
    },
    {
      name: "Prof (Dr) M N Hoda",
      designation:
        "Chairperson, IEEE Delhi Section and Director, Bharati Vidyapeeth's Institute of Computer Applications and Management, Delhi",
      profile: "#",
    },
    {
      name: "Prof (Dr) Prerna Gaur",
      designation: "Chair, IEEE India Council and Director, NSUT, New Delhi",
      profile: "#",
    },
    {
      name: "Prof (Dr.) Rajnish Sharma",
      designation: "Vice Chancellor, Chitkara University",
      profile: "#",
    },
    {
      name: "Prof (Dr.) Preeti Bajaj",
      designation: "Chair Elect, IEEE India Council",
      profile: "#",
    },
    {
      name: "Prof (Dr.) Jasdeep Kaur Dhanoa",
      designation:
        "Dean - Training & Placement and Alumni Affairs, Professor, Dept of ECE, Indira Gandhi Delhi Technical University for Women",
      profile: "#",
    },
    {
      name: "Prof (Dr) Deepti Gupta",
      designation: "Professor, IIT Bombay, Mumbai",
      profile: "#",
    },
    {
      name: "Prof (Dr) Arpan K Kar",
      designation: "Professor, IIT Delhi, New Delhi",
      profile: "#",
    },
    {
      name: "Prof (Dr) B Balamurugan",
      designation: "Professor and Dean Academics, Shiv Nadar University, Noida",
      profile: "#",
    },
    {
      name: "Prof (Dr) Mangey Ram",
      designation:
        "Professor and Dean (Research and Collaborations), Graphic Era University, Dehradun",
      profile: "#",
    },
    {
      name: "Mr. Sanjay Jain",
      designation: "Head of Google for Education, Google India",
      profile: "#",
    },
    {
      name: "Mr. Anil Kumar Saini",
      designation: "Scientist, CEERI, Pilani",
      profile: "#",
    },
    {
      name: "Prof (Dr) Amrita Rai",
      designation:
        "Professor, Galgotias College of Engineering & Technology, Greater Noida",
      profile: "#",
    },
    {
      name: "Dr. Abhilasha Rakesh Vyas",
      designation:
        "Business and Technology Associate Delivery Manager, Accenture, India and Co-Convener, Women in Tech Wing, GESIA IT Association, Ahmedabad, Gujarat",
      profile: "#",
    },
    {
      name: "Dr. Deepak Garg",
      designation: "Professor and Vice Chancellor, SR University",
      profile: "#",
    },
    {
      name: "Dr. Nishcal Verma",
      designation:
        "Professor, Department of Electrical Engineering, IIT Kanpur",
      profile: "#",
    },
  ];

  const technialProgramCommittee = [
    {
      name: "Dr Sapna Gambhir",
      designation: "Associate Professor, George Mason University, USA",
      profile: "#",
    },
    {
      name: "Dr Vibhor Kumar",
      designation:
        "Researcher, Texas A&M University, College Station, Texas, USA",
      profile: "#",
    },
    {
      name: "Dr Wanlei Zhou",
      designation: "Professor, University of Technology Sydney, Australia",
      profile: "#",
    },
    {
      name: "Dr Weiwei Jiang",
      designation:
        "Professor, Beijing University of Posts and Telecommunications, China",
      profile: "#",
    },
    {
      name: "Dr Abhinav Dhall",
      designation:
        "Associate Professor, IIT Ropar; Flinders University, Adelaide, Australia",
      profile: "#",
    },
    {
      name: "Dr Akshar Patel",
      designation:
        "Department of Computer Science, City College of New York, USA",
      profile: "#",
    },
    {
      name: "Dr Anita Venugopal",
      designation: "Faculty Member, Dhofar University, Oman",
      profile: "#",
    },
    {
      name: "Marcin Paprzycki",
      designation: "Faculty Member, IBSPAN, Warsaw, Poland",
      profile: "#",
    },
    {
      name: "Nana Yaw Duodu",
      designation: "Faculty Member, Accra Technical University, Ghana",
      profile: "#",
    },
    {
      name: "Prof (Dr) Mohammed Zakariah",
      designation: "Professor, King Saud University, Riyadh, Saudi Arabia",
      profile: "#",
    },
    {
      name: "Sakthivel V",
      designation:
        "Faculty Member, Konkuk Aerospace Design-Airworthiness Institute, Konkuk University, South Korea",
      profile: "#",
    },

    // India
    {
      name: "Dr K K Pattanaik",
      designation: "Professor, IIITM Gwalior, India",
      profile: "#",
    },
    {
      name: "Dr K Saravanan",
      designation: "Professor, VIT Chennai, India",
      profile: "#",
    },
    {
      name: "Dr Kalaiyarasan A",
      designation: "Faculty Member, Muthayammal Engineering College, India",
      profile: "#",
    },
    {
      name: "Dr Kalpna Srivastava",
      designation: "Professor, Poornima University Jaipur, India",
      profile: "#",
    },
    {
      name: "Dr Kamlesh Dutta",
      designation: "Professor, NIT Hamirpur, India",
      profile: "#",
    },
    {
      name: "Dr Kamlesh Kumar Verma",
      designation: "Assistant Professor, Bundelkhand University Jhansi, India",
      profile: "#",
    },
    {
      name: "Dr Kandula Damodhar Rao",
      designation:
        "Faculty Member, Sreenidhi Institute of Science and Technology, India",
      profile: "#",
    },
    {
      name: "Dr Karm Veer Arya",
      designation: "Professor, IIITM Gwalior, India",
      profile: "#",
    },
    {
      name: "Dr Karthikeyan R",
      designation:
        "Faculty Member, SRM Arts and Science College Kattankulathur, India",
      profile: "#",
    },
    {
      name: "Dr Kiran Jyoti",
      designation: "Professor, GNDU Amritsar, India",
      profile: "#",
    },
    {
      name: "Dr Kumod Kumar Gupta",
      designation: "Assistant Professor, NIET Noida, India",
      profile: "#",
    },
    {
      name: "Dr Lalit Mohan Goyal",
      designation:
        "Professor, Maharaja Surajmal Institute of Technology Delhi, India",
      profile: "#",
    },
    {
      name: "Dr Lalita Kumari",
      designation: "Faculty Member, Amity University Patna, India",
      profile: "#",
    },
    {
      name: "Dr M Anandaraj",
      designation:
        "Faculty Member, PSNA College of Engineering and Technology, India",
      profile: "#",
    },
    {
      name: "Dr M Kamatchi Hariharan",
      designation:
        "Assistant Professor (SG), Sri Ramakrishna Engineering College, India",
      profile: "#",
    },
    {
      name: "Dr Mahesh Kumar Porwal",
      designation: "Professor, Poornima University Jaipur, India",
      profile: "#",
    },
    {
      name: "Dr Manoj K Singh",
      designation: "Associate Professor, Bennett University, India",
      profile: "#",
    },
    {
      name: "Dr Manoj Kumar Gupta",
      designation: "Professor, Amity University Noida, India",
      profile: "#",
    },
    {
      name: "Dr Manoj Tyagi",
      designation:
        "Associate Professor, JSS Academy of Technical Education Noida, India",
      profile: "#",
    },
    {
      name: "Dr Mausumi Goswami",
      designation: "Associate Professor, Jadavpur University Kolkata, India",
      profile: "#",
    },
    {
      name: "Dr Meenu Gupta",
      designation: "Professor, Chandigarh University Mohali, India",
      profile: "#",
    },
    {
      name: "Dr Mohamed Najmus Saqhib",
      designation:
        "Faculty Member, Don Bosco Institute of Technology Bengaluru, India",
      profile: "#",
    },
    {
      name: "Dr Mohd Rizwan Beg",
      designation: "Associate Professor, Al-Falah University Faridabad, India",
      profile: "#",
    },
    {
      name: "Dr Mohit Rathee",
      designation: "Assistant Professor, NIT Delhi, India",
      profile: "#",
    },
    {
      name: "Dr Mridula Dwivedi",
      designation: "Professor, AIIMS Delhi, India",
      profile: "#",
    },
    {
      name: "Dr N Md Jubair Basha",
      designation:
        "Faculty Member, Kallam Haranadhareddy Institute of Technology, India",
      profile: "#",
    },
    {
      name: "Dr N Rajesh",
      designation:
        "Professor, KPR Institute of Engineering and Technology, Coimbatore, India",
      profile: "#",
    },
    {
      name: "Dr Namita Mittal",
      designation: "Professor, MNIT Jaipur, India",
      profile: "#",
    },
    {
      name: "Dr Namrata Dhanda",
      designation: "Professor, Amity University UP, India",
      profile: "#",
    },
    {
      name: "Dr Navdeep Dhaliwal",
      designation: "Associate Professor, MCM College Chandigarh, India",
      profile: "#",
    },
    {
      name: "Dr Naveen Sharma",
      designation:
        "Assistant Professor, Mechanical Engineering, NSUT New Delhi, India",
      profile: "#",
    },
    {
      name: "Dr Navneet Kaur",
      designation: "Associate Professor, Thapar University Patiala, India",
      profile: "#",
    },
    {
      name: "Dr Neelu Singh",
      designation: "Faculty Member, LNCT MCA Bhopal, India",
      profile: "#",
    },
    {
      name: "Dr Neeraj Tiwari",
      designation: "Associate Professor, Poornima University Jaipur, India",
      profile: "#",
    },
    {
      name: "Dr Neetesh Kumar",
      designation: "Associate Professor, IIT Roorkee, India",
      profile: "#",
    },
    {
      name: "Dr Nidhi Arora",
      designation: "Professor, MRIIRS Faridabad, India",
      profile: "#",
    },
    {
      name: "Dr Nihar Ranjan Roy",
      designation:
        "Associate Professor and Head, CSE, Vivekanand Institute of Professional Studies, India",
      profile: "#",
    },
    {
      name: "Dr Nishchol Mishra",
      designation: "Professor, MANIT Bhopal, India",
      profile: "#",
    },
    {
      name: "Dr Nithyanandh Selvam",
      designation:
        "Faculty Member, PSG College of Arts & Science Coimbatore, India",
      profile: "#",
    },
    {
      name: "Dr Niyaz Hussain A M J",
      designation: "Associate Dean, Mohan Babu University Tirupati, India",
      profile: "#",
    },
    {
      name: "Dr P Ashok",
      designation:
        "Faculty Member, Symbiosis Institute of Digital and Telecom Management Pune, India",
      profile: "#",
    },
    {
      name: "Dr P Senthilraj",
      designation: "Faculty Member, University of Madras Chennai, India",
      profile: "#",
    },
    {
      name: "Dr P Sivaprakash",
      designation:
        "Faculty Member, Rathinam Technical Campus Coimbatore, India",
      profile: "#",
    },
    {
      name: "Dr P Vanajakshi",
      designation: "Faculty Member, Sapthagiri NPS University Bengaluru, India",
      profile: "#",
    },
    {
      name: "Dr Pavan Kumar Mishra",
      designation: "Associate Professor, Banaras Hindu University, India",
      profile: "#",
    },
    {
      name: "Dr Pooja Khanna",
      designation: "Assistant Professor, IILM University Gurugram, India",
      profile: "#",
    },
    {
      name: "Dr Prabhat Kumar",
      designation: "Associate Professor, CDAC Noida, India",
      profile: "#",
    },
    {
      name: "Dr Pramod Kumar Goyal",
      designation: "Associate Professor, JECRC University Jaipur, India",
      profile: "#",
    },
    {
      name: "Dr Pramod Singh Rathore",
      designation: "Associate Professor, JECRC University Jaipur, India",
      profile: "#",
    },
    {
      name: "Dr Prasenjit Chatterjee",
      designation: "Professor, MCKV Institute of Engineering Kolkata, India",
      profile: "#",
    },
    {
      name: "Dr Prashant Sharma",
      designation: "Associate Professor, NIT Raipur, India",
      profile: "#",
    },
    {
      name: "Dr Prateek Kulshrestha",
      designation: "Assistant Professor, NIT Uttarakhand, India",
      profile: "#",
    },
    {
      name: "Dr Praveen Gupta",
      designation:
        "Faculty Member, Acropolis Institute of Technology and Research, India",
      profile: "#",
    },
    {
      name: "Dr Preeti Bajaj",
      designation:
        "Professor, Yeshwantrao Chavan College of Engineering Nagpur, India",
      profile: "#",
    },
    {
      name: "Dr Priyanka Makkar",
      designation: "Assistant Professor, Chitkara University Punjab, India",
      profile: "#",
    },
    {
      name: "Dr Pushpinder Singh",
      designation: "Professor, Thapar University Patiala, India",
      profile: "#",
    },
  ];

  const advisoryCommittee = [
    {
      name: "Dr. Carlos M. Travieso-Gonzalez",
      designation:
        "Professor, Signals and Communication Department, University of Las Palmas de Gran Canaria, Spain",
      profile: "#",
    },
    {
      name: "Dr. Wan Young Chung",
      designation:
        "Department of AI Convergence & Electronic Engineering, Pukyong National University, South Korea",
      profile: "#",
    },
    {
      name: "Dr Marta Zurek-Mortka",
      designation:
        "Head of Mechatronics and Prototyping Centre, Lukasiewicz Research Network, Poland",
      profile: "#",
    },
    {
      name: "Dr. Abhishek Mukherji",
      designation:
        "AI/ML Thought Leader | Data Storyteller | Mentor | Inventor | Senior Member IEEE, Centific",
      profile: "#",
    },
    {
      name: "Prof (Dr) Uma Jha",
      designation:
        "Senior IEEE Fellow and Professor of Practice, University of Florida, USA",
      profile: "#",
    },
    {
      name: "Prof (Dr) Wen-Cheng Lai",
      designation: "Professor, Ming Chi University of Technology, Taiwan",
      profile: "#",
    },
    {
      name: "Prof (Dr.) Shipra Suman",
      designation: "Professor, University of London, United Kingdom",
      profile: "#",
    },
    {
      name: "Dr. Ali Al-Sherbaz",
      designation:
        "Academic Director (Digital Skills), University of Cambridge",
      profile: "#",
    },
    {
      name: "Dr. Ramesh C. Bansal",
      designation: "Professor, University of Sharjah; University of Pretoria",
      profile: "#",
    },
    {
      name: "Dr. Ravi Kumar Arya",
      designation: "Director, Xiangshan Laboratory Wireless Group, China",
      profile: "#",
    },
    {
      name: "Prof. Ghanshyam Singh",
      designation:
        "Professor, Electronics and Communication Engineering & Director, Center for Smart Information and Communication Systems, South Africa",
      profile: "#",
    },
    {
      name: "Prof (Dr) Prashant Jha",
      designation: "Professor, King’s College London, UK",
      profile: "#",
    },
    {
      name: "Prof (Dr) John Martin",
      designation: "Professor, Jazan University, Saudi Arabia",
      profile: "#",
    },
    {
      name: "Prof (Dr) Madan Singh",
      designation: "Professor, National University of Lesotho, Southern Africa",
      profile: "#",
    },
    {
      name: "Prof. Kokou Yetongnon",
      designation: "Professor, University of Bourgogne, France",
      profile: "#",
    },
    {
      name: "Dr. Arindam Pal",
      designation:
        "Director, Data Science and Optimization, Optym Bengaluru; Conjoint Senior Lecturer, University of New South Wales, Australia",
      profile: "#",
    },
    {
      name: "Dr. Jae Yeon Park",
      designation:
        "Senior Researcher, Korea Atomic Energy Research Institute, South Korea",
      profile: "#",
    },
    {
      name: "Dr. George Tsaramirsis",
      designation: "Professor, University of Wollongong in Dubai, Saudi Arabia",
      profile: "#",
    },
    {
      name: "Dr. Saurabh Sinha",
      designation: "Professor, University of Canterbury, New Zealand",
      profile: "#",
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor (AI), University of Johannesburg, South Africa",
      profile: "#",
    },
    {
      name: "Dr. William Puech",
      designation: "Professor, University Montpellier, France",
      profile: "#",
    },
    {
      name: "Dr. Youcef Soufi Mail",
      designation: "Professor, University of Tebessa, Algeria",
      profile: "#",
    },
    {
      name: "Dr. Li Zhiwu",
      designation:
        "Professor, Macau University of Science and Technology, China",
      profile: "#",
    },
    {
      name: "Dr. Armin Aberle",
      designation: "SERIS, National University of Singapore",
      profile: "#",
    },
    {
      name: "Dr. Shuliang Wang",
      designation: "Beijing Institute of Technology, China",
      profile: "#",
    },
    {
      name: "Mr. Ashutosh Dutta",
      designation: "Senior Scientist & 5G Chief Strategist, Johns Hopkins",
      profile: "#",
    },
    {
      name: "Mr. Vijay Raghunathan",
      designation: "Professor of Practice, UC San Diego; Former CTO, Broadcom",
      profile: "#",
    },
    {
      name: "Dr. Badrul Hisham Ahmad",
      designation: "Professor, UTeM, Malaysia",
      profile: "#",
    },
    {
      name: "Dr. Xiao Zhi Gao",
      designation: "Professor, LUT University, Finland",
      profile: "#",
    },
    {
      name: "Dr. Ghasi Ram Verma",
      designation: "Professor, University of Rhode Island, USA",
      profile: "#",
    },
    {
      name: "Dr. Ankit Agarwal",
      designation: "Professor, Northernwest University, USA",
      profile: "#",
    },
  ];

  const conveners = [
    {
      name: "Dr. Budesh Kanwar",
      designation: "Professor, Department of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Sama Jain",
      designation: "Professor, Department of Chemistry, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Payal Bansal",
      designation: "Professor, Department of IoT, PIET, Jaipur",
      profile: "#",
    },
  ];

  const conferenceSecretaries = [
    {
      name: "Dr. Mahak Bhatia",
      designation:
        "Assistant Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ms. Bersha Kumari",
      designation: "Assistant Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Mr. Vivek Saxena",
      designation: "Assistant Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
  ];

  const technicalProgramChairsPIET = [
    {
      name: "Dr. Nitin Mukesh Mathur",
      designation:
        "Associate Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Shipra Bhatia",
      designation: "Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Ebstam Siddiqui",
      designation: "Professor, Department of AI & DS, PIET, Jaipur",
      profile: "#",
    },
  ];

  const financeCommittee = [
    {
      name: "Dr. Balwan Shesham",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Omprakash Sikhwal",
      designation: "Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Mr. Abhishek Dadhich",
      designation: "Assistant Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Shruti Thapar",
      designation: "Associate Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
  ];

  const publicationChairs = [
    {
      name: "Dr. Rajendra Singh",
      designation:
        "Associate Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Shruti Gupta",
      designation: "Assistant Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Indra Kishor",
      designation: "Assistant Professor, Department of CSE, PIET, Jaipur",
      profile: "#",
    },
  ];

  const publicityChairs = [
    {
      name: "Dr. Krati Sharma",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Neetu Sharma",
      designation:
        "Associate Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Nupur Jain",
      designation:
        "Associate Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Prince Dawar",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const steeringCommitteePIET = [
    {
      name: "Dr. Aisha Rafi",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Amit Shrivastava",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Mukesh Chandra",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Rekha Rani Agarwal",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const workshopCommittee = [
    {
      name: "Dr. Mari Ganza",
      designation:
        "System Research Institute, Polish Academy of Sciences, Poland",
      profile: "#",
    },
    {
      name: "Dr. Ashish Laddha",
      designation:
        "Associate Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const tutorialCommittee = [
    {
      name: "Prof. Sheng-Lung Peng",
      designation:
        "Department of Creative Technologies and Product Design, National Taipei University of Business, Taiwan",
      profile: "#",
    },
    {
      name: "Dr. Priya Mathur",
      designation: "Professor, Department of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const registrationCommittee = [
    {
      name: "Punit Kumar",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Anurag Anand Duvey",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Mohnish Sachdeva",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Kamal Saini",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ms. Rekha Dhivrani",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Smriti Verma",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
  ];

  const financeSubCommittee = [
    {
      name: "Vaibhav Shekhawat",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dinesh Bhatia",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Naveen Porwal",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Aniva Sharma",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Sharad Shrivastava",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const publicationCommittee = [
    {
      name: "Dr. Priya Mathur",
      designation: "Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Bharat Thathera",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Neha Srivastava",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Rimjhim Jain",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ms. Charul Bapna",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Vishnu Prakash Sharma",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const publicityCommittee = [
    {
      name: "Priya Verma",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Vikas Kumar",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
  ];

  const logisticCommittee = [
    {
      name: "Udbhav Ojha",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Nitin Phulwani",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Sanjay Kumar Sinha",
      designation: "Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ms. Bhawana Kumari",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
  ];

  const websiteSocialMediaCommittee = [
    {
      name: "Girdhari Lal",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Lakhan Bhaskar Kadel",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Robin Prakash",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Vishal Rohela",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Shiv Prakash Dadhich",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const hospitalityCommittee = [
    {
      name: "Krishna Gupta",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Pragya Bharti",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ashok Kumar",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ms. Anamika Soni",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Shamal Burman",
      designation:
        "Assistant Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const industryCommittee = [
    {
      name: "Dr. Navin Kumar Goyal",
      designation: "Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Mukul Nama",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Rohit Kumar",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
  ];

  const eventManagementCommittee = [
    {
      name: "Smita Bisht",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ashima Tiwari",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Garima Kachhara",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Arvind Mathur",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Ms. Bhawana Purohit",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
  ];

  const technicalContentCommittee = [
    {
      name: "Dr. Ebtasam Ahmad Siddiqui",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Aisha Rafi",
      designation: "Assistant Professor, Dept. of AI & DS, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Rekha Rani Agarwal",
      designation: "Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];
  const graphicsPrintingCommittee = [
    {
      name: "Shivani Sharma",
      designation: "Assistant Professor, Dept. of CSE, PIET, Jaipur",
      profile: "#",
    },
    {
      name: "Dr. Nupur Jain",
      designation:
        "Associate Professor, Dept. of Applied Sciences, PIET, Jaipur",
      profile: "#",
    },
  ];

  const committees = [
    { title: "Chief Patron", members: cheifPatrons },
    { title: "Steering Committee Chair", members: steeringCommittee },
    { title: "General Chair", members: generalChair },
    { title: "Conference Chair", members: conferenceChairs },
    { title: "Executive Chair", members: executiveChairs },
    { title: "Technical Program Chair", members: technialProgramChairs },
    { title: "Technical Program Committee", members: technialProgramCommittee },
    { title: "Advisory Committee", members: advisoryCommittee },
    { title: "Conveners", members: conveners },
    { title: "Conference Secretaries", members: conferenceSecretaries },
    {
      title: "Technical Program Chairs (PIET)",
      members: technicalProgramChairsPIET,
    },
    { title: "Finance Chair", members: financeCommittee },
    { title: "Publication Chairs", members: publicationChairs },
    { title: "Publicity Chairs", members: publicityChairs },
    { title: "Steering Committee (PIET)", members: steeringCommitteePIET },
    { title: "Workshop Committee", members: workshopCommittee },
    { title: "Tutorial Committee", members: tutorialCommittee },
    { title: "Registration Committee", members: registrationCommittee },
    { title: "Finance Committee", members: financeSubCommittee },
    { title: "Publication Committee", members: publicationCommittee },
    { title: "Publicity Committee", members: publicityCommittee },
    { title: "Logistic Committee", members: logisticCommittee },
    {
      title: "Website & Social Media Committee",
      members: websiteSocialMediaCommittee,
    },
    {
      title: "Hospitality & Accommodation Committee",
      members: hospitalityCommittee,
    },
    {
      title: "Industry Collaboration and Sponsorship Committee",
      members: industryCommittee,
    },
    { title: "Event Management Committee", members: eventManagementCommittee },
    {
      title: "Technical Content Committee",
      members: technicalContentCommittee,
    },
    {
      title: "Graphics and Printing Committee",
      members: graphicsPrintingCommittee,
    },
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
