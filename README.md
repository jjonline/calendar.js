# calendar.js

中国农历（阴阳历）和西元阳历即公历互转 JavaScript 库。

## 介绍

[1900 年至 2100 年公历、农历互转 JS 代码](https://blog.jjonline.cn/userInterFace/173.html)

## 使用

#### # 示例

```js
// 公历 → 农历
calendar.solar2lunar(1987, 11, 01);

// 农历 → 公历
calendar.lunar2solar(1987, 9, 10);
```

#### # 返回值
+ 类型：`object`
+ 描述：

| 属性 | 类型 | 说明 |
|:---|:---|:---|
| date | `string` | 公历日期 |
| lunarDate | `string` | 农历日期 |
| festival | `string \| null` | 公历节日 |
| lunarFestival | `string \| null` | 农历节日 |
| lYear | `number` | 农历年 |
| lMonth | `number` | 农历月 |
| lDay | `number` | 农历日 |
| Animal | `string` | 生肖 |
| IMonthCn | `string` | 农历月（中文） |
| IDayCn | `string` | 农历日（中文） |
| cYear | `number` | 公历年 |
| cMonth | `number` | 公历月 |
| cDay | `number` | 公历日 |
| gzYear | `string` | 干支年 |
| gzMonth | `string` | 干支月 |
| gzDay | `string` | 干支日 |
| isToday | `boolean` | 是否今日 |
| isLeap | `boolean` | 是否闰月 |
| nWeek | `number` | 星期 |
| ncWeek | `string` | 星期（中文） |
| isTerm | `boolean` | 是否节气日 |
| Term | `string \| null` | 节气 |
| astro | `string` | 星座 |
