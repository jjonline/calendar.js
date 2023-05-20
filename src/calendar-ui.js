import {TCalendarWapper} from './calendar-wapper';

function createStyleNode(cssText) {
    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.appendChild(document.createTextNode(cssText));
    return style;
}

function addHeadStyle(styleText) {
    var doc = document;
    var headObj = (doc.getElementsByTagName("head"))[0];
    headObj.appendChild(createStyleNode(styleText));
}

function extend(obj, ext) {
    var i, l, name, args = arguments, value;

    for (i = 1, l = args.length; i < l; i++) {
        ext = args[i];
        for (name in ext) {
            if (ext.hasOwnProperty(name)) {
                value = ext[name];
                if (typeof (value) !== 'undefined') {
                    obj[name] = value;
                }
            }
        }
    }
    return obj;
}

class TCalendarUI {
    constructor(jsname) {
        var _self = this;
        var _jsname = jsname;

        var _viewDate; //显示日期
        var _selectDate = null; //选择日期
        var _header = document.createElement("div");
        var _thead = document.createElement("thead");
        var _tbody = document.createElement("tbody");
        var _yearMonthTitle;
        var _otherTitle;
        var _allTd = [];
  
        var _optionData = {
			drawValidDay: true,  /*显示不是本月的天*/
			drawHeaderNav: true,  /*显示导航标题*/
			drawCalendarTitle: true,  /*显示日历标题*/
			fixRowsBool: false,    /*是否显示固定的行数,只显示当月天数时无效*/
			autoSelectToday: false, /*是否自动选择今天*/
			viewAutoSelectDay: 0, /*当前显示没有选择时自动选择那一天, 0为不选择, 负数为倒数第几天*/
			enabelJsLoadStyle: true, /*是否js加载缺省样式,自定义样式文件时,该选项应为false*/
			calendarStyle: "default", /*样式类别*/
			useSimpleDayView: false, /*使用简单的天显示*/
        };

        var _calendarObj = new TCalendarWapper("");
        this.defaultStyle = defaultCalendarCssStyle;

        this.solar2lunar = _calendarObj.solar2lunar;
        this.lunar2solar = _calendarObj.lunar2solar;

        this.getFestival = function(){
           return _calendarObj.getFestival();
        }
        this.setCalendar = function(value){
            _calendarObj.setCalendar(value);
        }
        this.getCalendar = function() {
            return _calendarObj.getCalendar();
        }

        this.view = function (dest) {
            var obj;
            if (typeof (dest) === "object") {
                obj = dest;
            } else {
                obj = document.getElementById(dest);
            }

            if (_optionData.enabelJsLoadStyle) {
                addHeadStyle(defaultCalendarCssStyle);
            }

            if (_optionData.drawHeaderNav) {
                obj.appendChild(_header);
            }

            obj.appendChild(getTableMonth());
            this.refresh();
        };

        this.refresh = function () {
            refreshMonthData();
            refreshHeader();
        };

        this.onMonthDayTagTextEvent = function (date) {
            console.log("onMonthDayTagTextEvent:" + date.toDateString());
            return "";
        };

        this.execMonthDayClick = function (millisecond) {
            // console.log(millisecond);
            var date = new Date(parseInt(millisecond));
            if (!_selectDate || _selectDate.getTime() != date.getTime()) {
                _selectDate = date;
                this.refreshSwitch(date);
            }
            // this.refresh();
            //this.onMonthDayClickEvent(year, month, day);
        };

        this.onMonthDaySelectEvent = function (date) {
            console.log("onMonthDaySelectEvent:" + date.toDateString());
        };

        this.setOptions = function (options) {
            extend(_optionData, options);
            if (_optionData.autoSelectToday) {
                if (!_selectDate) {
                    this.setSelectDate(new Date());
                }
            }
        };

        this.getSelectDate = function () {
            return _selectDate;
        };

        this.getViewDate = function () {
            return _viewDate;
        };

        this.setSelectDate = function (value) {
            if (value instanceof Date) {
                _selectDate = new Date(value.getFullYear(), value.getMonth(), value.getDate());
                this.setViewDate(_selectDate);
            }
        };

        this.setViewDate = function (value) {
            if (arguments.length < 1) {
            } else if (value instanceof Date) {
                _viewDate = new Date(value.getFullYear(), value.getMonth());
            } else {
                if (value !== "today") {
                    var year = _viewDate.getFullYear();
                    var month = _viewDate.getMonth();
                    switch (value) {
                        case "y+": year++; break;
                        case "y-": year--; break;
                        case "m+": month++; break;
                        case "m-": month--; break;
                    }
                    _viewDate = new Date(year, month);
                } else {
                    _viewDate = new Date();
                }
            }
        };

        this.refreshSwitch = function (value) {
            this.setViewDate(value);
            this.refresh();
        };

        this.nextMonth = function () {
            this.refreshSwitch("m+");
        };

        this.preMonth = function () {
            this.refreshSwitch("m-");
        };

        this.nextYear = function () {
            this.refreshSwitch("y+");
        };

        this.preYear = function () {
            this.refreshSwitch("y-");
        };

        this.refreshToday = function () {
            this.refreshSwitch("today");
        };

        this.createNewUI = function (dest, options) {
            return TCalendarUI.createCalendarUI(this.getCalendar(), dest, options);
        };

        function refreshHeader() {
            var year = _viewDate.getFullYear();
            var month = _viewDate.getMonth() + 1;
            var lunarObj = _self.solar2lunar(year, month, 1);
            var lunarStr = "【" + lunarObj.Animal + "】";
            if (!_optionData.useSimpleDayView) {
                lunarStr = lunarObj.gzYear + "年 " + lunarObj.gzMonth + "月" + lunarStr;
            }

            _otherTitle.innerHTML = lunarStr;

            _yearMonthTitle.innerHTML = year + "年" + month + "月";
        }

        function initHeader() {
            _header.classList.add("calendarhead");
            //⮜⮞❰❱◀▶《》↩↪
            var preyear = document.createElement("span");
            preyear.innerHTML = "◀";
            preyear.classList.add("preYear");
            preyear.classList.add("navLabel");
            preyear.onclick = function () {
                _self.preYear();
            };

            var nextyear = document.createElement("span");
            nextyear.innerHTML = "▶";
            nextyear.classList.add("nextYear");
            nextyear.classList.add("navLabel");
            nextyear.onclick = function () {
                _self.nextYear();
            };


            var preMonth = document.createElement("span");
            preMonth.innerHTML = "<";
            preMonth.classList.add("preMonth");
            preMonth.classList.add("navLabel");
            preMonth.onclick = function () {
                _self.preMonth();
            };

            var nextMonth = document.createElement("span");
            nextMonth.innerHTML = ">";
            nextMonth.classList.add("nextMonth");
            nextMonth.classList.add("navLabel");
            nextMonth.onclick = function () {
                _self.nextMonth();
            };

            _yearMonthTitle = document.createElement("label");
            _yearMonthTitle.classList.add("yearMonthTitle");

            _otherTitle = document.createElement("div");
            _otherTitle.classList.add("yearMonthTitleOther");

            var today = document.createElement("span");
            today.innerHTML = "今";
            today.classList.add("navLabel");
            today.classList.add("todayLabel");
            today.onclick = function () {
                _self.refreshToday();
            };


            _header.appendChild(preyear);
            _header.appendChild(preMonth);
            _header.appendChild(_yearMonthTitle);
            _header.appendChild(nextMonth);
            _header.appendChild(nextyear);
            _header.appendChild(today);
            _header.appendChild(_otherTitle);
        }

        function getTableMonth() {
            var tableObj = document.createElement("table");
            tableObj.classList.add("calendarmonth");
            tableObj.setAttribute('cellspacing', '0');
            tableObj.setAttribute('cellpadding', '');
            if (_optionData.drawCalendarTitle) {
                tableObj.appendChild(_thead);
            }
            tableObj.appendChild(_tbody);
            return tableObj;
        }

        function initMonthUI() {
            initMonthHead();
            initMonthBody(6);
        }

        function initMonthHead() {
            var thead = _thead;
            var headAry = ['日', '一', '二', '三', '四', '五', '六'];

            var tr = document.createElement("tr");
            for (var i = 0; i < headAry.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = headAry[i];
                if (i == 6 || i == 0) {
                    th.classList.add("week_day");
                }
                tr.appendChild(th);
            }

            thead.appendChild(tr);
            return thead;
        }


        function initMonthBody(inum) {
            _allTd = [];
            _tbody.innerHTML = "";
            for (var i = 0; i < inum; i++) {
                var tr = document.createElement("tr");
                for (var j = 0; j < 7; j++) {
                    var td = document.createElement("td");
                    td.innerHTML = "";
                    if (j == 6 || j == 0) {
                        td.classList.add("week_day");
                    }
                    _allTd.push(td);
                    tr.appendChild(td);
                }
                _tbody.append(tr);
            }
        }

        function refreshMonthData() {
            // 获取默认日期的年月
            var year = _viewDate.getFullYear();
            var month = _viewDate.getMonth() + 1;

            // 获取默认年月的1号是星期几
            var week = new Date(year, month - 1, 1).getDay();
            // 获取当前月最后一天的日期, 即可知道该月有多少天
            var days = new Date(year, month, 0).getDate();


            var selectday = 0;

            if (_selectDate && (_selectDate.getFullYear() == _viewDate.getFullYear()) && (_selectDate.getMonth() == _viewDate.getMonth())) {
                selectday = _selectDate.getDate();
            } else {
                selectday = _optionData.viewAutoSelectDay;
                if (selectday < 0) {
                    selectday = days + selectday + 1;
                }
            }


            if (!_optionData.fixRowsBool || !_optionData.drawValidDay) {
                initMonthBody((week + days) / 7);
            }

            // 遍历一遍全部单元格
            for (var i = 0; i < _allTd.length; i++) {
                var tdObj = _allTd[i];
                // 在下一次存放日期前先清除对应单元格
                tdObj.innerHTML = "";
                var lunarObj = _self.solar2lunar(year, month, i - week + 1);
                var tdclassAry = [];
                tdclassAry.push("common_day");
                if (i < week) {
                    tdclassAry.push("valid_day");
                    if (!_optionData.drawValidDay) { continue; }
                } else if (i >= week + days) {
                    tdclassAry.push("valid_day");
                    if (!_optionData.drawValidDay) { continue; }
                } else {
                }
                if (selectday > 0 && selectday == i - week + 1) {
                    _selectDate = new Date(lunarObj.cYear, lunarObj.cMonth - 1, lunarObj.cDay);
                    tdclassAry.push("select_day");
                    _self.onMonthDaySelectEvent(_selectDate);
                }

                var lanarStr = lunarObj.IDayCn;
                var classStr = "";
                if (lanarStr == "初一") {
                    lanarStr = lunarObj.IMonthCn;
                }

                if (lunarObj.festival) {
                    classStr = "festival_day";
                    lanarStr = lunarObj.festival.split(" ")[0];
                }
                if (lunarObj.lunarFestival) {
                    classStr = "lunarfestival_day";
                    lanarStr = lunarObj.lunarFestival;
                }

                if (lunarObj.isTerm) {
                    classStr = "solarterm_day";
                    lanarStr = lunarObj.Term;
                }

                lanarStr = '<div class="lanar_day ' + classStr + '">' + lanarStr + '</div>';

                if (lunarObj.isToday) {
                    tdObj.classList.add("today_day");
                }

                var strAry = [];
                var curDate = new Date(lunarObj.cYear, lunarObj.cMonth - 1, lunarObj.cDay);
                var tagStr = _self.onMonthDayTagTextEvent(curDate);
                if (tagStr && tagStr != "") {
                    strAry.push('<div class="monthday_tag_num">' + tagStr + '</div>');
                }

                strAry.push('<div>' + lunarObj.cDay + '</div>');
                if (!_optionData.useSimpleDayView) {
                    strAry.push(lanarStr);
                }

                tdObj.setAttribute("data-date", curDate.getTime());
                tdObj.innerHTML = '<div class="' + tdclassAry.join(" ") + '">' + strAry.join("") + '</div>';

                tdObj.style.cssText = "cursor: pointer;";
                tdObj.onclick = function () {
                    _self.execMonthDayClick(this.getAttribute("data-date"));
                };
            }
        }

        this._init = function () {
            if (!_viewDate) {
                this.setViewDate(new Date());
            }
            initHeader();
            initMonthUI();
        };

        this._init();
    }

