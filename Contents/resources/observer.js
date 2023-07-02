// JavaScript by Peter Hayes http://www.aphayes.pwp.blueyonder.co.uk/
// Copyright 2001-2005
// This code is made freely available but please keep this notice.
// I accept no liability for any errors in my coding but please
// let me know of any errors you find. My address is on my home page.



// The observatory object holds local date and time,
// timezone correction in minutes with daylight saving if applicable,
// latitude and longitude (west is positive)

function observatory(year,month,day,hr,min,sec,tz,lat,lon) {
	this.year = year;
	this.month = month;
	this.day = day;
	this.hours = hr;
	this.minutes = min;
	this.seconds = sec;
	this.tz = tz;
	this.latitude = lat;
	this.longitude = lon;
}

// the date and time are reset when the widget is updated
var observer  = new observatory(2000,1,1,12,0,0,0,0,0);



// The Julian date at observer time

function jd(obs) {
  var j = jd0(obs.year,obs.month,obs.day);
  j+=(obs.hours+((obs.minutes+obs.tz)/60.0)+(obs.seconds/3600.0))/24;
  return j;
}

// sidereal time in hours for observer

function local_sidereal(obs) {
  var res=g_sidereal(obs.year,obs.month,obs.day);
  res+=1.00273790935*(obs.hours+(obs.minutes+obs.tz+(obs.seconds/60.0))/60.0);
  res+=obs.longitude/15.0;
  while (res < 0) res+=24.0;
  while (res > 24) res-=24.0;
  return res;
}



// radtoaa converts ra and dec to altitude and azimuth

function radtoaa(ra,dec,obs) {
  var lst=local_sidereal(obs);
  var x=cosd(15.0*(lst-ra))*cosd(dec);
  var y=sind(15.0*(lst-ra))*cosd(dec);
  var z=sind(dec);
  // rotate so z is the local zenith
  var xhor=x*sind(obs.latitude)-z*cosd(obs.latitude);
  var yhor=y;
  var zhor=x*cosd(obs.latitude)+z*sind(obs.latitude);
  var azimuth=rev(atan2d(yhor,xhor)+180.0); // so 0 degrees is north
  var altitude=atan2d(zhor,Math.sqrt(xhor*xhor+yhor*yhor));
  return new Array(altitude,azimuth);
}

