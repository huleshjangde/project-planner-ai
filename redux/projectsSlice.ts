// projectsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/lib/supabase/browser";

interface initialStateProps {
  projects: any[];
  status: "idle" | "loading" | "succeeded" | "failed"; // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | undefined;
}
type FetchProjectsArg = {
  id?: string;
};

// Define the initial state of the projects slice
const initialState: initialStateProps = {
  projects: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: "",
};

const supabase = createClient();

// Async thunk for fetching projects from Supabase
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (id: any) => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("author_id", id);
    if (error) throw new Error(error.message);
    return data;
  },
);

// Create the slice
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
