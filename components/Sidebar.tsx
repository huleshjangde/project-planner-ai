"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { resetOutputs } from "@/redux/projectSlice";
import { FaRecycle, FaRemoveFormat, FaSave } from "react-icons/fa"; // Import save icon from FontAwesome
import { MdDelete, MdOutlineAddCircleOutline } from "react-icons/md";

import {
  FaTasks,
  FaTools,
  FaCogs,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { createClient } from "@/lib/supabase/browser";
import { redirect } from "next/navigation";
import { navigate } from "@/app/actions";
import { toast } from "sonner";
import { setProjectDes, setProjectName } from "@/redux/formSlice";

interface SidebarProps {
  onProjectPhasesClick: () => void;
  onKeyFeaturesClick: () => void;
  onTechnologyStackClick: () => void;
  onTimelineClick: () => void;
  onBudgetClick: () => void;
  onExpectedOutcomesClick: () => void;
  onProjectOverviewClick: () => void;
  active: boolean;
  deleteId: number;
}

const btnClass =
  "mb-2  w-full flex text-left justify-start text-gray-600 font-bold  bg-slate-200/80";

const Sidebar: React.FC<SidebarProps> = ({
  deleteId,
  active,
  onProjectPhasesClick,
  onKeyFeaturesClick,
  onTechnologyStackClick,
  onTimelineClick,
  onBudgetClick,
  onExpectedOutcomesClick,
  onProjectOverviewClick,
}) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const outputs = useSelector((state: RootState) => state.project);
  const form = useSelector((state: RootState) => state.projectForm);
  const supabase = createClient();

  const [saved, setSaved] = useState(false);
  const handelNew = () => {
    navigate();
    dispatch(resetOutputs());
  };
  const saveProject = async () => {
    const { data } = await supabase.auth.getSession();
    const id: any = data.session?.user.id;
    if (data.session?.user) {
      const { data, error } = await supabase
        .from("projects") // Your table name
        .insert([
          {
            author_id: id, // Make sure to replace these with actual data fields
            project_overview: outputs.projectOverview,
            project_phases: outputs.projectPhasesContent,
            key_features: outputs.keyFeaturesContent,
            technology_stack: outputs.technologyStackContent,
            timeline: outputs.timelineContent,
            budget: outputs.budgetContent,
            expected_outcomes: outputs.expectedOutcomesContent,
            project_name: form.projectName,
            project_description: form.projectDes,
            // No need to manually insert created_at, it's automatically handled by the database
          },
        ]);

      if (error) {
        console.error("Error saving project:", error);
        // Handle error (e.g., show error message to the user)
      } else {
        console.log("Project saved successfully:", data);
        dispatch(setProjectDes(""));
        dispatch(setProjectName(""));
        setSaved(true);

        toast.success("Project saved successfully!");
        // Handle success (e.g., show success message or redirect)
      }
    }
  };

  const handelDetele = async () => {
    const { data } = await supabase.auth.getSession();
    const id: any = data.session?.user.id;

    await supabase.from("projects").delete().match({ id: deleteId });
    toast.success("Project Delete successfully!");

    navigate();
    dispatch(resetOutputs());
  };

  const toggelSidebar = () => {
    setShow(!show);
  };
  return (
    <div className="w-72   h-screen sticky top-10 left-10 z-10  flex items-center justify-center pl-5 rounded-md  flex-col">
      <div
        className={`  ease-linear duration-100  h-fit bg-gray-100 shadow-lg rounded-md py-10 p-2 flex justify-center   items-center ${show ? "w-64" : " w-14 "} `}
      >
        {/* <span className="w-36 absolute top-12 h-60 rounded-full bg-red-400 blur-[100px] z-0"></span> */}
        <div className="flex  flex-col text-left h-fit gap-5 text-slate-200 w-full  relative ">
          {/* <button onClick={toggelSidebar} className={`absolute bg-blue-300 rounded-lg p-1  top-10 ${show ? "right-0" : "-right-20 "}`}><IoIosArrowDropleftCircle /></button> */}
          <Button
            color="primary"
            variant="flat"
            className={btnClass}
            onClick={onProjectOverviewClick}
          >
            <FaTasks className="mr-2 " />
            <span className={`${show ? "block" : "hidden"}`}>
              Project Overview
            </span>
          </Button>
          <Button
            color="primary"
            variant="flat"
            className={btnClass}
            onClick={onProjectPhasesClick}
          >
            <FaTasks className="mr-2 " />{" "}
            <span className={`${show ? "block" : "hidden"}`}>
              Project Phases
            </span>
          </Button>
          <Button
            color="primary"
            variant="flat"
            className={btnClass}
            onClick={onKeyFeaturesClick}
          >
            <FaTools className="mr-2 " />{" "}
            <span className={`${show ? "block" : "hidden"}`}>
              Key Features{" "}
            </span>
          </Button>
          <Button
            color="primary"
            variant="flat"
            className={btnClass}
            onClick={onTechnologyStackClick}
          >
            <FaCogs className="mr-2" />{" "}
            <span className={`${show ? "block" : "hidden"}`}>
              {" "}
              Technology Stack{" "}
            </span>
          </Button>
          <Button
            color="primary"
            variant="flat"
            className={btnClass}
            onClick={onTimelineClick}
          >
            <FaCalendarAlt className="mr-2" />{" "}
            <span className={`${show ? "block" : "hidden"}`}> Timeline </span>
          </Button>
          <Button
            color="primary"
            variant="flat"
            className={btnClass}
            onClick={onBudgetClick}
          >
            <FaMoneyBillWave className="mr-2" />{" "}
            <span className={`${show ? "block" : "hidden"}`}> Budget </span>
          </Button>
          <Button
            color="primary"
            variant="flat"
            className={btnClass}
            onClick={onExpectedOutcomesClick}
          >
            <FaChartLine className="mr-2" />{" "}
            <span className={`${show ? "block" : "hidden"}`}>
              Expected Outcomes{" "}
            </span>
          </Button>
        </div>
      </div>
      <div className="flex gap-2 bg-slate-200 py-5 border-1 w-full justify-center mt-2 rounded-md px-2">
        {active ? (
          <button
            onClick={handelDetele}
            className={` bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow-lg flex items-center gap-2`}
          >
            <MdDelete /> {/* Include the save icon */}
            Delete
          </button>
        ) : (
          <button
            disabled={saved || active}
            onClick={saveProject}
            className={` bg-green-500 py-2 px-2 hover:bg-green-700 text-white font-bold   rounded-md shadow-lg flex items-center gap-2`}
          >
            <FaSave /> {/* Include the save icon */}
            Save
          </button>
        )}

        <button
          onClick={() => {
            handelNew();
          }}
          className=" text-white py-2  bg-blue-500 hover:bg-blue-700 font-bold px-2 rounded-md shadow-lg flex items-center gap-2"
        >
          <MdOutlineAddCircleOutline /> {/* Include the new project icon */}
          New Project
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
