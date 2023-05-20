import {TCalendarUI} from "./calendar-ui";
import calendar from "./index";

const calendarUI = TCalendarUI.createCalendarUI();
calendar.UI = calendarUI;

export default calendar;