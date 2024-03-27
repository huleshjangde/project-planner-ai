"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setProjectDes, setProjectName } from "@/redux/formSlice";
import { HiPlusCircle } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";

import gsap from "gsap";
import User from "../User";

export default function ProjectForm({ generate }: any) {
  const animateMeRef = useRef(null);
  useEffect(() => {
    // Animate the div from bottom to top after the component mounts
    gsap.fromTo(
      animateMeRef.current,
      { opacity: 0, y: 100 }, // From
      { opacity: 1, y: 0, duration: 1 }, // To
    );
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const handleGenerateClick = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      toast.success("Please Wait...");
      // const response = await fetch("/api/lang");
      // if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      // }
      // const data = await response.json();

      // // Log the data content
      // console.log('====================================');
      // console.log(data.content);
      // console.log('====================================');

      if (forms.projectName && forms.projectDes) {
        await generate();
      } else {
        toast.warning("please fill all field!!");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const dispatch = useDispatch();
  const forms = useSelector((state: RootState) => state.projectForm);
  return (
    <div
      ref={animateMeRef}
      className="w-full my-20 h-screen space-y-4 flex flex-col justify-center items-center"
    >
      <div className=" max-w-4xl ">
        {/* <User/> */}
        <div className="space-y-1">
          <h3 className=" font-bold text-5xl">
            Enter the details for your new project idea
          </h3>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Give your project a name and description.
          </p>
        </div>
        <div className="space-y-3 py-3 mt-4 mb-5">
          <span className="px-2 rounded-md py-1 mr-2  bg-blue-800/55">01</span>
          <Label className="text-lg font-bold" htmlFor="project-name">
            Project name
          </Label>
          <p className="text-gray-500 text-lg">
            Name Your Dream: The First Step to Reality
          </p>
          <Input
            type="text"
            value={forms.projectName as string}
            onChange={(e) => dispatch(setProjectName(e.target.value))}
            className="w-4/5 text-black "
            id="project-name"
            placeholder="Enter the project name"
          />
        </div>
        <div className="space-y-3 mt-10 ">
          <span className="px-2 rounded-md py-1 mr-2  bg-blue-800/55">02</span>
          <Label className="text-lg font-bold" htmlFor="description">
            Description
          </Label>
          <p className="text-gray-500 text-lg">
            Describe Your Vision: Detail Makes Perfect
          </p>
          <Textarea
            value={forms.projectDes as string}
            onChange={(e) => dispatch(setProjectDes(e.target.value))}
            className="max-w-full text-black"
            id="description"
            placeholder="Enter the project description"
            rows={5}
          />
        </div>

        <button
          onClick={handleGenerateClick}
          className="mt-10  bg-slate-800 text-2xl no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px font-semibold leading-6  w-full text-center flex justify-center text-white "
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative space-x-2 items-center z-10 rounded-full w-full text-center flex justify-center bg-zinc-950 py-3 px-4 ring-1 ring-white/10 ">
            {isLoading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
            ) : (
              <>
                <span className="flex items-center gap-5">
                  Start New Project{" "}
                  <span>
                    {" "}
                    <HiPlusCircle />{" "}
                  </span>
                </span>
                <svg
                  fill="none"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </>
            )}
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        {/* <button onClick={handleGenerateClick} className={`border-1 text-2xl border-gray-700 shadow-md w-full bg-blue-950 mt-5 py-2 hover:bg-blue-900 transition-all ease-out rounded-md flex font-bold justify-center items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
  {isLoading ? (
    <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
  ) : (
    <>  <span className="mr-5">  Start New Project</span> <HiPlusCircle /> </>
   
  )}
</button> */}
      </div>
    </div>
  );
}
