//Extra functions added bt Mark Crossley to support the
//Moon Phase II widget
//Feb 15, 2007

//moonPA() added by Mark Crossley for Moon Phase II widget
//Returns:
//	Position Angle of Moons axis relative to the zenith
//  PA of the bright limb relative to the zenith
//  PA of the bright limb relative to North
function moonPA(obs,ra,dec,mglat)
{
	//hour angle
	var lsd = local_sidereal(obs);
	var HA = lsd - ra;
	//parallactic angle
	HA *= 15;
	var a = sind(HA);
	var b = (tand(obs.latitude)*cosd(dec)) - (sind(dec)*cosd(HA));
	var q = atan2d(a,b);
if (debugFlg == true) { print("parallactic="+q)};
	var arrSunPos = sunRaDec(obs)
	//convert both ra's to degrees
	ra *= 15; arrSunPos[0] *= 15;
	//position angle of Moons bright limb
	a = cosd(arrSunPos[1])*sind(arrSunPos[0]-ra);
	b = sind(arrSunPos[1])*cosd(dec) - cosd(arrSunPos[1])*sind(dec)*cosd(arrSunPos[0]-ra);
	//PA of the bright limb
	var paBL = atan2d(a,b);

if (debugFlg == true) { print("paBL="+paBL) };

	//shift from anticlockwise convention to clockwise for widget
	paBL = 360 -paBL;
	//the widget images are 90 degrees out from BL PA
	paBL = paBL-90;
	//save for return this angle relative to North
	paBL_North = rev(paBL);
	//add on the the parallactic angle
	paBL = rev(paBL+q);

	//	I	- Inclination of (mean) lunar orbit to ecliptic
	var I = 1.54242;
	var d = dayno(obs.year,obs.month,obs.day,obs.hours);
	var Om2 = rev(125.045 - 1934.14 * d + 0.002071 * d * d + d * d * d/450000);
	var oblecl = 23.4393-3.563E-7*d;

	var X = sind(I) * sind(Om2);
	var Y = sind(I) * cosd(Om2) * cosd(oblecl) - cosd(I) * sind(oblecl);
	var W = atan2d(X, Y);
	var A = Math.sqrt(X*X + Y*Y) * cosd(ra - W);
	var paAx = asind(A / cosd(mglat));

if (debugFlg == true) { print("paAxis="+paAx)};

	//shift from anticlockwise convention to clockwise for widget
	paAx = 360-paAx;
	paAx = rev(paAx+q);

	return new Array(paAx, paBL, paBL_North);
}



//sunRaDec() added by Mark Crossley for Moon Phase II widget
//derived from SunRiseSet()
function sunRaDec(obs)
{
	var d = dayno(obs.year,obs.month,obs.day,obs.hours);
	var oblecl = 23.4393-3.563E-7*d;
	var w = 282.9404+4.70935E-5*d;
	var M = 356.0470+0.9856002585*d;
	var e = 0.016709-1.151E-9*d;
	var E = M+e*(180/Math.PI)*sind(M)*(1.0+e*cosd(M));
	var A = cosd(E)-e;
	var B = Math.sqrt(1-e*e)*sind(E);
	var slon = w+atan2d(B,A);
	var sRA = atan2d(sind(slon)*cosd(oblecl),cosd(slon));
	while(sRA<0) sRA+=360;
	while(sRA>360) sRA-=360;
	sRA = sRA/15;
	var sDec = asind(sind(oblecl)*sind(slon));
	return new Array(sRA,sDec);
}


function dayno(year,month,day,hours)
{
	// Day number is a modified Julian date, day 0 is 2000 January 0.0
	// which corresponds to a Julian date of 2451543.5
	var d= 367*year-Math.floor(7*(year+Math.floor((month+9)/12))/4)
		 +Math.floor((275*month)/9)+day-730530+hours/24;
	return d;
}

//convert a phase angle to a common name
function phaseName(pa)
{
	//allows 5 degree leaway for the quarters
	if (pa >= 357.5) return strFullMoon;
	if (pa > 272.5)  return strWaningGibbous;
	if (pa >= 267.5) return strLastQuarter;
	if (pa > 182.5)  return strWaningCrescent;
	if (pa >= 177.5) return strNewMoon;
	if (pa > 92.5)   return strWaxingCresent;
	if (pa >= 87.5)  return strFirstQuarter;
	if (pa > 2.5)    return strWaxingGibbous;
	if (pa >= 0)     return strFullMoon;
	return strUnknownPhase;
}



