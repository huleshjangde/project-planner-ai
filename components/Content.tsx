"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Section from "./Section";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ReactPlayer from "react-player";
const Content = ({ title, icon, details }: any) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Assuming the element starts with opacity: 0 in CSS
    gsap.fromTo(
      ref.current,
      { opacity: 0 }, // From state
      {
        opacity: 1, // To state
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%", // Start animation when top of the trigger hits 75% viewport height
          end: "bottom 5%", // End animation when bottom of the trigger hits 25% viewport height
          toggleActions: "play none none reverse", // Reverse the animation when scrolling back
          onEnter: () => {
            gsap.to(ref.current, { opacity: 1, duration: 1 });
          },
          onLeave: () => {
            gsap.set(ref.current, { opacity: 0 });
          },
          onEnterBack: () => {
            gsap.to(ref.current, { opacity: 1, duration: 1 });
          },
          onLeaveBack: () => {
            gsap.set(ref.current, { opacity: 0 });
          },
        },
      },
    );

    // Cleanup function to kill ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="sm:w-4/5 w-full h-full sm:h-screen opacity-0 flex flex-col  justify-center items-center sm:flex-row mt-40 px-4 sm:px-10 py-5 rounded-md"
      >
        {" "}
        <div className="text-center w-full  sm:w-1/2 flex sm:flex-row flex-col items-center justify-between">
          <div className="flex justify-center items-center flex-col mt-20">
            <p className="animated-text relative z-20">
              Crafting Tomorrow: See What We are Building for You
            </p>
            <h1 className="sm:text-5xl text-3xl font-extrabold text-white">
              Behind the Scenes of Tomorrow: Your Preview Starts Here.
            </h1>
            <Image
              src={"/eye.gif"}
              alt={"ss "}
              className="w-40 z-10 mt-10  rounded-md "
              width={"300"}
              height={200}
            />
          </div>
        </div>
        <div className="text-center relative w-full sm:w-1/2 ">
          <Image
            src={"/arrow2.png"}
            alt={"ss "}
            className="w-40 hidden sm:block -left-40 top-10 absolute z-10 rounded-md "
            width={"300"}
            height={200}
          />

          <div className="flex w-full flex-col">
            <Tabs aria-label="Options">
              <Tab key="photos" title="Project Overview">
                <Card className="">
                  <CardBody className="">
                    <Section
                      title="Project Overview"
                      value={`# Hospital Management Software Plan

| Section             | Overview                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------|
| **Project Name**    | Hospital Management Software                                                               |
| **Project Goal**    | Develop a comprehensive system for hospital operations, enhancing efficiency and patient care. |
| **Target Audience** | Healthcare institutions aiming for digital transformation.                                 |
| **Key Features**    | EHR, appointment scheduling, staff and billing management, pharmacy integration, analytics. |
| **Technology Stack**| React, Swift, Kotlin, Node.js, MongoDB, AWS, Docker, Jenkins, Git.                         |
`}
                    />
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Key Features">
                <Card className="">
                  <CardBody className=" bg-blue-50">
                    <Section
                      title="Key Features"
                      value={`### Key Features of Hospital Management Software

- **Electronic Health Records (EHR)**: Digitally manage patient histories, treatment plans, and medical records.
- **Appointment Scheduling**: Enable patients to book, reschedule, and cancel appointments online.
- **Staff Management**: Schedule staff shifts, manage rosters, and track performance.
- **Billing and Insurance Processing**: Automate billing cycles, process insurance claims, and manage payments.
- **Pharmacy Management**: Integrate pharmacy operations with medication inventory and prescription management.
- **Reporting and Analytics**: Generate real-time reports and analytics for decision-making and operational improvements.
`}
                    />
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Technology Stack">
                <Card>
                  <CardBody>
                    <Section
                      title="Technology Stack"
                      value={`### Technology Stack for Hospital Management Software

- **Frontend**:
  - React.js for web applications
  - Swift for iOS mobile applications
  - Kotlin for Android mobile applications

- **Backend**:
  - Node.js with Express.js framework for server-side logic

- **Database**:
  - MongoDB for NoSQL data storage
  - PostgreSQL for relational data requirements

- **Cloud & DevOps**:
  - AWS or Azure for cloud hosting and services
  - Docker for containerization
  - Jenkins for continuous integration and deployment (CI/CD)

- **Version Control**:
  - Git for source code management, with GitHub or GitLab as repository hosting services
`}
                    />
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
    // <Image
    //           src={"/content.png"}
    //           alt={"ss "}
    //           className="w-4/5 rounded-md shadow-lg "
    //           width={"900"}
    //           height={1000}
    //         />
  );
};

export default Content;
