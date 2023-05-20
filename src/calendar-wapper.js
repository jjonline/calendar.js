import {TCalendarFestival} from './calendar-festival';

class TCalendarWapper {
    constructor(jsname) {
        var _self = this;
        var _calendarFestival = new TCalendarFestival('');
        var _calendar;

        this.setCalendar = function(value){
            _calendar = value;
        }

        this.getCalendar = function(){
            return _calendar;
        }

        this.getFestival = function () {
            return _calendarFestival;
        };

        this.solar2lunar = function solar2lunar(y, m, d) {
            let result = _calendar.solar2lunar(y, m, d);
            //console.log(result);
            return processFestival(result);
        };

        this.lunar2solar = function lunar2solar(y, m, d, isLeapMonth) {
            let result = _calendar.lunar2solar(y, m, d, isLeapMonth);
            return processFestival(result);
        };

        this.format = function (formatText, date) {
            let dateObj = new Date();
            if (date) {
                dateObj = date;   
            }
            
            let o = {
                "y+": dateObj.getFullYear(),
                "M+": dateObj.getMonth() + 1,
                "d+": dateObj.getDate(),
                "h+": dateObj.getHours(),
                "m+": dateObj.getMinutes(),
                "s+": dateObj.getSeconds(),
                "q+": Math.floor((dateObj.getMonth() + 3) / 3),
                "S": dateObj.getMilliseconds() //millisecond
            };

            for (let k in o) {
                const ret = new RegExp('(' + k + ')').exec(formatText);
                if (ret) {
                    if (/(y+)/.test(formatText)) {
                        formatText = formatText.replace(ret[1], (o[k] + "").substring(4 - ret[1].length));
                    } else {
                        formatText = formatText.replace(ret[1],
                            ret[1].length === 1 ? o[k] :
                                ("00" + o[k]).substring(("" + o[k]).length));
                    }
                }
            }
            return formatText;
        };


        function processFestival(data) {
            data.festival = _calendarFestival.getSolorText(data.cYear, data.cMonth, data.cDay);
            data.lunarFestival = _calendarFestival.getLunarText(data.lYear, data.lMonth, data.lDay,
                _calendar.monthDays(data.lYear, data.lMonth));
            return data;
        }
    }
}

export {TCalendarWapper};