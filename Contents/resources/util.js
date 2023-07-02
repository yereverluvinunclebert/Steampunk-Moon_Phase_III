// JavaScript by Peter Hayes
// http://www.aphayes.pwp.blueyonder.co.uk/ or
// http://www.peter-hayes.freeserve.co.uk/
// Copyright 2001-2004
// This code is made freely available but please keep this notice.
// I accept no liability for any errors in my coding but please
// let me know of any errors you find. My address is on my home page.

// Utility functions

// hmstring and hmsstring converts hours to a : seperated string

function hmsstring(t) {
  var hours = Math.abs(t);
  var minutes = 60.0*(hours-Math.floor(hours));
  hours=Math.floor(hours);
  var seconds = Math.round(60.0*(minutes-Math.floor(minutes)));
  minutes=Math.floor(minutes);
  if (seconds >= 60) { minutes+=1; seconds-=60; }
  if (minutes >= 60) { hours+=1; minutes-=60; }
  if (hours >= 24) { hours-=24; }
  var hmsstr=(t < 0) ? "-" : "";
  hmsstr+=((hours < 10) ? "0" : "" )+hours;
  hmsstr+=((minutes < 10) ? ":0" : ":" )+minutes;
  hmsstr+=((seconds < 10) ? ":0" : ":" )+seconds;
  return hmsstr;
}

function hmstring(t) {
  var hours = Math.abs(t);
  var minutes = Math.round(60.0*(hours-Math.floor(hours)));
  hours=Math.floor(hours);
  if (minutes >= 60) { hours+=1; minutes-=60; }
  if (hours >= 24) { hours-=24; }
  var hmstr=(t < 0) ? "-" : "";
  hmstr+=((hours < 10) ? "0" : "" )+hours;
  hmstr+=((minutes < 10) ? ":0" : ":" )+minutes;
  return hmstr;
}

// anglestring return angle as degrees:minutes
// circle is true for range between 0 and 360 and false for -90 to +90

function anglestring(a,circle) {
  var ar=Math.round(a*60)/60;
  var deg=Math.abs(ar);
  var min=Math.round(60.0*(deg-Math.floor(deg)));
  if (min >= 60) { deg+=1; min=0; }
  var anglestr="";
  if (!circle) anglestr+=(ar < 0 ? "-" : "+");
  if (circle) anglestr+=((Math.floor(deg) < 100) ? "0" : "" );
  anglestr+=((Math.floor(deg) < 10) ? "0" : "" )+Math.floor(deg);
  anglestr+=((min < 10) ? ":0" : ":" )+(min);
  return anglestr;
}

