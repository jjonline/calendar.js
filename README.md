# calendar.js

中国农历（阴阳历）和西元阳历即公历互转JavaScript库

**在线示例**: [https://jjonline.github.io/calendar.js/demo.html](https://jjonline.github.io/calendar.js/demo.html)

# 介绍

[https://blog.jjonline.cn/userInterFace/173.html](https://blog.jjonline.cn/userInterFace/173.html)

# 使用

* npm包： `npm i js-calendar-converter`
* link: [https://www.npmjs.com/package/js-calendar-converter](https://www.npmjs.com/package/js-calendar-converter)

代码库附带有`demo.html`简单示例调用文件。

````
/** 公历年月日转农历数据 返回json */
calendar.solar2lunar(1987,11,01);
/** 农历年月日转公历年月日 */
calendar.lunar2solar(1987,9,10);
/**调用以上方法后返回类似如下object（json）具体以上就不需要解释了吧！*/
/** c开头的是公历各属性值 l开头的自然就是农历咯 gz开头的就是天干地支纪年的数据啦~ */
{
    Animal: "兔",
    IDayCn: "初十",
    IMonthCn: "九月",
    Term: null,
    astro: "天蝎座",
    cDay: 1,
    cMonth: 11,
    cYear: 1987,
    gzDay: "甲寅",
    gzMonth: "庚戌",
    gzYear: "丁卯",
    isLeap: false,
    isTerm: false,
    isToday: false,
    lDay: 10,
    lMonth: 9,
    lYear: 1987,
    nWeek: 7,
    ncWeek: "星期日"
}
/** 该代码还有其他可以调用的方法，请自己查看代码中的详细注释 */
````
