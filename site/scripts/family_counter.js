/*
* Basic Count Up from Date and Time
* Author: @mrwigster / trulycode.com
*/
window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('jan,16,2018,00:00:00'); // ****** Change this line!
};
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
  days=Math.floor(difference/(60*60*1000*24)*1);
  years = Math.floor(days / 365);
  if (years > 1){ days = days - (years * 365)}
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
  document.getElementById('years').firstChild.nodeValue = years;
  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}
