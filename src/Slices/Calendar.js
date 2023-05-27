import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedMonth: new Date().getMonth(),
    selectedYear: new Date().getFullYear(),
  },
  reducers: {
    changeCalendar: (state, action) => {
      state.selectedMonth = action.payload.month;
      state.selectedYear = action.payload.year;
    },
  },
});

export default calendarSlice.reducer;
export const { changeCalendar } = calendarSlice.actions;
