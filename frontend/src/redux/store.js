import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import projectsSlice from "./projectSlice";

export default configureStore({
  reducer: {
    userStore: userSlice,
    projectStore: projectsSlice,
  },
});
