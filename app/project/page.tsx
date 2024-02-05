"use client";
import Modals from "@/components/Modal";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g");
const Home = () => {
  const [value, setValue] = useState(``);
  const [okCall, setOkCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [name, setName] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");

  const [projectPhasesContent, setProjectPhasesContent] = useState("");
  const [keyFeaturesContent, setKeyFeaturesContent] = useState("");
  const [technologyStackContent, setTechnologyStackContent] = useState("");
  const [timelineContent, setTimelineContent] = useState("");
  const [budgetContent, setBudgetContent] = useState("");
  const [expectedOutcomesContent, setExpectedOutcomesContent] = useState("");

  // useEffect(() => {
  //   Mystyle();
  // }, [value]);

  async function phase() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `your an project planer assistent your task is to give project phases content basde on my overview of project plan " ${projectPhasesContent} " `;
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setProjectPhasesContent(text);
    features();
  }
  async function features() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Your An Senior and super senior software engineer your task is to suggest features in my project . here is my project overview " ${value} "  and idea ${discription}`;
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    technology(text);
    timeline(text);
    setKeyFeaturesContent(text);
  }

  async function technology(preValue: string) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `your an project planer assistent your task is to make and suggestion key technology stack to build or execute  for my project plan here is my project plan  overview " ${projectPhasesContent} "  and features ${preValue}`;
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setTechnologyStackContent(text);
  }
  async function timeline(preValue: string) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `your an project planer assistent your task is to make and suggestion key technology stack to build or execute  for my project plan here is my project plan  overview " ${projectPhasesContent} " and here is my features for project : ${preValue} `;
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    budget(text);
    setTimelineContent(text);
  }

  async function budget(preValue: string) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `your an project planer assistent your task is to make and suggestion budget to build or execute  for my project plan here is my project plan  overview " ${projectPhasesContent} " and here is my features for project : ${keyFeaturesContent} . and here is my timelite to develope project : ${preValue} `;
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setBudgetContent(text);
    outcomes(text);
  }
  async function outcomes(preValue: string) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `your an project planer assistent your task is to make and suggestion expected outcomes    for my project plan here is my project plan  overview " ${projectPhasesContent} " and here is my features for project : ${keyFeaturesContent} . `;
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setExpectedOutcomesContent(text);
    setComplete(false);
  }
  async function overview() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    setLoading(true);
    setComplete(false);
    const prompt = `your an project planner your task is to make project plan overview based on idea or imagination project name ${name} and description of my project idea is ${discription}  . please make it in table with column name "section , overview "  and section " Project Name
    Project Goal,
    Target Audience,
    Key Features,
    Technology Stack,
    Budget,
    Expected Outcomes " `;

    // Project Phases,Project Name
    // Project Goal
    // Target Audience
    // Project Phases
    // Key Features
    // Technology Stack
    // Timeline
    // Budget
    // Expected Outcomes
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    setValue(text);
    setLoading(false);
    setComplete(true);
    phase();
    console.log("====================================");
    console.log(text);
    console.log("====================================");
  }

  useEffect(() => {
    if (okCall == true) {
      console.log("====================================");
      console.log("hello i am here");
      console.log("====================================");
    }
  }, [okCall]);

  const projectPhasesRef = useRef<HTMLDivElement>(null);
  const keyFeaturesRef = useRef<HTMLDivElement>(null);
  const technologyStackRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const expectedOutcomesRef = useRef<HTMLDivElement>(null);
  const projectOverview = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-[100vw-396px] ml-64 px-10 py-10 bg-white text-black   ">
      <Sidebar
        onProjectPhasesClick={() => scrollToSection(projectPhasesRef)}
        onKeyFeaturesClick={() => scrollToSection(keyFeaturesRef)}
        onTechnologyStackClick={() => scrollToSection(technologyStackRef)}
        onTimelineClick={() => scrollToSection(timelineRef)}
        onBudgetClick={() => scrollToSection(budgetRef)}
        onExpectedOutcomesClick={() => scrollToSection(expectedOutcomesRef)}
        onProjectOverviewClick={() => scrollToSection(projectOverview)}
      />

      <Modals
        complete={complete}
        call={overview as any}
        name={setName}
        n={name}
        d={discription}
        discription={setDiscription}
        loading={loading}
      />

      {/* <Section title="Project Phases" value={projectPhasesContent} /> */}

      {value && (
        <>
          <div ref={projectOverview}>
            <Section title="Project Overview" value={value} />
          </div>

          <div ref={projectPhasesRef}>
            <Section title="Project Phases" value={projectPhasesContent} />
          </div>
          <div ref={keyFeaturesRef}>
            <Section title="Key Features" value={keyFeaturesContent} />
          </div>
          <div ref={technologyStackRef}>
            <Section title="Technology Stack" value={technologyStackContent} />
          </div>
          <div ref={timelineRef}>
            <Section title="Timeline" value={timelineContent} />
          </div>
          <div ref={budgetRef}>
            <Section title="Budget" value={budgetContent} />
          </div>
          <div ref={expectedOutcomesRef}>
            <Section
              title="Expected Outcomes"
              value={expectedOutcomesContent}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
