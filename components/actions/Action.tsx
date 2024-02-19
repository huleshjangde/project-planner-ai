// FloatingActionButtons.tsx
import { setProjectOverview } from "@/redux/projectSlice";
import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";

const FloatingActionButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed  h-fit w-fit z-50 inset-x-0 bottom-0 flex justify-center gap-4 pb-4">
      <button
        onClick={dispatch(setProjectOverview("")) as any}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        Save
      </button>

      <button
        onClick={dispatch(setProjectOverview("")) as any}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        New Project
      </button>
    </div>
  );
};

export default FloatingActionButtons;
