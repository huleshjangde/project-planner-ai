"use client";
import Modals from "@/components/Modal";
import gsap from "gsap";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import ProjectForm from "@/components/form/ProjectForm";
import {
  setProjectOverview,
  setProjectPhasesContent,
  setKeyFeaturesContent,
  setTechnologyStackContent,
  setTimelineContent,
  setBudgetContent,
  setExpectedOutcomesContent,
  resetOutputs,
} from "@/redux/projectSlice";
import FloatingActionButtons from "@/components/actions/Action";
import { fetchProjects } from "@/redux/projectsSlice";
import Yt from "@/components/Yt";
import { navigate } from "@/app/actions";
import { motion } from "framer-motion";
import SidebarDesk from "@/components/SidebarDesk";
import { FaGreaterThan } from "react-icons/fa";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g");
const Home = ({ params }: { params: { slug: number } }) => {
  const [videos, setVideos] = useState();
  const ytCalledRef = useRef(false);

  const youtubeVideos = async (data: string) => {
    const datas = await fetch("/api/youtubesearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: data }),
    });

    if (datas.ok) {
      const result: any = await datas.json(); // Make sure to await the .json() method
      console.log("data here is " + result);
      console.log(await result.data.video_results);

      // This should print the actual JSON data.
      setVideos(await result.data.video_results);
      // console.log(result.video_results);
    } else {
      console.error(`API returned status ${datas.status}: ${datas.statusText}`);
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const outputs = useSelector((state: RootState) => state.project);

  const [overview, setOverview] = useState("");
  const [phases, setPhases] = useState("");
  const [keyFeatures, setKeyFeatures] = useState("");
  const [techStack, setTechStack] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [expectedOutcomes, setExpectedOutcomes] = useState("");

  const [deleteId, setDeleteId] = useState(0);

  const { projects, status, error } = useSelector(
    (state: RootState) => state.projects,
  );

  useEffect(() => {
    const jadu = async () => {
      const project = await projects[params.slug];
      if (project) {
        // youtubeVideos(project.project_description)
        setDeleteId(project.id);
        setOverview(project.project_overview);
        setPhases(project.project_phases);
        setKeyFeatures(project.key_features);
        setTechStack(project.technology_stack);
        setTimeline(project.timeline);
        setBudget(project.budget);
        setExpectedOutcomes(project.expected_outcomes);

        if (!videos && !ytCalledRef.current) {
          yt();

          console.log("====================================");
          console.log("twoooo");
          console.log("====================================");
          ytCalledRef.current = true; // Mark as called to prevent future calls
        }
        console.log("====================================");
        console.log("hello");
        console.log("====================================");
      } else {
        navigate();
      }
    };
    jadu();
  }, []);

  const animateMeRef = useRef(null);
  useEffect(() => {
    // Animate the div from bottom to top after the component mounts
    gsap.fromTo(
      animateMeRef.current,
      { opacity: 0, y: 100 }, // From
      { opacity: 1, y: 0, duration: 1 }, // To
    );
  }, []);

  async function yt() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `How can I find YouTube videos related to my technology stack? Please provide me with 5 search queries.   " ${outputs.technologyStackContent} "  `;
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    youtubeVideos(text);

    console.log("==================youtube query==================");
    console.log(text);
    console.log("====================================");
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
      {outputs && (
        <div className="w-full bg-black/90 flex ">
          {/* {outputs && (
            <Sidebar
              onProjectPhasesClick={() => scrollToSection(projectPhasesRef)}
              onKeyFeaturesClick={() => scrollToSection(keyFeaturesRef)}
              onTechnologyStackClick={() => scrollToSection(technologyStackRef)}
              onTimelineClick={() => scrollToSection(timelineRef)}
              onBudgetClick={() => scrollToSection(budgetRef)}
              onExpectedOutcomesClick={() =>
                scrollToSection(expectedOutcomesRef)
              }
              onProjectOverviewClick={() => scrollToSection(projectOverview)}
              active={true}
              deleteId={deleteId}
            />
          )}
 */}

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
                onProjectOverviewClick={() => scrollToSection(projectOverview)}
                active={true}
                deleteId={deleteId}
              />
            )}
          </motion.div>

          <SidebarDesk
            onProjectPhasesClick={() => scrollToSection(projectPhasesRef)}
            onKeyFeaturesClick={() => scrollToSection(keyFeaturesRef)}
            onTechnologyStackClick={() => scrollToSection(technologyStackRef)}
            onTimelineClick={() => scrollToSection(timelineRef)}
            onBudgetClick={() => scrollToSection(budgetRef)}
            onExpectedOutcomesClick={() => scrollToSection(expectedOutcomesRef)}
            onProjectOverviewClick={() => scrollToSection(projectOverview)}
            active={true}
            deleteId={deleteId}
          />

          <div
            ref={animateMeRef}
            className="w-full ml-0 sm:ml-10 sm:px-10 px-2 py-10 bg-black text-black   "
          >
            {overview && (
              <>
                <div ref={projectOverview}>
                  <Section title="Project Overview" value={overview} />
                </div>

                <div ref={projectPhasesRef}>
                  <Section title="Project Phases" value={phases} />
                </div>
                <div ref={keyFeaturesRef}>
                  <Section title="Key Features" value={keyFeatures} />
                </div>
                <div ref={technologyStackRef}>
                  <Section title="Technology Stack" value={techStack} />
                </div>
                <div ref={timelineRef}>
                  <Section title="Timeline" value={timeline} />
                </div>
                <div ref={budgetRef}>
                  <Section title="Budget" value={budget} />
                </div>
                <div ref={expectedOutcomesRef}>
                  <Section title="Expected Outcomes" value={expectedOutcomes} />
                </div>

                <p className=" text-2xl font-bold text-center mt-10">
                  Guide Gallery
                </p>

                {videos ? <Yt output={videos as any} /> : <> </>}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
