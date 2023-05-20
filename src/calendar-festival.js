import { lFestival, festival } from './constant/Festival'

function loadDefaultFestival(calendarFestival){
    for (let key in festival) {
        calendarFestival.addSolar(key, festival[key].title);
    }

    for (let key in lFestival) {
        calendarFestival.addLunar(key, lFestival[key].title);
    }

    var weekFestival = new Array(
        "0520*母亲节",
        "0530 全国助残日",
        "0630*父亲节",
        "0932 和平日",
        "0940 聋人节"
    );
    for (let i in weekFestival) {
        calendarFestival.addWeek(weekFestival[i]);
    }
}

class TCalendarFestival {
    constructor() {
        var _self = this;
        var _festival = getNullFestiVal();

        this.clearSolar = function(isWeek) {
            _festival.solar = {}; 
            if (isWeek && isWeek === true) {
                this.clearWeek();
            }
        }

        this.clearLunar = function() {
            _festival.lunar = {};
        }

        this.clearWeek = function() {
            _festival.week = {};
        }
        
        this.clear = function () {
            _festival = getNullFestiVal();
        };

        this.getFestival = function () {
            return _festival;
        };

        this._add = function (dateStr, name, type, prior) {
            if (/^(\d{1,2})-(\d{1,2})/.test(dateStr) == false) {
                console.log("error format: ", dateStr);
                return null;
            }
            let obj = _festival[type][dateStr];
            if (obj) {
                let ary = obj.list;
                let bFind = false;
                for (let i = 0; i < ary.length; i++) {
                    if (ary[i] === name) {
                        bFind = true;
                        break;
                    }
                }
                if (!bFind) {
                    if (prior && prior === true) {
                        obj.list.unshift(name);
                    } else {
                        obj.list.push(name);
                    }

                }
            } else {
                _festival[type][dateStr] = { list: [name] };
            }
            return _festival[type][dateStr];
        };


        /**
         * 按月的几个星期几计算节日
         *  格式 第几月(2位数)+第几周(1位)+星期几(1位)+标志位(1位)+名称
         * example: addWeek("0520*母亲节");
         * example: addWeek("0940 聋人节");
        */
        this.addWeek = function (formatString) {
            let obj = convertWeekFestivalStrToObj(formatString);
            if (obj) {
                _festival.week[obj.name] = obj;
            }
            return obj;
        };

        /**
         * example: addSolar("5-1","劳动节");
        */
        this.addSolar = function (formatStr, name) {
            return this._add(formatStr, name, 'solar', arguments[2]);
        };

        /**
         * example: addLunar("8-15","中秋节");
         */
        this.addLunar = function (formatStr, name) {
            return this._add(formatStr, name, 'lunar', arguments[2]);
        };

        /**
         *
         * @param {*} y
         * @param {*} m
         * @param {*} d
         * @param {这个月的最大天数} mdays
         * @returns 多个以空格分隔
         */
        this.getLunarText = function (y, m, d, mdays) {
            var result = [];
            var festivalDate = m + '-' + d;
            var lastDayDate;
            if (mdays) {
                //当月只有29天时,对有设置为第30天的日期进行特殊处理 
                if (mdays === 29) {
                    if (d === 29) {
                        lastDayDate = m + "-30";
                    }
                }
            }

            var obj = _festival.lunar[festivalDate];
            if (obj) {
                result = obj.list;
            }
            if (lastDayDate) {
                var lastObj = _festival.lunar[lastDayDate];
                if (lastObj) {
                    result = result.concat(lastObj.list);
                }
            }

            if (result.length > 0) {
                return result.join(" ");
            } else {
                return null;
            }
        };

        /**
         *
         * @param {*} y
         * @param {*} m
         * @param {*} d
         * @returns 多个以空格分隔
         */
        this.getSolorText = function (y, m, d) {
            var result = [];

            var festivalDate = m + '-' + d;
            var obj = _festival.solar[festivalDate];
            if (obj) {
                result = obj.list;
            }

            //处理按第几个星期计算的节日
            //获取默认年月的1号是星期几
            var firstWeek = new Date(y, m - 1, 1).getDay();
            for (let i in _festival.week) {
                let wObj = _festival.week[i];
                if (wObj && wObj.month == m) {
                    let iWeek = wObj.iWeek;
                    let iday = wObj.weekDay;
                    if ((((firstWeek > iday) ? 7 : 0) + 7 * (iWeek - 1) + iday - firstWeek) == d - 1) {
                        if (wObj.flag == "*") {
                            result.unshift(wObj.name);
                        } else {
                            result.push(wObj.name);
                        }
                    }
                }
            }
            if (result.length > 0) {
                return result.join(" ");
            } else {
                return null;
            }
        };

        this.getMonthWeek = function (y, m, d) {
            var date = new Date(parseInt(y), parseInt(m) - 1, d), w = date.getDay(), d = date.getDate();
            return Math.ceil((d + 6 - w) / 7);
        };

        this.getYearWeek = function (y, m, d) {
            var date1 = new Date(y, parseInt(m) - 1, d), date2 = new Date(y, 0, 1), d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
            return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);
        };

        function convertWeekFestivalStrToObj(str) {
            let obj = null;
            let ret = /^(\d{2})(\d)(\d)([\s\*])(.+)$/.exec(str);
            if (ret) {
                obj = {
                    name: ret[5],
                    flag: ret[4],
                    month: Number(ret[1]),
                    iWeek: Number(ret[2]),
                    weekDay: Number(ret[3])
                };
            }
            return obj;
        };

        function getNullFestiVal() {
            /*example
            {
                solar: {
                    "1-1": {"list": ["元旦节"] }
                },
                lunar: {
                    "8-15": {"list": ["中秋节"]}
                },
                week: {
                    "母亲节": {name: '母亲节', flag: '*', month: 5, iWeek: 2, weekDay: 0}
                }
            }
            */
            return {
                solar: {},
                lunar: {},
                week: {}
            };
        };

        loadDefaultFestival(this);
    };
}

export {TCalendarFestival}