var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
//1900-1909
0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
//1910-1919
0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
//1920-1929
0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
//1930-1939
0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
//1940-1949
0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
//1950-1959
0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
//1960-1969
0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
//1970-1979
0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
//1980-1989
0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
//1990-1999
0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
//2000-2009
0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
//2010-2019
0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
//2020-2029
0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
//2030-2039
0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
//2040-2049
/**Add By JJonline@JJonline.Cn**/
0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
//2050-2059
0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
//2060-2069
0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
//2070-2079
0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
//2080-2089
0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
//2090-2099
0x0d520]; //2100

var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var Gan = ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"];
var Zhi = ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"];

var ChineseZodiac = ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"];

var festival = {
  '1-1': {
    title: '元旦节'
  },
  '2-14': {
    title: '情人节'
  },
  '5-1': {
    title: '劳动节'
  },
  '5-4': {
    title: '青年节'
  },
  '6-1': {
    title: '儿童节'
  },
  '9-10': {
    title: '教师节'
  },
  '10-1': {
    title: '国庆节'
  },
  '12-25': {
    title: '圣诞节'
  },
  '3-8': {
    title: '妇女节'
  },
  '3-12': {
    title: '植树节'
  },
  '4-1': {
    title: '愚人节'
  },
  '5-12': {
    title: '护士节'
  },
  '7-1': {
    title: '建党节'
  },
  '8-1': {
    title: '建军节'
  },
  '12-24': {
    title: '平安夜'
  }
};
var lFestival = {
  '12-30': {
    title: '除夕'
  },
  '1-1': {
    title: '春节'
  },
  '1-15': {
    title: '元宵节'
  },
  '2-2': {
    title: '龙抬头'
  },
  '5-5': {
    title: '端午节'
  },
  '7-7': {
    title: '七夕节'
  },
  '7-15': {
    title: '中元节'
  },
  '8-15': {
    title: '中秋节'
  },
  '9-9': {
    title: '重阳节'
  },
  '10-1': {
    title: '寒衣节'
  },
  '10-15': {
    title: '下元节'
  },
  '12-8': {
    title: '腊八节'
  },
  '12-23': {
    title: '北方小年'
  },
  '12-24': {
    title: '南方小年'
  }
};

var solarTerm = ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"];
var sTermInfo = ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'];