//Function added by Mark Crossley for Moon Phase II widget
//convert geocentric coords to topocentric
function geo_topo(ra,dec,obs,dist)
{
	//convert dist in km to Earth radii
	dist /= 6372.8;
	var lst=local_sidereal(obs)*15.0;
	if (debugFlg == true) { print("lst="+hmstring(lst/15))};
	ra = ra*15.0;
	var x = dist*cosd(dec)*cosd(ra) - cosd(obs.latitude)*cosd(lst);
	var y = dist*cosd(dec)*sind(ra) - cosd(obs.latitude)*sind(lst);
	var z = dist*sind(dec) - sind(obs.latitude);
	dist = Math.sqrt(x*x+y*y+z*z);
	ra = atan2d(y,x)/15.0;
	while (ra>24) ra-=24;
	while (ra<0) ra+=24;
	dec = asind(z/dist);
	//convert dist back to km
	dist = Math.round(dist * 6372.8);
	return new Array(ra,dec,dist);
}


// moons() function added by Mark Crossley for Moon Phase II widget
// Returns the dates for New and Full Moons.
// Converted from Basic Sky & Telescope, March, 1985
function moons(year) {
  var moondates=new Array();
  var R1=Math.PI/180;
  var U=false;
  var Y=year;
  var K0=Math.floor((Y-1900)*12.3685);
  var T=(Y-1899.5)/100;
  var T2=T*T;
  var T3=T*T*T;
  var J0=2415020+29*K0;
  var F0=0.0001178*T2-0.000000155*T3;
  var F0=F0+0.75933+0.53058868*K0;
  var F0=F0-0.000837*T-0.000335*T2;
  var M0=K0*0.08084821133;
  M0=360*(M0-Math.floor(M0))+359.2242;
  M0=M0-0.0000333*T2;
  M0=M0-0.00000347*T3;
  var M1=K0*0.07171366128;
  M1=360*(M1-Math.floor(M1))+306.0253;
  M1=M1+0.0107306*T2;
  M1=M1+0.00001236*T3;
  var B1=K0*0.08519585128;
  B1=360*(B1-Math.floor(B1))+21.2964;
  B1=B1-0.0016528*T2;
  B1=B1-0.00000239*T3;
  for (var K9=0; K9<=28; K9+=1) {
    var J=J0+14*K9;
    var F=F0+0.765294*K9;
    var K=K9/2;
    var M5=(M0+K*29.10535608)*R1;
    var M6=(M1+K*385.81691806)*R1;
    var B6=(B1+K*390.67050646)*R1;
    var F=F-0.4068*Math.sin(M6);
    F=F+(0.1734-0.000393*T)*Math.sin(M5);
    F=F+0.0161*Math.sin(2*M6);
    F=F+0.0104*Math.sin(2*B6);
    F=F-0.0074*Math.sin(M5-M6);
    F=F-0.0051*Math.sin(M5+M6);
    F=F+0.0021*Math.sin(2*M5);
    F=F+0.0010*Math.sin(2*B6-M6);
    J=J+F;
    moondates[K9]=J;
    U=!U;
  }
  return moondates;
}


//setup the observer object, set boolInit param to true to perform default initialisation
function setObserver(boolInit)
{
	var now = new Date();
	observer.latitude = g_dblLatDeg;
	observer.longitude = g_dblLongDeg;
	//set date/time to computer clock if user entered date is not selected
	if (preferences.realTimePref.value == "1" || boolInit)
	{
		observer.year = now.getFullYear();
		observer.month = now.getMonth()+1;
		observer.day = now.getDate();
		observer.hours = now.getHours();
		observer.minutes = now.getMinutes();
		observer.seconds = now.getSeconds();
	}
	else
	{
		now.setFullYear(observer.year,observer.month-1,observer.day,observer.hours,observer.minutes,0);
	}

	observer.tz = now.getTimezoneOffset();

	month_length[1] = leapyear(observer.year)?29:28;

	if (observer.hours >=24)
	{
		observer.hours -= 24;
		observer.day += 1;
		if (observer.day > month_length[observer.month-1])
		{
			observer.day -= month_length[observer.month-1];
			observer.month += 1;
			if (observer.month == 13)
			{
				observer.year += 1;
				observer.month = 1;
			}
		}
	}
	else if (observer.hours < 0)
	{
		observer.hours += 24;
		observer.day-=1;
		if (observer.day <= 0)
		{
			observer.month-=1;
			if (observer.month==0)
			{
				observer.year-=1;
				observer.month=12;
			}
			observer.day=month_length[observer.month-1];
		}
	}

}
