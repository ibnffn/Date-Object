const date = new Date();
console.log(date);
document.getElementById("demo").innerHTML = date;
// result
// Sat Aug 19 2023 19:04:15 GMT+0700 (Western Indonesia Time)

const dates = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(date);
// result
// Sat Aug 19 2023 19:18:36 GMT+0700 (Western Indonesia Time)

// contoh = jika contoh tanggal ada seperti ini pada hari =
// (2018,5,35)
// maka untuk hari pada index ke 2 "35" akan naik 1 bulan (juli) dan menjadi tanggal 5 juli contoh :
let date1 = new Date(2019, 5, 35);
console.log(date1);
// result   +
// Fri Jul 05 2019 00:00:00 GMT+0700 (Western Indonesia Time)

// Date String
const date2 = new Date("October 13,2014 11:13:00");
console.log(date2);
// Mon Oct 13 2014 11:13:00 GMT+0700 (Western Indonesia Time)

// Miliseconds
const date3 = new Date(100000000000);
console.log(date3);
// result
// Sat Mar 03 1973 16:46:40 GMT+0700 (Western Indonesia Time)

// Date Method - toUTCString()
var date4 = new Date();
console.log(date4.toUTCString());
// result
// Sat, 19 Aug 2023 12:30:44 GMT

// Date method - toDateString
const date5 = new Date();
console.log(date4.toDateString());
// result
// Sat Aug 19 2023

// Date Method - toIsoString()
var date6 = new Date();
console.log(date6.toDateString());
// Sat Aug 19 2023

// Date Method - toISOString()
var date7 = new Date();
console.log(date7.toISOString());
// result
// Sat Aug 19 2023

// INPUT DATE - Sintaks ISO 8601
const date8 = new Date("2015-03-25");
console.log(date8);
// result
// Wed Mar 25 2015 07:00:00 GMT+0700 (Western Indonesia Time)

const date9 = new Date("2015-10-25");
console.log(date9);
// result
// Sun Oct 25 2015 07:00:00 GMT+0700 (Western Indonesia Time)

// Tanggal ISO dapat ditulis tanpa menentukan hari(YYYY-MM):
const date10 = new Date("2015-03");
console.log(date10);
// result
// Sun Mar 01 2015 07:00:00 GMT+0700 (Western Indonesia Time)

// Tanggal ISO dapat ditulis tanpa bulan dan hari (YYYY):
const date11 = new Date("2015");
console.log(date11);
// result
// Thu Jan 01 2015 07:00:00 GMT+0700 (Western Indonesia Time)

const date12 = new Date("2015-03-25T12:00:00z"); // - Tanggal dan waktu dipisahkan dengan huruf besar T (time).
console.log(date12);
// result
// Wed Mar 25 2015 19:00:00 GMT+0700 (Western Indonesia Time)

const date13 = new Date("2019-10-24T10:00:10Z"); // - Waktu UTC/GMT didefinisikan dengan huruf kapital Z(Zone).
console.log(date13);
// result
// Thu Oct 24 2019 17:00:10 GMT+0700 (Western Indonesia Time)

// Short Date ditulis dengan sintaks "MM/DD/YYYY" seperti ini:
const date14 = new Date("03/25/2015");
console.log(date14);
// result
// Wed Mar 25 2015 00:00:00 GMT+0700 (Western Indonesia Time)

const date15 = new Date("2015/03/25");
console.log(date15);
// result
// Wed Mar 25 2015 00:00:00 GMT+0700 (Western Indonesia Time)

// Long Date
// * Dan,bulan bisa ditulis lengkap(Januari),atau disingkat(Jan):
// * Koma diabaikan.Nama tidak peka huruf besar/kecil:

const date16 = new Date("jan 25 2015");
const date17 = new Date("JAN,25,2015");
console.log(date16);
console.log(date17);
document.getElementById("demo1").innerHTML = date16;
document.getElementById("demo2").innerHTML = date17;
// result
// Sun Jan 25 2015
// Sun Jan 25 2015

// Date Get Method
// * Metode ini dapat digunakan untuk mendapatkan informasi dari objek tanggal:

// Method 			Description
// getFullYear()		get the year as a four digit number(yyyy)
// getMonth()		    get the month as a number(0-11)
// getDate()		    get the day as a number(1-31)
// getHours()		    get the hour(0-23)
// getMinutes()		    get the minute(0-59)
// getSeconds()		    get the second(0-59)
// getMilliseconds()	get the milisecond(0-999)
// getTime()		    get the time(milliseconds since january 1,1970)
// getDay()		        get the weekday as a number(0-6)
// Date.now()		    get the tim.ECMAScript 5.

// getDay
const date18 = new Date();
console.log(date18.getDay());
// result
// 6
// yang lain pun sama

// Method			    Description
// setDate()		    Set the day as a number(1-31)
// setFullYear()	    Set the year(optionally month and day)
// setHours()		    Set the hour(0-23)
// setMillionseconds()	Set the millionseconds (0-999)
// setMinutes()		    Set the minutes(0-59)
// setMonth()		    Set the month (0-11)
// setSeconds()		    Set the seconds(0-59)
// setTime()		    Set the time(milliseonds since january 1,1970)

// Data Set Method - setDate()
const date19 = new Date();
date19.setTime(10000000);
console.log(date19);
// result
// Thu Jan 01 1970 09:46:40 GMT+0700 (Western Indonesia Time)

// Data Set Method setTFullYear()
const date20 = new Date();
date20.setFullYear(2020);
console.log(date20);
// result
// Wed Aug 19 2020 20:18:24 GMT+0700 (Western Indonesia Time)

// yang lain pun sama
