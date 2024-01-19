import { configureStore } from "@reduxjs/toolkit";
import foodOrderSlice from "./foodOrderSlice";

const reduxToolkit = configureStore({
  reducer: foodOrderSlice,
});

export default reduxToolkit;