var nStr1 = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"];
var nStr2 = ["\u521D", "\u5341", "\u5EFF", "\u5345"];
var nStr3 = ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"];

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function loadDefaultFestival(calendarFestival) {
  for (var key in festival) {
    calendarFestival.addSolar(key, festival[key].title);
  }
  for (var _key in lFestival) {
    calendarFestival.addLunar(_key, lFestival[_key].title);
  }
  var weekFestival = new Array("0520*母亲节", "0530 全国助残日", "0630*父亲节", "0932 和平日", "0940 聋人节");
  for (var i in weekFestival) {
    calendarFestival.addWeek(weekFestival[i]);
  }
}
var TCalendarFestival = /*#__PURE__*/_createClass(function TCalendarFestival() {
  _classCallCheck(this, TCalendarFestival);
  var _festival = getNullFestiVal();
  this.clearSolar = function (isWeek) {
    _festival.solar = {};
    if (isWeek && isWeek === true) {
      this.clearWeek();
    }
  };
  this.clearLunar = function () {
    _festival.lunar = {};
  };
  this.clearWeek = function () {
    _festival.week = {};
  };
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
    var obj = _festival[type][dateStr];
    if (obj) {
      var ary = obj.list;
      var bFind = false;
      for (var i = 0; i < ary.length; i++) {
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
      _festival[type][dateStr] = {
        list: [name]
      };
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
    var obj = convertWeekFestivalStrToObj(formatString);
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
    for (var i in _festival.week) {
      var wObj = _festival.week[i];
      if (wObj && wObj.month == m) {
        var iWeek = wObj.iWeek;
        var iday = wObj.weekDay;
        if ((firstWeek > iday ? 7 : 0) + 7 * (iWeek - 1) + iday - firstWeek == d - 1) {
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
    var date = new Date(parseInt(y), parseInt(m) - 1, d),
      w = date.getDay(),
      d = date.getDate();
    return Math.ceil((d + 6 - w) / 7);
  };
  this.getYearWeek = function (y, m, d) {
    var date1 = new Date(y, parseInt(m) - 1, d),
      date2 = new Date(y, 0, 1),
      d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
    return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
  };
  function convertWeekFestivalStrToObj(str) {
    var obj = null;
    var ret = /^(\d{2})(\d)(\d)([\s\*])(.+)$/.exec(str);
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
  }
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
  }
  loadDefaultFestival(this);
});

var TCalendarWapper = /*#__PURE__*/_createClass(function TCalendarWapper(jsname) {
  _classCallCheck(this, TCalendarWapper);
  var _calendarFestival = new TCalendarFestival('');
  var _calendar;
  this.setCalendar = function (value) {
    _calendar = value;
  };
  this.getCalendar = function () {
    return _calendar;
  };
  this.getFestival = function () {
    return _calendarFestival;
  };
  this.solar2lunar = function solar2lunar(y, m, d) {
    var result = _calendar.solar2lunar(y, m, d);
    //console.log(result);
    return processFestival(result);
  };
  this.lunar2solar = function lunar2solar(y, m, d, isLeapMonth) {
    var result = _calendar.lunar2solar(y, m, d, isLeapMonth);
    return processFestival(result);
  };
  this.format = function (formatText, date) {
    var dateObj = new Date();
    if (date) {
      dateObj = date;
    }
    var o = {
      "y+": dateObj.getFullYear(),
      "M+": dateObj.getMonth() + 1,
      "d+": dateObj.getDate(),
      "h+": dateObj.getHours(),
      "m+": dateObj.getMinutes(),
      "s+": dateObj.getSeconds(),
      "q+": Math.floor((dateObj.getMonth() + 3) / 3),
      "S": dateObj.getMilliseconds() //millisecond
    };

    for (var k in o) {
      var ret = new RegExp('(' + k + ')').exec(formatText);
      if (ret) {
        if (/(y+)/.test(formatText)) {
          formatText = formatText.replace(ret[1], (o[k] + "").substring(4 - ret[1].length));
        } else {
          formatText = formatText.replace(ret[1], ret[1].length === 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
        }
      }
    }
    return formatText;
  };
  function processFestival(data) {
    data.festival = _calendarFestival.getSolorText(data.cYear, data.cMonth, data.cDay);
    data.lunarFestival = _calendarFestival.getLunarText(data.lYear, data.lMonth, data.lDay, _calendar.monthDays(data.lYear, data.lMonth));
    return data;
  }
});

function createStyleNode(cssText) {
  var style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.appendChild(document.createTextNode(cssText));
  return style;
}
function addHeadStyle(styleText) {
  var doc = document;
  var headObj = doc.getElementsByTagName("head")[0];
  headObj.appendChild(createStyleNode(styleText));
}
function extend(obj, ext) {
  var i,
    l,
    name,
    args = arguments,
    value;
  for (i = 1, l = args.length; i < l; i++) {
    ext = args[i];
    for (name in ext) {
      if (ext.hasOwnProperty(name)) {
        value = ext[name];
        if (typeof value !== 'undefined') {
          obj[name] = value;
        }
      }
    }
  }
  return obj;
}
var TCalendarUI = /*#__PURE__*/function () {
  function TCalendarUI(jsname) {
    _classCallCheck(this, TCalendarUI);
    var _self = this;
    var _viewDate; //显示日期
    var _selectDate = null; //选择日期
    var _header = document.createElement("div");
    var _thead = document.createElement("thead");
    var _tbody = document.createElement("tbody");
    var _yearMonthTitle;
    var _otherTitle;
    var _allTd = [];
    var _optionData = {
      drawValidDay: true,
      /*显示不是本月的天*/
      drawHeaderNav: true,
      /*显示导航标题*/
      drawCalendarTitle: true,
      /*显示日历标题*/
      fixRowsBool: false,
      /*是否显示固定的行数,只显示当月天数时无效*/
      autoSelectToday: false,
      /*是否自动选择今天*/
      viewAutoSelectDay: 0,
      /*当前显示没有选择时自动选择那一天, 0为不选择, 负数为倒数第几天*/
      enabelJsLoadStyle: true,
      /*是否js加载缺省样式,自定义样式文件时,该选项应为false*/
      calendarStyle: "default",
      /*样式类别*/
      useSimpleDayView: false /*使用简单的天显示*/
    };

    var _calendarObj = new TCalendarWapper("");
    this.defaultStyle = defaultCalendarCssStyle;
    this.solar2lunar = _calendarObj.solar2lunar;
    this.lunar2solar = _calendarObj.lunar2solar;
    this.getFestival = function () {
      return _calendarObj.getFestival();
    };
    this.setCalendar = function (value) {
      _calendarObj.setCalendar(value);
    };
    this.getCalendar = function () {
      return _calendarObj.getCalendar();
    };
    this.view = function (dest) {
      var obj;
      if (_typeof(dest) === "object") {
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
      if (arguments.length < 1) ; else if (value instanceof Date) {
        _viewDate = new Date(value.getFullYear(), value.getMonth());
      } else {
        if (value !== "today") {
          var year = _viewDate.getFullYear();
          var month = _viewDate.getMonth();
          switch (value) {
            case "y+":
              year++;
              break;
            case "y-":
              year--;
              break;
            case "m+":
              month++;
              break;
            case "m-":
              month--;
              break;
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
      if (_selectDate && _selectDate.getFullYear() == _viewDate.getFullYear() && _selectDate.getMonth() == _viewDate.getMonth()) {
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
          if (!_optionData.drawValidDay) {
            continue;
          }
        } else if (i >= week + days) {
          tdclassAry.push("valid_day");
          if (!_optionData.drawValidDay) {
            continue;
          }
        } else ;
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
  _createClass(TCalendarUI, null, [{
    key: "createCalendarUI",
    value: function createCalendarUI(calendar, dest, options) {
      var obj = new TCalendarUI();
      obj.setCalendar(calendar);
      if (options) {
        obj.setOptions(options);
      }
      if (dest) {
        obj.view(dest);
      }
      return obj;
    }
  }]);
  return TCalendarUI;
}();
var defaultCalendarCssStyle = "\n    /* \u5BFC\u822A\u680F\u6837\u5F0F */\n    .calendarhead {\n        height: 30px;\n        line-height: 30px;\n        text-align: right;\n        background-color: #fcfcfc;\n        padding: 0 10px;\n    }\n\n    .calendarhead span {\n        cursor: pointer;\n    }\n    .calendarhead .navLabel {\n        color: #a02525;\n    }\n\n    .calendarhead .preYear {\n        padding: 0px;\n    }\n\n    .calendarhead .nextYear {\n        padding: 0px;\n        padding-right: 20px;\n    }\n\n    .calendarhead .preMonth {\n        padding: 0px;\n    }\n\n    .calendarhead .nextMonth {\n        padding: 0px;\n    }\n\n    .calendarhead .yearMonthTitle {\n        padding: 0px 4px;\n    }\n\n    .calendarhead .yearMonthTitleOther {\n        position: relative;\n        float: left;\n    }\n\n    .calendarhead .todayLabel {\n        position: relative;\n        float: right;\n        top: 6px;\n        right: 5px;\n        color:  #a02525;\n        text-align: center;\n        box-shadow: 0 0 0 1px #a02525;\n        border-radius: 100%;\n        width: 16px;\n        height: 16px;\n        line-height: 16px;\n    }\n\n    /* \u8BBE\u7F6E\u8868\u683C\u6837\u5F0F */\n    .calendarmonth {\n        background-color: #fcfcfc;\n        border: 0;\n        padding: 0;\n        margin: 0;\n        border-right: 1px solid #efefef;\n        border-bottom: 1px solid #efefef;\n        width: 100%;\n    }\n\n    .calendarmonth td {\n        /* \u7ED9\u5355\u5143\u683C\u8BBE\u7F6E\u8868\u683C\u7EBF */\n        border-left: 1px solid #efefef;\n        border-top: 1px solid #efefef;\n        text-align: center;\n        width: 14%;\n        font-size: 12px;\n    }\n\n    .calendarmonth th {\n        background-color: #E6F0FA;\n        background-color: #17a;\n        color: #fff;\n        font-size: 14px;\n        height: 35px;\n    }\n\n    .calendarmonth .valid_day {\n        background-color: gainsboro;\n        opacity: 0.4;\n        /* \u964D\u4F4E\u900F\u660E\u5EA6\uFF0C\u589E\u5F3A\u6726\u80E7\u6548\u679C */\n    }\n\n    .calendarmonth .week_day {\n        color: firebrick;\n        /* font-weight: bold; */\n    }\n\n    .calendarmonth .lanar_day {\n        color: black;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n    }\n\n    .calendarmonth .festival_day {\n        color: cornflowerblue;\n        font-weight: bold;\n    }\n\n    .calendarmonth .lunarfestival_day {\n        color: #55e8df;\n        font-weight: bold;\n    }\n\n    .calendarmonth .solarterm_day {\n        color: #55e8df;\n        font-weight: bold;\n    }\n\n    .calendarmonth .today_day {\n        background-color: crimson;\n        color: #fff;\n    }\n\n    .calendarmonth .select_day {\n        border: 2px solid crimson;\n    }\n\n    .calendarmonth .common_day {\n        position: relative;\n        padding: 5px;\n    }\n\n    .calendarmonth .monthday_tag_num {\n        position:absolute;\n        float: right;\n        right: 2%;\n        top: 1px;\n        font-size: 70%;\n        color: #fff;\n        background-color: #a02525;\n        text-align: center;\n        box-shadow: 0 0 0 1px #fff;\n        min-width: 14px;\n        height: 14px;\n        line-height: 14px;\n        border-radius: 100%;\n        /* font-weight: bold; */\n        font-style: italic;\n    }\n    ";

/**
 * @1900-2100区间内的公历、农历互转
 * @charset UTF-8
 * @Author  Jea杨(JJonline@JJonline.Cn)
 * @Time    2014-7-21
 * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
 * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
 * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
 * @Version 1.0.3
 * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
 * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
 */

var calendar = {
  /**
   * 农历1900-2100的润大小信息表
   * @Array Of Property
   * @return Hex
   */
  lunarInfo: lunarInfo,
  /**
   * 公历每个月份的天数普通表
   * @Array Of Property
   * @return Number
   */
  solarMonth: solarMonth,
  /**
   * 天干地支之天干速查表
   * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
   * @return Cn string
   */
  Gan: Gan,
  /**
   * 天干地支之地支速查表
   * @Array Of Property
   * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
   * @return Cn string
   */
  Zhi: Zhi,
  /**
   * 天干地支之地支速查表<=>生肖
   * @Array Of Property
   * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
   * @return Cn string
   */
  Animals: ChineseZodiac,
  /**
   * 阳历节日
   */
  festival: festival,
  /**
   * 农历节日
   */
  lFestival: lFestival,
  /**
   * 24节气速查表
   * @Array Of Property
   * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
   * @return Cn string
   */
  solarTerm: solarTerm,
  /**
   * 1900-2100各年的24节气日期速查表
   * @Array Of Property
   * @return 0x string For splice
   */
  sTermInfo: sTermInfo,
  /**
   * 数字转中文速查表
   * @Array Of Property
   * @trans ['日','一','二','三','四','五','六','七','八','九','十']
   * @return Cn string
   */
  nStr1: nStr1,
  /**
   * 日期转农历称呼速查表
   * @Array Of Property
   * @trans ['初','十','廿','卅']
   * @return Cn string
   */
  nStr2: nStr2,
  /**
   * 月份转农历称呼速查表
   * @Array Of Property
   * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
   * @return Cn string
   */
  nStr3: nStr3,
  /**
   * 返回默认定义的阳历节日
   */
  getFestival: function getFestival() {
    return this.festival;
  },
  /**
   * 返回默认定义的内容里节日
   */
  getLunarFestival: function getLunarFestival() {
    return this.lFestival;
  },
  /**
   *
   * @param param {Object} 按照festival的格式输入数据，设置阳历节日
   */
  setFestival: function setFestival() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.festival = param;
  },
  /**
   *
   * @param param {Object} 按照lFestival的格式输入数据，设置农历节日
   */
  setLunarFestival: function setLunarFestival() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.lFestival = param;
  },
  /**
   * 返回农历y年一整年的总天数
   * @param y lunar Year
   * @return Number
   * @eg:var count = calendar.lYearDays(1987) ;//count=387
   */
  lYearDays: function lYearDays(y) {
    var i,
      sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + this.leapDays(y);
  },
  /**
   * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
   * @param y lunar Year
   * @return Number (0-12)
   * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
   */
  leapMonth: function leapMonth(y) {
    //闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },
  /**
   * 返回农历y年闰月的天数 若该年没有闰月则返回0
   * @param y lunar Year
   * @return Number (0、29、30)
   * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
   */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },
  /**
   * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
   * @param y lunar Year
   * @param m lunar Month
   * @return Number (-1、29、30)
   * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
   */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } //月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },
  /**
   * 返回公历(!)y年m月的天数
   * @param y solar Year
   * @param m solar Month
   * @return Number (-1、28、29、30、31)
   * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
   */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } //若参数错误 返回-1
    var ms = m - 1;
    if (ms === 1) {
      //2月份的闰平规律测算后确认返回28或29
      return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },
  /**
   * 农历年份转换为干支纪年
   * @param  lYear 农历年的年份数
   * @return Cn string
   */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey === 0) ganKey = 10; //如果余数为0则为最后一个天干
    if (zhiKey === 0) zhiKey = 12; //如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },
  /**
   * 公历月、日判断所属星座
   * @param  cMonth [description]
   * @param  cDay [description]
   * @return Cn string
   */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u6469\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u6469\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; //座
  },

  /**
   * 传入offset偏移量返回干支
   * @param offset 相对甲子的偏移量
   * @return Cn string
   */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },
  /**
   * 传入公历(!)y年获得该年第n个节气的公历日期
   * @param y y公历年(1900-2100)
   * @param n n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
   * @return day Number
   * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
   */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100 || n < 1 || n > 24) {
      return -1;
    }
    var _table = this.sTermInfo[y - 1900];
    var _calcDay = [];
    for (var index = 0; index < _table.length; index += 5) {
      var chunk = parseInt('0x' + _table.substr(index, 5)).toString();
      _calcDay.push(chunk[0], chunk.substr(1, 2), chunk[3], chunk.substr(4, 2));
    }
    return parseInt(_calcDay[n - 1]);
  },
  /**
   * 传入农历数字月份返回汉语通俗表示法
   * @param m lunar month
   * @return Cn string
   * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
   */
  toChinaMonth: function toChinaMonth(m) {
    // 月 => \u6708
    if (m > 12 || m < 1) {
      return -1;
    } //若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; //加上月字
    return s;
  },
  /**
   * 传入农历日期数字返回汉字表示法
   * @param d lunar day
   * @return Cn string
   * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
   */
  toChinaDay: function toChinaDay(d) {
    //日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";
        break;
      case 20:
        s = "\u4E8C\u5341";
        break;
      case 30:
        s = "\u4E09\u5341";
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }
    return s;
  },
  /**
   * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
   * @param y year
   * @return Cn string
   * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
   */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },
  /**
   * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
   * !important! 公历参数区间1900.1.31~2100.12.31
   * @param yPara  solar year
   * @param mPara  solar month
   * @param dPara  solar day
   * @return JSON object
   * @eg:console.log(calendar.solar2lunar(1987,11,01));
   */
  solar2lunar: function solar2lunar(yPara, mPara, dPara) {
    var y = parseInt(yPara);
    var m = parseInt(mPara);
    var d = parseInt(dPara);
    //年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    //公历传参最下限
    if (y === 1900 && m === 1 && d < 31) {
      return -1;
    }

    //未传参  获得当天
    var objDate;
    if (!y) {
      objDate = new Date();
    } else {
      objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i,
      leap = 0,
      temp = 0;
    //修正ymd参数
    y = objDate.getFullYear();
    m = objDate.getMonth() + 1;
    d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }

    //是否今天
    var isTodayObj = new Date(),
      isToday = false;
    if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {
      isToday = true;
    }
    //星期几
    var nWeek = objDate.getDay(),
      cWeek = this.nStr1[nWeek];
    //数字表示周几顺应天朝周一开始的惯例
    if (nWeek === 0) {
      nWeek = 7;
    }
    //农历年
    var year = i;
    leap = this.leapMonth(i); //闰哪个月
    var isLeap = false;

    //效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      //闰月
      if (leap > 0 && i === leap + 1 && isLeap === false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year); //计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); //计算农历普通月天数
      }
      //解除闰月
      if (isLeap === true && i === leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset === 0 && leap > 0 && i === leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    //农历月
    var month = i;
    //农历日
    var day = offset + 1;
    //天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); //返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); //返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    //传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode === d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode === d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    //日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    //该日期所属的星座
    var astro = this.toAstro(m, d);
    var solarDate = y + '-' + m + '-' + d;
    var lunarDate = year + '-' + month + '-' + day;
    var festival = this.festival;
    var lFestival = this.lFestival;
    var festivalDate = m + '-' + d;
    var lunarFestivalDate = month + '-' + day;

    // bugfix https://github.com/jjonline/calendar.js/issues/29
    // 农历节日修正：农历12月小月则29号除夕，大月则30号除夕
    // 此处取巧修正：当前为农历12月29号时增加一次判断并且把lunarFestivalDate设置为12-30以正确取得除夕
    // 天朝农历节日遇闰月过前不过后的原则，此处取农历12月天数不考虑闰月
    // 农历润12月在本工具支持的200年区间内仅1574年出现
    if (month === 12 && day === 29 && this.monthDays(year, month) === 29) {
      lunarFestivalDate = '12-30';
    }
    return {
      date: solarDate,
      lunarDate: lunarDate,
      festival: festival[festivalDate] ? festival[festivalDate].title : null,
      lunarFestival: lFestival[lunarFestivalDate] ? lFestival[lunarFestivalDate].title : null,
      'lYear': year,
      'lMonth': month,
      'lDay': day,
      'Animal': this.getAnimal(year),
      'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month),
      'IDayCn': this.toChinaDay(day),
      'cYear': y,
      'cMonth': m,
      'cDay': d,
      'gzYear': gzY,
      'gzMonth': gzM,
      'gzDay': gzD,
      'isToday': isToday,
      'isLeap': isLeap,
      'nWeek': nWeek,
      'ncWeek': "\u661F\u671F" + cWeek,
      'isTerm': isTerm,
      'Term': Term,
      'astro': astro
    };
  },
  /**
   * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
   * !important! 参数区间1900.1.31~2100.12.1
   * @param y  lunar year
   * @param m  lunar month
   * @param d  lunar day
   * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
   * @return JSON object
   * @eg:console.log(calendar.lunar2solar(1987,9,10));
   */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {
    y = parseInt(y);
    m = parseInt(m);
    d = parseInt(d);
    isLeapMonth = !!isLeapMonth;
    var leapMonth = this.leapMonth(y);
    this.leapDays(y);
    if (isLeapMonth && leapMonth !== m) {
      return -1;
    } //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) {
      return -1;
    } //超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    //bugFix 2016-9-25
    //if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    } //参数合法性效验

    //计算农历的时间差
    var offset = 0;
    var i;
    for (i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0,
      isAdd = false;
    for (i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {
        //处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    //转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {
      offset += day;
    }
    //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var strap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + strap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return this.solar2lunar(cY, cM, cD);
  },
  /** */
  createUI: function createUI(dest, options) {
    return TCalendarUI.createCalendarUI(this, dest, options);
  }
};

export { calendar as default };
