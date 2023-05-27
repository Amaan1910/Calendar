import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./Slices/Calendar";

const store = configureStore({
  reducer: {
    calendarReducer,
  },
});
export default store;
