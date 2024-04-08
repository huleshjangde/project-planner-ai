"use client";
import Modals from "@/components/Modal";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { setProjectDes, setProjectName } from "@/redux/formSlice";

import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProjectForm from "@/components/form/ProjectForm";
import { FaGreaterThan } from "react-icons/fa6";
import {
  setProjectOverview,
  setProjectPhasesContent,
  setKeyFeaturesContent,
  setTechnologyStackContent,
  setTimelineContent,
  setBudgetContent,
  setExpectedOutcomesContent,
  resetOutputs,
} from "../../redux/projectSlice";
import FloatingActionButtons from "@/components/actions/Action";
import SidebarDesk from "@/components/SidebarDesk";
import { api_key } from "@/keys";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g");

const Home = () => {
  const dispatch = useDispatch();
  const forms = useSelector((state: RootState) => state.projectForm);
  const outputs = useSelector((state: RootState) => state.project);

  useEffect(() => {
    dispatch(resetOutputs());
  }, []);
  const animateMeRef = useRef(null);
  useEffect(() => {
    // Animate the div from bottom to top after the component mounts
    gsap.fromTo(
      animateMeRef.current,
      { opacity: 0, y: 100 }, // From
      { opacity: 1, y: 0, duration: 1 }, // To
    );
  }, [outputs.projectOverview]);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  async function phase(preValue: string) {
    // For text-only input, use the gemini-pro model

    const prompt = `your an project planer assistent your task is to give project phases content basde on my overview of project plan " ${preValue} " `;

    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prevV: "helo", prompt: prompt }),
    });

    const text = await res.json();

    dispatch(setProjectPhasesContent(text.result));
    features();
  }
  async function features() {
    // For text-only input, use the gemini-pro model

    const prompt = `Your An Senior and super senior software engineer your task is to suggest features in my project . here is my project overview " ${outputs.projectOverview} "  and my idea is :  ${forms.projectDes}`;
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prevV: "helo", prompt: prompt }),
    });

    const text = await res.json();
    technology(text.result);
    timeline(text.result);

    dispatch(setKeyFeaturesContent(text.result));
  }

  async function technology(preValue: string) {
    // For text-only input, use the gemini-pro model

    const prompt = `your an project planer assistent your task is to make and suggestion key technology stack to build or execute  for my project plan here is my project plan  overview " ${outputs.projectOverview} "  and features ${preValue}`;
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prevV: "helo", prompt: prompt }),
    });

    const text = await res.json();

    dispatch(setTechnologyStackContent(text.result));
  }
  async function timeline(preValue: string) {
    // For text-only input, use the gemini-pro model

    const prompt = `your an project planer assistent your task is to make and suggestion key technology stack to build or execute  for my project plan here is my project plan  overview " $ ${outputs.projectPhasesContent} " and here is my features for project : ${preValue} `;
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prevV: "helo", prompt: prompt }),
    });

    const text = await res.json();
    dispatch(setTimelineContent(text.result));
    budget(text.result);
  }

  async function budget(preValue: string) {
    // For text-only input, use the gemini-pro model

    const prompt = `your an project planer assistent your task is to make and suggestion budget to build or execute  for my project plan here is my project plan  overview " ${outputs.projectOverview} " and here is my features for project : ${outputs.keyFeaturesContent} . and here is my timelite to develope project : ${preValue} `;
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prevV: "helo", prompt: prompt }),
    });

    const text = await res.json();
    dispatch(setBudgetContent(text.result));

    outcomes(text.result);
  }
  async function outcomes(preValue: string) {
    // For text-only input, use the gemini-pro model

    const prompt = `your an project planer assistent your task is to make and suggestion expected outcomes    for my project plan here is my project plan  overview " ${outputs.projectOverview} " and here is my features for project : ${outputs.keyFeaturesContent} . `;
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prevV: "helo", prompt: prompt }),
    });

    const text = await res.json();
    dispatch(setExpectedOutcomesContent(text.result));
  }
  async function overview() {
    const prompt = `your an project planner your task is to make project plan overview based on idea or imagination project name ${forms.projectName} and description of my project idea is ${forms.projectDes}  . please make it in table with column name "section , overview "  and section " Project Name
    Project Goal,
    Target Audience,
    Key Features,
    Technology Stack,
    Budget,
    Expected Outcomes " `;
    // For text-only input, use the gemini-pro model
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prevV: "helo", prompt: prompt }),
    });

    const text = await res.json();

    dispatch(setProjectOverview(text.result));

    phase(text.result);
  }

  const projectPhasesRef = useRef<HTMLDivElement>(null);
  const keyFeaturesRef = useRef<HTMLDivElement>(null);
  const technologyStackRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const expectedOutcomesRef = useRef<HTMLDivElement>(null);
  const projectOverview = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setShow(false);
  };

  const [show, setShow] = useState(false);

  return (
    <>
      {" "}
      {outputs.projectOverview ? (
        <>
          {/* <FloatingActionButtons /> */}
          {/* <ProjectForm generate={overview} /> */}
          <div className="w-full bg-black/90 flex ">
            <button
              className="fixed left-2 top-28 z-50 sm:hidden text-white"
              onClick={() => setShow(!show)}
            >
              <FaGreaterThan className="size-7 font-thin bg-white rounded-full px-2 text-gray-800" />
            </button>
            <motion.div
              initial={{ x: -300 }} // Initial position when hidden
              animate={{ x: show ? 0 : -300 }} // Position when shown or hidden
              transition={{ duration: 0.3 }}
              className="absolute z-40"
            >
              {show && (
                <Sidebar
                  active={false}
                  onProjectPhasesClick={() => scrollToSection(projectPhasesRef)}
                  onKeyFeaturesClick={() => scrollToSection(keyFeaturesRef)}
                  onTechnologyStackClick={() =>
                    scrollToSection(technologyStackRef)
                  }
                  onTimelineClick={() => scrollToSection(timelineRef)}
                  onBudgetClick={() => scrollToSection(budgetRef)}
                  onExpectedOutcomesClick={() =>
                    scrollToSection(expectedOutcomesRef)
                  }
                  onProjectOverviewClick={() =>
                    scrollToSection(projectOverview)
                  }
                  deleteId={0}
                />
              )}
            </motion.div>

            <SidebarDesk
              active={false}
              onProjectPhasesClick={() => scrollToSection(projectPhasesRef)}
              onKeyFeaturesClick={() => scrollToSection(keyFeaturesRef)}
              onTechnologyStackClick={() => scrollToSection(technologyStackRef)}
              onTimelineClick={() => scrollToSection(timelineRef)}
              onBudgetClick={() => scrollToSection(budgetRef)}
              onExpectedOutcomesClick={() =>
                scrollToSection(expectedOutcomesRef)
              }
              onProjectOverviewClick={() => scrollToSection(projectOverview)}
              deleteId={0}
            />

            <div
              ref={animateMeRef}
              className="w-full ml-0 px-2 sm:ml-10 sm:px-10 py-10 bg-black text-black   "
            >
              {/* <div className="  h-fit w-full  bottom-0 flex justify-center items-center gap-4 pb-4">
      <button
        onClick={()=> {dispatch(setProjectOverview(""))  } }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        Save
      </button>

      <button
       onClick={()=>{ dispatch(resetOutputs()) } }
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        New Project
      </button>
    </div> */}
              {/* <Modals
      complete={complete}
      call={overview as any}
      name={setName}
      n={name}
      d={discription}
      discription={setDiscription}
      loading={loading}
    /> */}

              {/* <Section title="Project Phases" value={projectPhasesContent} /> */}

              {outputs.projectOverview && (
                <>
                  <div ref={projectOverview}>
                    <Section
                      title="Project Overview"
                      value={outputs.projectOverview}
                    />
                  </div>

                  <div ref={projectPhasesRef}>
                    <Section
                      title="Project Phases"
                      value={outputs.projectPhasesContent}
                    />
                  </div>
                  <div ref={keyFeaturesRef}>
                    <Section
                      title="Key Features"
                      value={outputs.keyFeaturesContent}
                    />
                  </div>
                  <div ref={technologyStackRef}>
                    <Section
                      title="Technology Stack"
                      value={outputs.technologyStackContent}
                    />
                  </div>
                  <div ref={timelineRef}>
                    <Section title="Timeline" value={outputs.timelineContent} />
                  </div>
                  <div ref={budgetRef}>
                    <Section title="Budget" value={outputs.budgetContent} />
                  </div>
                  <div ref={expectedOutcomesRef}>
                    <Section
                      title="Expected Outcomes"
                      value={outputs.expectedOutcomesContent}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <ProjectForm generate={overview as any} /> {outputs.projectOverview}{" "}
        </>
      )}
    </>
  );
};

export default Home;