    static createCalendarUI(calendar, dest, options) {
        let obj = new TCalendarUI("");
        obj.setCalendar(calendar);
        
        if (options) {
            obj.setOptions(options);
        }
        if (dest) {
            obj.view(dest);
        }
    
        return obj;
    };
}

const defaultCalendarCssStyle =
    `
    /* 导航栏样式 */
    .calendarhead {
        height: 30px;
        line-height: 30px;
        text-align: right;
        background-color: #fcfcfc;
        padding: 0 10px;
    }

    .calendarhead span {
        cursor: pointer;
    }
    .calendarhead .navLabel {
        color: #a02525;
    }

    .calendarhead .preYear {
        padding: 0px;
    }

    .calendarhead .nextYear {
        padding: 0px;
        padding-right: 20px;
    }

    .calendarhead .preMonth {
        padding: 0px;
    }

    .calendarhead .nextMonth {
        padding: 0px;
    }

    .calendarhead .yearMonthTitle {
        padding: 0px 4px;
    }

    .calendarhead .yearMonthTitleOther {
        position: relative;
        float: left;
    }

    .calendarhead .todayLabel {
        position: relative;
        float: right;
        top: 6px;
        right: 5px;
        color:  #a02525;
        text-align: center;
        box-shadow: 0 0 0 1px #a02525;
        border-radius: 100%;
        width: 16px;
        height: 16px;
        line-height: 16px;
    }

    /* 设置表格样式 */
    .calendarmonth {
        background-color: #fcfcfc;
        border: 0;
        padding: 0;
        margin: 0;
        border-right: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
        width: 100%;
    }

    .calendarmonth td {
        /* 给单元格设置表格线 */
        border-left: 1px solid #efefef;
        border-top: 1px solid #efefef;
        text-align: center;
        width: 14%;
        font-size: 12px;
    }

    .calendarmonth th {
        background-color: #E6F0FA;
        background-color: #17a;
        color: #fff;
        font-size: 14px;
        height: 35px;
    }

    .calendarmonth .valid_day {
        background-color: gainsboro;
        opacity: 0.4;
        /* 降低透明度，增强朦胧效果 */
    }

    .calendarmonth .week_day {
        color: firebrick;
        /* font-weight: bold; */
    }

    .calendarmonth .lanar_day {
        color: black;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .calendarmonth .festival_day {
        color: cornflowerblue;
        font-weight: bold;
    }

    .calendarmonth .lunarfestival_day {
        color: #55e8df;
        font-weight: bold;
    }

    .calendarmonth .solarterm_day {
        color: #55e8df;
        font-weight: bold;
    }

    .calendarmonth .today_day {
        background-color: crimson;
        color: #fff;
    }

    .calendarmonth .select_day {
        border: 2px solid crimson;
    }

    .calendarmonth .common_day {
        position: relative;
        padding: 5px;
    }

    .calendarmonth .monthday_tag_num {
        position:absolute;
        float: right;
        right: 2%;
        top: 1px;
        font-size: 70%;
        color: #fff;
        background-color: #a02525;
        text-align: center;
        box-shadow: 0 0 0 1px #fff;
        min-width: 14px;
        height: 14px;
        line-height: 14px;
        border-radius: 100%;
        /* font-weight: bold; */
        font-style: italic;
    }
    `;


export {TCalendarUI}; 
    
