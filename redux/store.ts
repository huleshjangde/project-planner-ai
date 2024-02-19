import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import projectSliceReducer from "./formSlice";
import projectsReducer from "./projectsSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    projectForm: projectSliceReducer,
    projects: projectsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
