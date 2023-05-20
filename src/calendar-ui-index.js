import {TCalendarUI} from "./calendar-ui";
import calendar from "./index";


calendar.createUI = function(dest, options){
    return TCalendarUI.createCalendarUI(dest, options);
}


export default calendar;