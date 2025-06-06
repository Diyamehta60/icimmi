import Head from "next/head";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {
  RiCalendarTodoFill,
  RiFacebookBoxFill,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiTwitterFill,
} from "react-icons/ri";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
import Carousel from "framer-motion-carousel";
import Image from "next/image";
import axios from "axios";
// import EntryModal from "@/components/entryModal";
import Sponsored from "@/components/sponsored";
import Schedule from "@/components/schedule";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Home = () => {
  const [visitorCounter, setVisitorCounter] = useState(20000);

  

  const sliderImages = [
    {
      image: "/clg.jpg",
      id: "e5f6g7h8",
      alt: "",
    },
    {
      image: "/clg2.jpg",
      id: "i9j0k1l2",
      alt: "",
    },
    {
      image: "/clg3.jpg",
      id: "i9j0k1l2",
      alt: "",
    },
  ];
  const logoImages = [
    {
      image: "/gallery/logos/taru.png",
      id: "e5f6g7h8",
      alt: "",
    },
    {
      image: "/gallery/logos/scopus1.png",
      id: "i9j0k1l2",
      alt: "",
    },
    {
      image: "/gallery/logos/icps1.jpg",
      id: "i9j0k1l2",
      alt: "",
    },
  ];

  const fetch = (i: number) => {
    const options = { method: "GET", url: `/api/counter?i=${i}` };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setVisitorCounter(response.data.counter);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastSession = localStorage.getItem("token");
      if (lastSession === null) {
        console.log("null");
        localStorage.setItem("token", Date.now().toString());
        fetch(1);
      } else if (parseInt(lastSession) - Date.now() > 21600000) {
        console.log("expired");
        localStorage.setItem("token", Date.now().toString());
        fetch(1);
      } else {
        console.log("not expired");
        fetch(0);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          ICIMMI - International conference on information management & machine
          intelligence
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <br />
      <main className={"mx-8"}>
        <div
          className={
            "mt-2 grid grid-cols-5 items-center justify-center gap-5 text-center lg:text-start"
          }
        >
          <div
            className={
              "col-span-full flex h-full flex-col justify-between gap-2 self-start lg:col-span-2"
            }
          >
            <div
              className={
                "flex items-center justify-center space-x-2 lg:justify-start"
              }
            >
              <RiCalendarTodoFill
                className={"hidden text-xl text-[#034EA2] lg:block"}
              />
              <p className={"font-semibold text-[#034EA2]"}>
                15 & 16th December, 2025
              </p>
            </div>

            <p
              className={
                "mx-2 my-3 break-words text-3xl font-bold lg:mx-0 lg:my-2 lg:text-4xl"
              }
            >
              7th
              {<br />}
              INTERNATIONAL CONFERENCE ON INFORMATION MANAGEMENT & MACHINE
              INTELLIGENCE
            </p>
            <div
              className={
                "flex items-center justify-center space-x-2 lg:justify-start"
              }
            ></div>

            <div
              className={
                "flex items-center justify-center space-x-2 lg:justify-start"
              }
            >
              <RiMapPin2Fill
                className={
                  "mt-1 hidden self-start text-xl text-[#034EA2] lg:block"
                }
              />
              <div className={"text-[#034EA2]"}>
                <p
                  className={"text font-semibold"}
                  itemProp={"organizing-college"}
                >
                  Poornima Institute of Engineering and technology
                </p>
                <p className={"text-sm"}>Sitapura Jaipur, Rajasthan</p>
              </div>
            </div>
            <div
              className={
                "mt-4 flex items-center justify-center space-x-5 text-2xl text-[#034EA2] lg:justify-start"
              }
            >
              <Link
                href={"https://www.piet.poornima.org/"}
                aria-label={"icimmi twitter"}
              >
                <RiTwitterFill
                  className={"grow-on-hover cursor-pointer hover:text-sky-500"}
                />
              </Link>
              <Link href={"tel:+91-9896017351"} aria-label={"icimmi phone"}>
                <RiPhoneFill
                  className={
                    "grow-on-hover  cursor-pointer hover:text-emerald-500"
                  }
                />
              </Link>
              <Link
                href={"https://www.piet.poornima.org/"}
                aria-label={"icimmi facebook"}
              >
                <RiFacebookBoxFill
                  className={
                    "grow-on-hover  cursor-pointer hover:text-indigo-700"
                  }
                />
              </Link>
              <Link
                href={"mailto:icimmi@poornima.org"}
                aria-label={"icimmi mail"}
              >
                <RiMailFill
                  className={
                    "grow-on-hover  cursor-pointer hover:text-amber-400"
                  }
                />
              </Link>
            </div>
          </div>
          <div
            className={
              "col-span-full flex h-full w-full overflow-hidden rounded-lg px-1 lg:col-span-3"
            }
          >
            <Carousel
              autoPlay={true}
              interval={4000}
              loop={true}
              renderArrowLeft={() => null}
              renderArrowRight={({ activeIndex, handleNext }) => null}
              renderDots={({ setActiveIndex, activeIndex }) => {
                return (
                  <div
                    className={
                      "absolute bottom-0 left-0 flex h-10 w-full flex-row items-center justify-center gap-2 rounded-lg bg-gray-800 bg-opacity-20"
                    }
                  >
                    {sliderImages.map((image, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            index == activeIndex ? "bg-amber-400" : "bg-white"
                          } h-3 w-3 cursor-pointer rounded-full rounded-lg transition duration-300 ease-in-out hover:bg-red-600`}
                          onClick={() => setActiveIndex(index)}
                        ></div>
                      );
                    })}
                  </div>
                );
              }}
            >
              {sliderImages.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "flex h-full w-full cursor-grab active:cursor-grabbing"
                    }
                  >
                    <Image
                      height={2000}
                      width={3000}
                      draggable={false}
                      className={
                        " mx-auto h-full rounded-md object-cover shadow-lg"
                      }
                      src={image.image}
                      alt=""
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

        <div className={"flex flex-col space-y-5"}>
          <div className={"mx-2 grid grid-cols-1 md:mx-auto lg:grid-cols-3"}>
            <div
              className={"col-span-full lg:col-span-2 lg:mr-10"}
              style={{ width: "90%" }}
            >
              <h2
                className={
                  "my-3 text-center text-lg font-bold lg:text-start lg:text-2xl"
                }
              >
                Preamble
              </h2>
              <p className={"text-justify"}>
                7th International Conference on Information Management & Machine
                Intelligence (ICIMMI- 2025) will be held at Poornima Institute
                of Engineering & Technology, Jaipur, Rajasthan, India on
                December 15-16, 2025.
                {<br />}
                {<br />}
                The ICIMMI-2025 conference aims to showcase the latest trends in
                the development of intelligence across all areas of Information
                Management. The current state of the technology industry has
                permeated all branches of engineering, from Infrastructure
                (Civil Engineering) and Machines & Automobiles (Mechanical
                Engineering) to Power & Energy (Electrical Engineering),
                Communication & Devices (Electronics & Communication), and
                IT-based Applications & Services (Computer Engineering & IT),
                particularly with the advent of AI, Machine Learning, and Deep
                Learning. Our goal for this conference is to gather academic and
                research contributions from experts working to provide
                intelligence to their machines and systems.
                {<br />}
                {<br />}
              </p>
              <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            </div>
            <div
              id={"important"}
              className={"col-span-full lg:col-span-1"}
              style={{ width: "92%", height: "87%" }}
            >
              {/* <ImportantMessage /> */}
              <h2
                className={
                  "my-3 text-center text-lg font-bold lg:text-start lg:text-2xl"
                }
              >
                Past Publication Partners
              </h2>
              <div
                className={
                  "col-span-full flex h-full w-full overflow-hidden rounded-lg px-1 lg:col-span-3"
                }
              >
                <Carousel
                  autoPlay={true}
                  interval={4000}
                  loop={true}
                  renderArrowLeft={() => null}
                  renderArrowRight={({ activeIndex, handleNext }) => null}
                  renderDots={({ setActiveIndex, activeIndex }) => {
                    return (
                      <div
                        className={
                          "absolute bottom-0 left-0 flex h-10 w-full flex-row items-center justify-center gap-2 rounded-lg bg-gray-800 bg-opacity-20"
                        }
                      >
                        {logoImages.map((image, index) => {
                          return (
                            <div
                              key={index}
                              className={`${
                                index == activeIndex
                                  ? "bg-amber-400"
                                  : "bg-white"
                              } h-3 w-3 cursor-pointer rounded-full rounded-lg transition duration-300 ease-in-out hover:bg-red-600`}
                              onClick={() => setActiveIndex(index)}
                            ></div>
                          );
                        })}
                      </div>
                    );
                  }}
                >
                  {logoImages.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          "flex h-full w-full cursor-grab active:cursor-grabbing"
                        }
                      >
                        <Image
                          height={2000}
                          width={3000}
                          draggable={false}
                          className={
                            " object-fit mx-auto h-full rounded-md shadow-lg"
                          }
                          src={image.image}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <section className="body-font text-gray-600">
          <div className="container flex flex-col  px-3 py-12 md:flex-row-reverse">
            <div className="mb-16 flex flex-col items-center text-left md:mb-0 md:w-3/4 md:items-start  md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <h1 className="my-3 text-center text-lg font-bold text-black lg:text-start lg:text-2xl">
                Objectives
              </h1>
              <p className="mb-8 text-justify">
                The main objective of this conference is to provide a platform
                for researchers, academicians, industry professionals, and
                students to showcase their expertise and knowledge in the latest
                developments and strategies in the field of Information
                Management and Machine Learning. It is expected to receive a
                large number of high-quality submissions and foster innovative
                research discussions among scholars, scientists, engineers, and
                students from all over the world.
              </p>
              Other Objectives of the conference include:{" "}
              <ul className="prose mx-4 my-4 list-disc text-justify">
                <li>
                  Encouraging the proposal of new technologies, sharing of
                  experiences, and discussion of recent developments and
                  strategies in the field of Information Management and Machine
                  Learning.
                </li>
                <li>
                  Providing a common platform for academic pioneers to share
                  their views and achievements, and for participants to network
                  and collaborate.
                </li>
                <li>
                  Enhancing the knowledge and skills of technocrats and
                  academicians by presenting original and productive
                  information.
                </li>
                <li>
                  Highlighting pioneering issues internationally by bringing
                  together experts from different countries.
                </li>
                <li>
                  Promoting interdisciplinary collaborations to explore the
                  integration of information Management and Machine Learning
                  across diverse domains.
                </li>
              </ul>
            </div>
            <div className="mx-auto flex w-5/6 flex-col gap-y-4 py-12 md:w-1/2 lg:w-full lg:max-w-lg">
              <img
                className="rounded object-cover object-center"
                alt="hero"
                src="/bg.JPG"
              />
              <img
                className=" rounded object-cover object-center"
                alt="hero"
                src="/gallery/2022/i1.jpg"
              />
            </div>
          </div>
        </section>

        <div
          className={
            "flex-col items-center justify-center rounded-lg px-2 py-7 text-center"
          }
        >
          <div
            className={
              "inline-flex text-3xl font-extrabold md:text-4xl lg:text-6xl"
            }
          >
            <AnimatedNumbers
              includeComma
              animateToNumber={visitorCounter}
              locale="en-US"
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            ></AnimatedNumbers>
          </div>
          <p className={"py-2 text-lg font-semibold lg:py-4 lg:text-xl"}>
            Visitors
          </p>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        {/* <div className={"select-none"}>
          <div className={"mx-5 flex flex-row items-center md:mx-auto"}>
            <h1 className="my-5 text-2xl font-extrabold text-black">
              Hon&apos;ble Past Speakers
            </h1>
          </div>

          <div className={"w-full rounded-lg bg-gray-100 p-4"}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              grabCursor={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: true,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper mx-auto"
            >
              {speakers.map((speaker, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={"col-span-1 flex flex-col items-center"}>
                      <img
                        src={speaker.image}
                        alt={"Speaker's Photo"}
                        className={
                          "mb-5 h-56 w-64 rounded-lg border-2 border-gray-300 object-cover shadow-md"
                        }
                      />
                      {!speaker.national && (
                        <div
                          className={
                            "my-2 rounded-full bg-blue-800 bg-opacity-20"
                          }
                        >
                          <p className={"px-2 py-0.5 text-sm text-blue-800"}>
                            International Speaker
                          </p>
                        </div>
                      )}
                      {speaker.national && (
                        <div
                          className={
                            "my-2 rounded-full bg-amber-600 bg-opacity-20"
                          }
                        >
                          <p className={"px-2 py-0.5 text-sm text-amber-800"}>
                            National Speaker
                          </p>
                        </div>
                      )}
                      <span className={"text-center text-sm font-bold"}>
                        {speaker.name}
                      </span>

                      <span className={"text-center text-xs font-light"}>
                        {speaker.designation}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div
            className={
              "col-span-1 my-5 flex flex-col items-center justify-center gap-2"
            }
          >
            <Button
              link={"/speakers"}
              className={
                "shrink-on-hover bg-sky-600 no-underline focus:ring-4 focus:ring-sky-300 hover:bg-sky-700 dark:focus:ring-sky-700"
              }
              hideIcon={false}
            >
              View all
            </Button>
          </div>
        </div> */}
        <Sponsored />
      </main>
    </>
  );
};

export default Home;
