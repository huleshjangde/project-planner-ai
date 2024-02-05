"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  FaTasks,
  FaTools,
  FaCogs,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

interface SidebarProps {
  onProjectPhasesClick: () => void;
  onKeyFeaturesClick: () => void;
  onTechnologyStackClick: () => void;
  onTimelineClick: () => void;
  onBudgetClick: () => void;
  onExpectedOutcomesClick: () => void;
  onProjectOverviewClick: () => void;
}

const btnClass = "mb-2  w-full flex text-left justify-start text-white ";

const Sidebar: React.FC<SidebarProps> = ({
  onProjectPhasesClick,
  onKeyFeaturesClick,
  onTechnologyStackClick,
  onTimelineClick,
  onBudgetClick,
  onExpectedOutcomesClick,
  onProjectOverviewClick,
}) => {
  const [show, setShow] = useState(true);

  const toggelSidebar = () => {
    setShow(!show);
  };
  return (
    <div
      className={`fixed ease-linear duration-100 top-0 left-0 h-full  bg-black p-2 flex justify-center align-middle items-center ${show ? "w-64" : " w-14 "} `}
    >
      <span className="w-36 absolute top-12 h-60 rounded-full bg-red-400 blur-[100px] z-0"></span>
      <div className="flex flex-col text-left h-fit gap-5 text-slate-200 w-full  relative ">
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
          <span className={`${show ? "block" : "hidden"}`}>Project Phases</span>
        </Button>
        <Button
          color="primary"
          variant="flat"
          className={btnClass}
          onClick={onKeyFeaturesClick}
        >
          <FaTools className="mr-2 " />{" "}
          <span className={`${show ? "block" : "hidden"}`}>Key Features </span>
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
  );
};

export default Sidebar;
