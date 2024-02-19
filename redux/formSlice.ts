// Import createSlice from Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a TypeScript interface for your state
interface ProjectState {
  projectName: String;
  projectDes: String;
}

// Initial state using the interface
const initialState: ProjectState = {
  projectName: "",
  projectDes: "",
};

// Create the slice
const projectFormSlice = createSlice({
  name: "projectForm",
  initialState,
  reducers: {
    setProjectName(state, action: PayloadAction<string>) {
      state.projectName = action.payload;
    },
    setProjectDes(state, action: PayloadAction<string>) {
      state.projectDes = action.payload;
    },
  },
});

// Export actions
export const { setProjectDes, setProjectName } = projectFormSlice.actions;

// Export the reducer
export default projectFormSlice.reducer;
