import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeCalendar } from "./Slices/Calendar";
import { getDays, isCurrentDate, isHoliday, MONTH_LIST } from "./Utils/Utils";

import "./Calendar.css";
import "./index.css";

function Calendar() {
  const selectedMonth = useSelector(
    (store) => store.calendarReducer.selectedMonth
  );
  const selectedYear = useSelector(
    (store) => store.calendarReducer.selectedYear
  );
  const disptach = useDispatch();

  function changeMonth(arrow) {
    let updatedSelectedMonth;
    let updatedSelectedYear;

    if (arrow === "LEFT") {
      if (selectedMonth === 0) {
        updatedSelectedMonth = 11;
        updatedSelectedYear = selectedYear - 1;
      } else {
        updatedSelectedMonth = selectedMonth - 1;
        updatedSelectedYear = selectedYear;
      }
    }

    if (arrow === "RIGHT") {
      if (selectedMonth === 11) {
        updatedSelectedMonth = 0;
        updatedSelectedYear = selectedYear + 1;
      } else {
        updatedSelectedMonth = selectedMonth + 1;
        updatedSelectedYear = selectedYear;
      }
    }

    disptach(
      changeCalendar({
        month: updatedSelectedMonth,
        year: updatedSelectedYear
      })
    );
  }

  function changeYear(arrow) {
    let updatedSelectedYear;
    if (arrow === "LEFT") {
      updatedSelectedYear = selectedYear - 1;
    } else {
      updatedSelectedYear = selectedYear + 1;
    }
    disptach(
      changeCalendar({ month: selectedMonth, year: updatedSelectedYear })
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-inner-container">
        <h2>Calendar</h2>
        <div className="calendar-display">
          <div className="month-header">
            <div className="left-arrow" onClick={() => changeYear("LEFT")}>
              {"<<"}
            </div>
            <div className="left-arrow" onClick={() => changeMonth("LEFT")}>
              {"<"}
            </div>
            <div id="month">
              {MONTH_LIST[selectedMonth]}, {selectedYear}
            </div>
            <div className="right-arrow" onClick={() => changeMonth("RIGHT")}>
              {">"}
            </div>
            <div className="right-arrow" onClick={() => changeYear("RIGHT")}>
              {">>"}
            </div>
          </div>
          <div className="calendar-container-child">
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>

          <div className="calendar-container-child">
            {getDays(selectedMonth, selectedYear).map((item) => (
              <div
                className={`${
                  isCurrentDate(item, selectedMonth, selectedYear)
                    ? "selected"
                    : ""
                } ${isHoliday(item, selectedMonth) ? "holiday" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
