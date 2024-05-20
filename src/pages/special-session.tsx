import Schedule from '@/components/schedule'
import Image from 'next/image';
import React from 'react'

function SpecialSession() {
    const track1 = [
        {
            name: "Dr. A. Suresh",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Hari_Mohan.png"
        },
        {
            name: "Dr R Udendhran",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Kaustubh.jpg"
        }
    ];
    const track2 = [
        {
            name: "Dr. Hari Mohan Rai",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Hari_Mohan.png"
        },
        {
            name: "Dr. Kaustubh Kumar Shukla",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Udendhran.jpg"
        }
    ];
    const track3 = [
        {
            name: "Dr A Mansurali",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Mansurali.jpg"
        },
        {
            name: "Dr Manikandan Rajagopal",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Manikandan.jpg"
        }
    ];
    const track4 = [
        {
            name: "DR.K.Kalaiselvi",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Kalaiselvi.jpg"
        },
        {
            name: "Dr.D.Karthika",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Karthika.png"
        }
    ];
    const track5 = [
        {
            name: "Shalli Rani",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Shall.jpg"
        },
        {
            name: "Dr. Divya Gupta",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Divya.jpg"
        }
    ];
    const track6 = [
        {
            name: "Dr. Aarti Chugh",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Aarti.jpg"
        },
        {
            name: "Ashima Rani",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Ashima.jpg"
        },
        {
            name: "Dr. Nisha Charaya",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Nisha.png"
        }
    ];
    const track7 = [
        {
            name: "Rajesh Kumar Tyagi",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Rajesh.png"
        },
        {
            name: "Priyanka Vashisht",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Priyanka.jpg"
        }
    ];
    const track8 = [
        {
            name: "Dr. Hari Mohan RaiDr.Neeraj Kumar Singh",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Hari_Mohan.png"
        },
        {
            name: "Pradeep Kumar Sharma",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Pradeep.png"
        }
    ];
    const track9 = [
        {
            name: "Dr Juhi Singh",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Juhi.jpg"
        },
        {
            name: "Dr Arun Kumar Singh",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Arun.jpg"
        }
    ];
    const track10 = [
        {
            name: "Dr.Sharmila",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Sharmila.jpg"
        },
        {
            name: "Arathy Rajeev",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Arathy.jpg"
        }
    ];
    const track11 = [
        {
            name: "Dr Shweta Sinha",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Shweta.jpg"
        },
        {
            name: "Shishir Singh Chauhan",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Shishir.jpg"
        }
    ];
    const track12 = [
        {
            name: "Samir Ajani",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Samir.jpg"
        },
        {
            name: "Suresh Limkar",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Suresh.jpg"
        }
    ];
    const track13 = [
        {
            name: "Dr Khyati Chopra",
            designation: "(Session Chair)",
            image: "/gallery/special_sessions_old/Khyati.png"
        },
        {
            name: "Dr. Sherin Zafar",
            designation: "(Session Co-Chair)",
            image: "/gallery/special_sessions_old/Sherin.jpg"
        }
    ];
    return (
        <div className='mx-4'>
            <Schedule />
            <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h1 className='text-center'>SPECIAL SESSIONS</h1>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 1: Exploring Optimization Tools and Techniques in Engineering and Technology: Current Trends and Applications
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track1.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 2: Massive IoT Connectivity for Large-Scale Mobile Communications (Dr. A. Suresh)
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track2.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 3: Machine Learning Applications in Business Decision Making
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track3.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 4: Artificial Intelligence and Big Data Analytics
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track4.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    (Session Co-Chair)

                    Track 5: Next-Gen IoT Solutions: Unlocking Possibilities with WSN and Machine

                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track5.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 6: Intelligent Computing in Multidisciplinary Engineering Applications
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track6.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 7: Recent Advancements, Innovations, Future Trends in Emerging Technologies & Their Impacts
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track7.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 8: Security and Privacy in Cloud Computing Implementation (Dr. Neeraj Singh)
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track8.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 9: Blockchain based Digital Image Steganography (Dr Juhi Singh)
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track9.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 10: Emerging Challenges and Opportunities of Advance Technologies and High performance computing for IoT & Image processing (Dr.Sharmila)
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track10.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 11: Security and Privacy in an AI-Driven World (Dr Shweta Sinha)

                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track11.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>
                    Track 12: Recent Trends in AI, Machine Learning and IoT (Dr. Samir Ajani)
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track12.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="my-12">
                <h1 className={"heading my-2 text-sm font-bold lg:text-2xl mb-12"}>Track 13: Industry 5.0 for Smart Technologies Utilizing Artificial Intelligence, Internet of Things and Blockchain
                </h1>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {track13.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                            >
                                <div key={index}
                                    className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <Image src={item.image} className={'h-full w-full object-cover rounded-lg '} alt={item.name} />
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>

                                        <span className={'font-semibold text-lg'}>{item.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{item.designation}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    )
}

export default SpecialSession