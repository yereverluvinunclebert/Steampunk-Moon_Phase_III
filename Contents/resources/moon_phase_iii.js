// various bits of code required for Moon Phase II
// Mark Crossley 2007

// global variables
var scale = preferences.moonSizePref.value / 300 ;
var g_dblLatDeg;							//Users latitude in degrees (N +ve)
var g_dblLongDeg;							//Users longitude in degrees (E +ve)

var g_intWidgetID = 41541;  				//The widgets Yahoo gallery number
var g_strWidgetName = "Moon Phase III";		//The widgets Yahoo gallery name

var g_strTextPage1, g_strTextPage2;			//hold the information panel pages
var g_intPage = 0;							//holds the current info page to display

var g_intLastSize;							//Track the size, so we do not animate resizing every update
var g_dblLastMoonRot, g_dblLastMaskRot = 999; //Track the rotation values so we do not animate resizing every update

var debugFlg = false;

//==============================
// resizing variables
//==============================
var Hoffie = -55;
var Voffie = -55;

var origMoonWidth = null;
var origMoonHeight = null;
var origMoonHoffset = null;
var origMoonVoffset = null;
var origMoonhRegistrationPoint = null;
var origMoonvRegistrationPoint = null;

var origmaskWidth = null;
var origmaskHeight = null;
var origmaskHoffset = null;
var origmaskVoffset = null;
var origmaskhRegistrationPoint = null;
var origmaskvRegistrationPoint = null;

var origGlobeWidth = null;
var origGlobeHeight = null;
var origGlobeHoffset = null;
var origGlobeVoffset = null;

var origRingWidth = null;
var origRingHeight = null;
var origRingHoffset = null;
var origRingVoffset = null;

var origGlowWidth = null;
var origGlowHeight = null;
var origGlowHoffset = null ;
var origGlowVoffset = null;

var origGlobeTopWidth =  null;
var origGlobeTopHeight =  null;
var origGlobeTopHoffset =  null;
var origGlobeTopVoffset =  null;

var origSupportingBarWidth = null;
var origSupportingBarHeight = null;
var origSupportingBarHoffset = null ;
var origSupportingBarVoffset = null;

var origToggle1Width = null;
var origToggle1Height = null;
var origToggle1Hoffset = null;
var origToggle1Voffset = null;

var origToggle2Width = null;
var origToggle2Height = null;
var origToggle2Hoffset = null;
var origToggle2Voffset = null;

var origToggle3Width = null;
var origToggle3Height = null;
var origToggle3Hoffset = null;
var origToggle3Voffset = null;

var origToggle4Width = null;
var origToggle4Height = null;
var origToggle4Hoffset = null;
var origToggle4Voffset = null;

var origToggle5Width = null;
var origToggle5Height = null;
var origToggle5Hoffset = null;
var origToggle5Voffset = null;

var origToggle6Width = null;
var origToggle6Height = null;
var origToggle6Hoffset = null;
var origToggle6Voffset = null;

var origToggle7Width = null;
var origToggle7Height = null;
var origToggle7Hoffset = null;
var origToggle7Voffset = null;

var origToggleSWidth = null;
var origToggleSHeight = null;
var origToggleSHoffset = null;
var origToggleSVoffset = null;

var origToggleFWidth = null;
var origToggleFHeight = null;
var origToggleFHoffset = null;
var origToggleFVoffset = null;

var origcancelWidth = null;
var origcancelHeight = null;
var origcancelHoffset = null;
var origcancelVoffset = null;

var tingingSound = "Resources/ting.mp3";
var suck = "Resources/suck.mp3";
var newClunk = "Resources/newclunk.mp3";
var steamSound = "Resources/steamsound.mp3";
var electricDrone = "Resources/electricdrone.mp3";
var winding = "Resources/winding.mp3";

var widgetName = "Moon_Phase_III.widget";


//==============================
// resizing variables for the enlarged earth
// required as it must be dynamically resized
//==============================
//origWoodSurroundHoffset= woodSurround.hoffset;
//origWoodSurroundWidth= woodSurround.width;

origMoonWidth = moon.width;
origMoonHeight = moon.height;
origMoonHoffset = moon.hoffset;
origMoonVoffset = moon.voffset;
origmoonhRegistrationPoint = moon.hRegistrationPoint;
origmoonvRegistrationPoint = moon.vRegistrationPoint;

origMaskWidth = mask.width;
origMaskHeight = mask.height;
origMaskHoffset = mask.hoffset;
origMaskVoffset = mask.voffset;
origMaskhRegistrationPoint = mask.hRegistrationPoint;
origMaskvRegistrationPoint = mask.vRegistrationPoint;

origRingWidth = ring.width;
origRingHeight = ring.height;
origRingHoffset = ring.hoffset;
origRingVoffset = ring.voffset;

origGlobeTopWidth =  globetop.width;
origGlobeTopHeight =  globetop.height;
origGlobeTopHoffset =  globetop.hoffset;
origGlobeTopVoffset =  globetop.voffset;

origSupportingBarWidth = supportingBar.width;
origSupportingBarHeight = supportingBar.height;
origSupportingBarHoffset = supportingBar.hoffset;
origSupportingBarVoffset = supportingBar.voffset;

origToggle1Width = toggle1.width;
origToggle1Height = toggle1.height;
origToggle1Hoffset = toggle1.hoffset;
origToggle1Voffset = toggle1.voffset;

origToggle2Width = toggle2.width;
origToggle2Height = toggle2.height;
origToggle2Hoffset = toggle2.hoffset;
origToggle2Voffset = toggle2.voffset;

origToggle3Width = toggle3.width;
origToggle3Height = toggle3.height;
origToggle3Hoffset = toggle3.hoffset;
origToggle3Voffset = toggle3.voffset;

origToggle4Width = toggle4.width;
origToggle4Height = toggle4.height;
origToggle4Hoffset = toggle4.hoffset;
origToggle4Voffset = toggle4.voffset;

origToggle5Width = toggle5.width;
origToggle5Height = toggle5.height;
origToggle5Hoffset = toggle5.hoffset;
origToggle5Voffset = toggle5.voffset;

origToggle6Width = toggle6.width;
origToggle6Height = toggle6.height;
origToggle6Hoffset = toggle6.hoffset;
origToggle6Voffset = toggle6.voffset;

origToggle7Width = toggle7.width;
origToggle7Height = toggle7.height;
origToggle7Hoffset = toggle7.hoffset;
origToggle7Voffset = toggle7.voffset;

origToggleSWidth = toggleS.width;
origToggleSHeight = toggleS.height;
origToggleSHoffset = toggleS.hoffset;
origToggleSVoffset = toggleS.voffset;

origToggleFWidth = toggleF.width;
origToggleFHeight = toggleF.height;
origToggleFHoffset = toggleF.hoffset;
origToggleFVoffset = toggleF.voffset;

origcancelWidth = cancel.width;
origcancelHeight = cancel.height;
origcancelHoffset = cancel.hoffset;
origcancelVoffset = cancel.voffset;

var debugFlg = 0;

function start()
{

    debugFlg = preferences.debugflgPref.value;
    if (debugFlg === "1") {
        preferences.imageEditPref.hidden=false;
    } else {
        preferences.imageEditPref.hidden=true;		
    }

        //set up for language
	setLanguage();

	//set up initial view
	moon.width = moon.height = mask.width = mask.height = +preferences.moonSizePref.value;
	moon.hRegistrationPoint = moon.vRegistrationPoint = mask.hRegistrationPoint = mask.vRegistrationPoint = +preferences.moonSizePref.value/2;

    mainScreen(); 	// check the widget is on-screen
    setmenu(); // build the menu
    setClickPointToolTips(); //set the tooltips

    checkOrreryWidget();

	//fade the popup info
	//showInfo(false);
	var a = new FadeAnimation(hoverText, 0, 400, animator.kEaseNone);
	animator.start(a);


	mainWindow.visible = true;
	//is this the very first run?
	if (preferences.firstRunPref.value == "1")
	{
		preferences.firstRunPref.value = "0";
		firstRun();
	}

	//initialise Observer object
	setObserver(true);

	//now we really start
	main();
}

function main()
{
        mainWindow.level = preferences.windowLevel.value;

        // set up the pop up font for Windows/Macs
        sethoverTextFont ();

        //update the preferences
	updateBehavior();
	//update the image
	updateImage();
        // create the licence window
        createLicence(mainWindow);
}

function updateBehavior()
{

	//get and validate the users longitude
	g_dblLongDeg = validateLatLon(preferences.lonPref.value)
	if (g_dblLongDeg == -999)
	{
		if (alert(strAlertMsgLong,strAlertBtnContinue,strAlertBtnPrefs) == 2)
		{
			showWidgetPreferences();
			return;
		}
	}

	//get and validate the users latitude
	g_dblLatDeg = validateLatLon(preferences.latPref.value)
	if (g_dblLatDeg == -999)
	{
		if (alert(strAlertMsgLat,strAlertBtnContinue,strAlertBtnPrefs) == 2)
		{
			showWidgetPreferences();
			return;
		}
	}

		//setup widget for double clicks
		mainWindow.onMultiClick = function () {showText()};
		textBckgnd.onMultiClick = function () {showText()};
		mainWindow.onMouseDown = null;
		textBckgnd.onMouseDown = null;

	//check for user date input
	if (preferences.realTimePref.value == "0") {
	        //log("***************************here 1***********************************");
		//InputDateForm(false);
	}

	//resize and rotate
	var x = preferences.moonSizePref.value;
	//make sure we use a even number of pixels for the size
	if (x%2 == 1) x++;
	preferences.moonSizePref.value = x;
	print("resizing to " + x);
	resizeImages(preferences.moonSizePref.value);

	//set shadow density
	mask.opacity = preferences.fadePref.value;
}



function updateImage()
{

	//set the current date/time, lat long etc
	setObserver(false);
	//find the Moons ra, dec, range, alt, az, pa
	var arrMoonPos = MoonPos(observer);
    //get the current phase
	var phase = arrMoonPos[5];

	//convert to our image phase
	var imgNameMask = phase;

	//Get the dates of the next New and Full Moons
	var mfn = moons(observer.year);
	// Julian date now at at Greenwich
	var jdg = jd0(observer.year,observer.month,observer.day)+0.5;
	var jdNow = jdg -0.5 +observer.hours/24+observer.minutes/1440;
	var iFirst = 0, iLast = 28, iNew = 0;
	// for the full year delete the next for loop.
	// List at least two full and new after the current date
	for (var i=0; i<=28; i++)
	{
		if (mfn[i] > jdg)
		{
			iFirst = i-i%2;
			if (iFirst == i)
				iLast = (iFirst > 25) ? 28 : iFirst+3;
			else
				iLast = (iFirst > 23) ? 28 : iFirst+5;
			break;
		}
	}
	//The date/times returned are in UTC, need a Date() object to convert to local time
	var locDate = new Date();
	locDate.setFullYear(observer.year,observer.month-1,observer.day,observer.hours,observer.minutes);
	//find age of this lunation
	for (var i=0; i<28; i++)
	{
		if (mfn[i] > jdNow) break;
		if (mfn[i] <= jdNow && !(i%2))	//find last new Moon
				iNew = i;
	}

	var age = jd0(locDate.getUTCFullYear(),locDate.getUTCMonth()+1,locDate.getUTCDate());
	age += locDate.getUTCHours()/24+locDate.getUTCMinutes()/1440;
	var age2 = age -mfn[iNew];
	age2 = age2.toFixed(2);
	age = age - mfn[iNew];
	age = Math.floor(age) +"d "+ hmstring((age-Math.floor(age))*24);
	if (debugFlg == true) { print("Age = " + age)};

	//common name
	var strPhaseName = phaseName(Math.round(phase));


	//create/update the dock image for Version 4.0 and above
	var konVersion = konfabulatorVersion();
	konVersion = konVersion.split(".");
	if (konVersion[0] >= 4)
	{
		// Only a dock image every 20 degrees
		var docImage = Math.round(imgNameMask/20)*20;
		//construct a 3 digit text number for filename
		docImage = "00" + docImage;
		docImage = "dockImages/" + docImage.substring(docImage.length, docImage.length - 3) + ".png";
		var doc = XMLDOM.parse( filesystem.readFile( "dock.xml" ) );
		var i = doc.getElementById( "img" );
		i.setAttribute( "src", docImage );
		widget.setDockItem( doc );
	}

	//round image to nearest even number
	imgNameMask = Math.round(imgNameMask/2)*2;


	if (imgNameMask > 180) imgNameMask = 360-imgNameMask;

	//For the Mask construct a 3 digit text number for filename
	imgNameMask = "00" + imgNameMask;
	imgNameMask = imgNameMask.substring(imgNameMask.length, imgNameMask.length - 3) + ".png";

	//construct image name for disk
	var l = arrMoonPos[7]; var b = arrMoonPos[8];
	l = Math.round(l/2)*2; b = Math.round(b/2)*2
	var imgNameDisk = "" + l + b + ".png";
        //log ("imgNameDisk " + imgNameDisk );
	//rotate the image to correct orientation - if required
	var rotation = moonPA(observer,arrMoonPos[0],arrMoonPos[1],arrMoonPos[6]);
	if (debugFlg == true) { print("moon.rot="+rotation[0]+" mask.rot="+rotation[1]+" BL_North="+rotation[2])};
	// Use an aninimation object to smooth the rotation.
	if (preferences.rotatePref.value == "0" &&
		(g_dblLastMoonRot != rotation[0] || g_dblLastMaskRot != rotation[1]))	// Apparant view
	{
		var a = new RotateAnimation(moon, rotation[0], 2000, animator.kEaseInOut);
		var b = new RotateAnimation(mask, rotation[1], 2000, animator.kEaseInOut);
		animator.start(new Array(a, b));
		g_dblLastMoonRot = rotation[0];
		g_dblLastMaskRot = rotation[1];
	}
	if (preferences.rotatePref.value == "1" &&
		(g_dblLastMoonRot != 0 || g_dblLastMaskRot !=rotation[2]) )		// North up
	{
		var a = new RotateAnimation(moon, 0, 2000, animator.kEaseInOut);
		var b = new RotateAnimation(mask, rotation[2], 2000, animator.kEaseInOut);
		animator.start(new Array(a, b));
		g_dblLastMoonRot = 0;
		g_dblLastMaskRot = rotation[2];
	}
	if (preferences.rotatePref.value == "2" &&
		(g_dblLastMoonRot != 180 || g_dblLastMaskRot != rotation[2]) )		// South up
	{
		var a = new RotateAnimation(moon, 180, 2000, animator.kEaseInOut);
		var b = new RotateAnimation(mask, rotation[2]+180, 2000, animator.kEaseInOut);
		animator.start(new Array(a, b));
		g_dblLastMoonRot = 180;
		g_dblLastMaskRot = rotation[2];
	}

	//display the appropriate mask & image
	mask.src = "masks/" + imgNameMask;
	moon.src = "disks/" + imgNameDisk;

	//illuminated fraction
	var illumFrac = 100.0*(1.0+cosd(phase))/2.0;
	illumFrac = illumFrac.toFixed(1);
	if (debugFlg == true) { print("Illuminated fraction  = " + illumFrac + "%")};

	//round off the phase to one decimal place
	phase = phase.toFixed(1);
	if (debugFlg == true) { print("Phase angle = " + phase + "°")};
	g_strTextPage1 = strPhaseName + "\n" +
					 strCurrentPhase + phase + "°\n" +
					 strAge1 + age + " ("+ age2 + strAge2 +")\n" +
					 strIllumFrac + illumFrac + "%\n\n";

	//set the tooltips
	if (preferences.realTimePref.value == "1")
	{
		hoverText.data = strRealTimeTooltip + "\n";
	}
	else
	{
		hoverText.data = observer.year + " " + arrMonths[observer.month-1] + " " + observer.day + "\n" +
						hmsstring(observer.hours + observer.minutes/60) + "\n";
	}
	hoverText.data += strAge1 + age2 + strAge2 + "\n" + illumFrac + "%";

	//convert geocentric ra,dec,dist to topocentric if required
	if (preferences.topoPref.value == "T")
		var arrTopo = geo_topo(arrMoonPos[0],arrMoonPos[1],observer,arrMoonPos[2]);
	else
		var arrTopo = new Array(arrMoonPos[0],arrMoonPos[1],arrMoonPos[2]);

	if (debugFlg == true) { print("Geocentric  RA " + hmstring(arrMoonPos[0]) + " Dec " + anglestring(arrMoonPos[1]))};
	if (debugFlg == true) { print("Topocentric RA " + hmstring(arrTopo[0]) + " Dec " + anglestring(arrTopo[1]))};

	g_strTextPage1 += strMoonPos;
	// Tell the user if we are displaying topo or geocentric
	if (preferences.topoPref.value == "T")
		g_strTextPage1 += "(" + strTopocentric + "):";
	else
		g_strTextPage1 += "(" + strGeocentric + ")";
	g_strTextPage1 += "\n  RA " + hmstring(arrTopo[0]) + " Dec " + anglestring(arrTopo[1]) + "\n";
	if (debugFlg == true) { print("  Alt:" + arrMoonPos[3] + " Az:" + arrMoonPos[4])};
	g_strTextPage1 += "  Alt " + Math.round(arrMoonPos[3]) + "° Az " + Math.round(arrMoonPos[4]) + "°";
	// Check if Moon below the horizon - no allowance for refraction
	if (arrMoonPos[3] < -0.25 )
		g_strTextPage1 += " " + strBelowHorizon +"\n";
	else
		g_strTextPage1 += "\n";
	if (debugFlg == true) { print(strMoonRange + "G:" + arrMoonPos[2] + " T:" + arrTopo[2] +"km")};
	// We already put the relavant topo/geo distance value in the array
	g_strTextPage1 += "  " + strMoonRange + arrTopo[2] + "km\n\n";

	//Add Libration info
	g_strTextPage1 += strMoonLibration + "\n";
	g_strTextPage1 += "  " + strMoonLibLong + arrMoonPos[7].toFixed(1) + "° " + strMoonLibLat + arrMoonPos[8].toFixed(1) + "°\n\n";

	//find the Moon rise and set times
	var arrMoonRiseSet = moonrise(observer);

    if ((arrMoonRiseSet[0]<0) && (arrMoonRiseSet[1]<0))
    {
		// The Moon doesn't rise or set today as it's...
		if (arrMoonRiseSet[0]==-1)
		{
			// below the horizon all day
			if (debugFlg == true) { print(strMoonDown)};
			g_strTextPage1 += strMoonDown + "\n";
		}
		else
		{
			// above the horizon all day
			if (debugFlg == true) { print(strMoonUp)};
			g_strTextPage1 += strMoonUp + "\n";
		}
    }
    else
    {
    	var temp1 = "";
    	var temp2 = "";
		// A 'normal' day, there is a rise and/or set
		if (arrMoonRiseSet[0]>=0)
		{
			if (preferences.utcTimePref.value == "0")
			{
				if (debugFlg == true) { print(strMoonRise + hmstring(arrMoonRiseSet[0]))};
				temp1 = strMoonRise + hmstring(arrMoonRiseSet[0]) + "\n";
			}
			else
			{
				var a = arrMoonRiseSet[0] + observer.tz/60.0;
				if (debugFlg == true) { print(strMoonRise + hmstring(a) + "UTC")};
				if (a >=0 && a <24) temp1 = strMoonRise + hmstring(a) +"UTC\n";
			}
		}

		if (arrMoonRiseSet[1]>=0)
		{
			if (preferences.utcTimePref.value == "0")
			{
				if (debugFlg == true) { print(strMoonSet + hmstring(arrMoonRiseSet[1]))};
				temp2 = strMoonSet + hmstring(arrMoonRiseSet[1]) + "\n";
			}
			else
			{
				var a = arrMoonRiseSet[1] + observer.tz/60.0;
				if (debugFlg == true) { print(strMoonSet + hmstring(a) + "UTC")};
				if (a >=0 && a <24) temp2 = strMoonSet + hmstring(a) +"UTC\n";
			}
		}

		// Put the rise/set times in order
		if (arrMoonRiseSet[0] < arrMoonRiseSet[1])
			g_strTextPage1 += temp1 + temp2;
		else
			g_strTextPage1 += temp2 + temp1;
	}

    //find the Sun rise and set times
	var arrSunRiseSet = sunrise(observer, -0.833);
	if (debugFlg == true) { print(strSunRise + arrSunRiseSet[0])};
	if (arrSunRiseSet[0] == "++++")
		g_strTextPage1 += "\n" + strSunUp + "\n";
	else if (arrSunRiseSet[0] == "----")
		g_strTextPage1 += "\n" + strSunDown + "\n";
	else
	{
		g_strTextPage1 += "\n" + strSunRise + arrSunRiseSet[0] + "\n";
		if (debugFlg == true) { print(strSunSets + arrSunRiseSet[1])};
		g_strTextPage1 += strSunSets + arrSunRiseSet[1];
	}
	//blank the page
	g_strTextPage2 = "";

	for (var i=iFirst; i<=iLast; i++)
	{
		var nextm = jdtocd(mfn[i]);

		//Prime the date object with the UTC date/tme
		locDate.setUTCFullYear(nextm[0],nextm[1]-1,nextm[2]);
		locDate.setUTCHours(nextm[4]);
		locDate.setUTCMinutes(nextm[5]);

		//write the date/time in UTC
		g_strTextPage2 += (i%2) ? strFullMoon + "\n": strNewMoon + "\n";
		g_strTextPage2 += "   " + nextm[0];
		g_strTextPage2 += ((nextm[1]<10) ? "-0" : "-") + nextm[1];
		g_strTextPage2 += ((nextm[2]<10) ? "-0" : "-") + nextm[2] + " ";
		g_strTextPage2 += ((nextm[4]<10) ? "0" : "") + nextm[4];
		g_strTextPage2 += ((nextm[5]<10) ? ":0" : ":") + nextm[5]+" UTC\n";

		//write the date/time in local time
		g_strTextPage2 += "   " + locDate.getFullYear();
		g_strTextPage2 += (((locDate.getMonth()+1)<10) ? "-0" : "-") + (locDate.getMonth()+1);
		g_strTextPage2 += ((locDate.getDate()<10) ? "-0" : "-") + locDate.getDate() + " ";
		g_strTextPage2 += ((locDate.getHours()<10) ? "0" : "") + locDate.getHours();
		g_strTextPage2 += ((locDate.getMinutes()<10) ? ":0" : ":") + locDate.getMinutes()+ " " + strLocal + "\n\n";
	}

	if (debugFlg == true) { print(g_strTextPage2)};

	//Is the data panel still visible? If so force a refresh.
	if (dataWindow.visible == true)
		if (g_intPage == 1)
			text.data = g_strTextPage1;
		else
			text.data = g_strTextPage2;


	//all done - go back to sleep.
}

function validateLatLon(latlon){
	if (debugFlg == true) { print("validateLatLon("+latlon+")")};
	latlon = latlon.replace(/[\s]*$/,'');           	// strip trailing whitespace
	var dir = latlon.slice(-1).toUpperCase();       	// compass dir'n
	latlon = latlon.toUpperCase();
	if (!/[NSEW]/.test(dir)) return -999;            	// check for correct compass direction
	latlon = latlon.slice(0,-1);                    	// and lose it off the end

														// check for valid sequence
	if (!/^\d+[\s:D\.]+\d*[\s:M]?\d*[\s:S]?$/.test(latlon)) return -999;

	var dms = latlon.split(/[\s:DMS]/)        			// check for separator symbols indicating d/m/s

	switch (dms.length) 								// convert to decimal degrees...
	{
		case 3:                                     	// interpret 3-part result as d/m/s
			var deg = dms[0]/1 + dms[1]/60 + dms[2]/3600;
			break;
		case 2:                                     	// interpret 2-part result as d/m
			var deg = dms[0]/1 + dms[1]/60;
			break;
		case 1:                                     	// non-separated decimal format dd.ddd
			var deg = latlon;
			break;
		default:
			return -999;
	}
	if (/[WS]/.test(dir)) deg = -deg;               	// take west and south as -ve
	if (debugFlg == true) { print("validateLatLon() return:"+deg)};
	return deg
}

function showText()
{
	//reposition the data window - if required
	posDataWindow();

	switch (g_intPage)
	{
		case 0:
                        if (preferences.soundPref.value === "enable") {
                                play(electricDrone, false);
                        }
                        updateImage();					//update the data
			text.data = g_strTextPage1;		//set the text to page 1
			dataWindow.visible = true;		//show it
			g_intPage++;					//next page
			refreshTimer.interval = 60;		//refresh the data every minute
			break
		case 1:
                        if (preferences.soundPref.value === "enable") {
                                play(tingingSound, false);
                        }
			text.data = g_strTextPage2;		//set the text to page 2
			g_intPage++;					//next page
			break;
		case 2:
                        if (preferences.soundPref.value === "enable") {
                                play(steamSound, false);
                        }

                        text.data = "";					//blank it
			dataWindow.visible = false;		//hide it
			g_intPage = 0;					//reset page
			refreshTimer.interval = 300;	//set the refresh back to 5 minutes
			break;
	}
}

function firstRun()
{
	//Only called the very first time the widget is run.
	//get the locale
	var locale = widget.locale;
	if (debugFlg == true) { print("locale is " + locale)};

	switch ( locale.substr(0, 2) )
	{
		case "es":
			preferences.languagePref.value = "ES";
			break;
		case "fr":
			preferences.languagePref.value = "FR";
			break;
		case "de":
			preferences.languagePref.value = "DE";
			break;
		case "en":
		default:
			preferences.languagePref.value = "EN";
			break;
	}

	//configure the widget with the correct language
	setLanguage();

	//show the preferences so that the user can enter their lat/long
	showWidgetPreferences();
}

//position the data window near the widget but still on screen
function posDataWindow()
{
        //check if the window position of the widget has been saved before
	//if it has then leave it as is, else, position sensibly over the widget
	if (preferences.windowPos.value == "1")
	{
                //the widget hasn't been moved
		return;
	}

	var vOff = mainWindow.vOffset+mainWindow.height/2-dataWindow.height/2;
	var hOff = mainWindow.hOffset+mainWindow.width/2-dataWindow.width/2;

	if (hOff + dataWindow.width > screen.availWidth)
		hOff = screen.availWidth - dataWindow.width;

	if (hOff < screen.availLeft)
		hOff = screen.availLeft;

	if (vOff + dataWindow.height > screen.availHeight)
		vOff = screen.availHeight - dataWindow.height;

	if (vOff < screen.availTop)
		vOff = screen.availTop;

	dataWindow.vOffset = vOff;
	dataWindow.hOffset = hOff;
	//store the fact that the window has been repositioned
	preferences.windowPos.value = "1";
}

//==============================
//reset the widget to default values
//==============================
function resetDefaults()
{
	preferences.languagePref.value = "EN";
	preferences.moonSizePref.value = "100";
	preferences.fadePref.value = "200";
	preferences.latPref.value = "53 20N";
	preferences.lonPref.value = "2 15W"
	preferences.rotatePref.value = "0";
	preferences.autoUpdatePref.value = "1";
	preferences.lastUpdatePref.value = "2001/1/1";
	preferences.windowPos.value = "";
	preferences.topoPref.value = "T";
	preferences.realTimePref.value = "1";
	preferences.showInfoPref.value = "1";
	preferences.utcTimePref.value = "1";
	//prompt the user to setup again
	firstRun();
}

//==============================
//If we resize the image, we now custom animate the rescaling
//==============================
function resizeImages(size)
{
	//first check if the size has changed
	if (g_intLastSize == size)
		return

	var x = new CustomAnimation(1, updateMe);
	// some custom properties for the animation
	x.duration = 2000;
	x.startSize = moon.height;
	x.endSize = size;

	animator.start(x);
	//save the new size
	g_intLastSize = size;
}
//==============================
//The actual code to resize images
//==============================
function updateMe()
{
	var now = animator.milliseconds;

	var t = now - this.startTime;
	if (t<0) t = 0;
	if (t>this.duration) t = this.duration;

	//how far should we go?
	var percent = t / this.duration;
	//print("updateMe pct = " + percent);

	//calculate the new size
	var newSize = animator.ease(this.startSize,this.endSize, percent, animator.kEaseNone);
        scale = newSize / origMoonWidth ;
        //log ("scale " + scale);

	//always use an even size to stop it 'jittering' about
	if (newSize%2 == 1) newSize++;

	//moon is sized absolutely
        moon.height = moon.width = mask.height = mask.width = newSize;
	moon.hRegistrationPoint = moon.vRegistrationPoint = mask.hRegistrationPoint = mask.vRegistrationPoint = newSize/2;

        moon.width = newSize ;
	moon.height = newSize ;

        mask.width = newSize ;
	mask.height = newSize ;

        //other elements are being sized relatively
        
        ring.width = origRingWidth * scale ;
	ring.height = origRingHeight * scale ;

        globetop.width = origGlobeTopWidth  * scale ;
        globetop.height =origGlobeTopHeight * scale ;

        supportingBar.width = origSupportingBarWidth  * scale ;
        supportingBar.height = origSupportingBarHeight  * scale ;

        toggle1.width = origToggle1Width  * scale ;
        toggle1.height = origToggle1Height  * scale ;

        toggle2.width = origToggle2Width  * scale ;
        toggle2.height = origToggle2Height  * scale ;

        toggle3.width = origToggle3Width  * scale ;
        toggle3.height = origToggle3Height  * scale ;

        toggle4.width = origToggle4Width  * scale ;
        toggle4.height = origToggle4Height  * scale ;

        toggle5.width = origToggle5Width  * scale ;
        toggle5.height = origToggle5Height  * scale ;

        toggle6.width = origToggle6Width  * scale ;
        toggle6.height = origToggle6Height  * scale ;

        toggle7.width = origToggle7Width  * scale ;
        toggle7.height = origToggle7Height  * scale ;

        toggleS.width = origToggleSWidth  * scale ;
        toggleS.height = origToggleSHeight  * scale ;

        toggleF.width = origToggleFWidth  * scale ;
        toggleF.height = origToggleFHeight  * scale ;

        cancel.width = origcancelWidth  * scale ;
        cancel.height = origcancelHeight  * scale ;

        repositionMoonGlobe();

        if (ring.visible == false ) {
          ring.visible= true;
          globetop.visible= true;
          supportingBar.visible= true;
          toggle1.visible= true;
          toggle2.visible= true;
          toggle3.visible= true;
          toggle4.visible= true;
          toggle5.visible= true;
          toggle6.visible= true;
          toggle7.visible= true;
          toggleF.visible= true;
          cancel.visible= true;
          toggleS.visible= true;
        }

	if (animator.milliseconds >=(this.startTime + this.duration ) || percent == 1)
	{
		//Out of time, or all done - Jump to final size
		moon.height=moon.width=mask.height=mask.width = this.endSize;
		moon.hRegistrationPoint = moon.vRegistrationPoint = mask.hRegistrationPoint = mask.vRegistrationPoint = this.endSize/2;
		return false; // we're done
	}

	return true; // keep going
}


// Date form
function InputDateForm(bln_update)
{
	var formFields = Array();

	formFields[0] = new FormField();
	formFields[0].name = "year";
	formFields[0].type = "text";
	formFields[0].title = strYear;
	formFields[0].defaultValue = observer.year;

	formFields[1] = new FormField();
	formFields[1].name = "month";
	formFields[1].type = "popup";
	formFields[1].title = strMonth;
	formFields[1].option = arrMonths;
	formFields[1].optionValue = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
	formFields[1].defaultValue = observer.month;

	formFields[2] = new FormField();
	formFields[2].name = "day";
	formFields[2].type = "popup";
	formFields[2].title = strDay;
	formFields[2].option = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31);
	formFields[2].defaultValue = observer.day;

	formFields[3] = new FormField();
	formFields[3].name = "hours";
	formFields[3].type = "popup";
	formFields[3].title = strHour;
	formFields[3].option = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23);
	formFields[3].defaultValue = observer.hours;

	formFields[4] = new FormField();
	formFields[4].name = "minutes";
	formFields[4].type = "popup";
	formFields[4].title = strMinute;
	formFields[4].option = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59);
	formFields[4].defaultValue = observer.minutes;

	var formResults = form(formFields, strEnterDateTime, strBtnUserDate, strBtnRealDate);

	if (formResults != null)
	{
		//user clicked the User date button

			if (debugFlg == true) { print("User date/time")};
			preferences.realTimePref.value = "0";

			//set the observer object
			observer.year = +formFields[0].value;
			observer.month = +formFields[1].value;
			observer.day = +formFields[2].value;
			observer.hours = +formFields[3].value;
			observer.minutes = +formFields[4].value;
			observer.seconds = 0;

			//validate year input - the only freeform field
			if (!(+formFields[0].value >= 1582 && +formFields[0].value <= 2500))
			{
				alert(strInvalidYear);
				log("here 2");
				InputDateForm();
				return;
			}
	}
	else
	{
		// user clicked the Realtime clock button
			preferences.realTimePref.value = "1";

	}

	if (bln_update) updateImage();

}

//=====================
//Show some brief information when the mouse is over the widget
//=====================
function showInfo(boolShow)
{
        //does the user want to show anything?
	if (preferences.showInfoPref.value == "0")
		return;
        //var moonCentre = moon.hoffset + ( moon.width / 2 );
	hoverText.hOffset = hoverText.vOffset = (mainWindow.width /2) + (10 *scale) ;

	if (boolShow)		//show the info
	{
                hoverText.color = "#ffffff";
		hoverText.style = "bold";
		//hoverText.size = "12";
		hoverText.wrap = true;
		hoverText.hAlign = hoverText.vAlign = "center";
		var a = new FadeAnimation(hoverText, 255, 400, animator.kEaseNone);
		animator.start(a);
	}
	else				//hide the info
	{
	        //does the user want to show anything?
         	if (preferences.infoStickPref.value == "1")
		return;
		var a = new FadeAnimation(hoverText, 0, 400, animator.kEaseNone);
		animator.start(a);
	}
}
//=====================
// function ends
//=====================

//=====================
//when the 1 toggle is clicked it show in full size
//=====================
toggle1.onClick = function () {
           if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
           }
           preferences.moonSizePref.value = 220;
           //scale = 1 - (1- (314 / (preferences.moonSizePref.value * 1.28) ));
           resizeImages(preferences.moonSizePref.value);

}
//=====================
//when the 2 toggle is clicked it decrease size by 10%
//=====================
toggle2.onClick = function () {
           if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
           }
           preferences.moonSizePref.value = 200;
           resizeImages(preferences.moonSizePref.value);

}
//=====================
//when the 3 toggle is clicked it decrease size by 20%
//=====================
toggle3.onClick = function () {
           if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
           }
           preferences.moonSizePref.value = 180;
           resizeImages(preferences.moonSizePref.value);

}
//=====================
//when the 4 toggle is clicked it decrease size by 30%
//=====================
toggle4.onClick = function () {
           if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
           }
           preferences.moonSizePref.value = 160;
           resizeImages(preferences.moonSizePref.value);

}
//=====================
//when the 5 toggle is clicked it decrease size by 40%
//=====================
toggle5.onClick = function () {
           if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
           }
           preferences.moonSizePref.value = 140;
           scale = 1 - (1- (314 / (preferences.moonSizePref.value * 1.40) ));
           resizeImages(preferences.moonSizePref.value);

}
//=====================
//when the 6 toggle is clicked it decrease size by 50%
//=====================
toggle6.onClick = function () {
           if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
           }
           preferences.moonSizePref.value = 120;
           resizeImages(preferences.moonSizePref.value);

}
//=====================
//when the globe is double-clicked it
//=====================
toggle7.onClick = function () {
           if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
           }
           preferences.moonSizePref.value = 100;
           resizeImages(preferences.moonSizePref.value);

}
//=====================
//when the F toggle is clicked turn the globe fast
//=====================
toggleS.onClick = function () {
            if (preferences.soundPref.value === "enable") {
                play(newClunk, false);
            }
            if (dataWindow.visible == false) {
                showText();
            } else {
                dataWindow.visible = false;
            }
}
//=====================
//when the F toggle is called show the popup
//=====================
toggleF.onClick = function () {
 if (dataWindow.visible == false) {		//hide it
            if (preferences.soundPref.value === "enable") {
                play(tingingSound, false);
            }
            g_intPage = 0;
            showText()
} else {
	dataWindow.visible = false;		//hide it
}

}
//=====================
// function ends
//=====================


//==============================
// when the opacitySlider is clicked upon and dragged
//==============================
ring.onMouseDrag = function () {
     ring.onClick();
};
//=====================
//End function
//=====================


//=====================
//when the ring is clicked set the time as indicated on the ring.
//=====================
ring.onMouseExit = function () {
showInfo(false);
};
//=====================
//End function
//=====================

//=====================
//when the ring is clicked set the time as indicated on the ring.
//=====================
ring.onMouseUp = function () {
      if (preferences.soundPref.value === "enable") {
              play(tingingSound, false);
      }

};
//=====================
//End function
//=====================



//=====================
//when the ring is clicked set the time as indicated on the ring.
//=====================
ring.onClick = function () {
      var angle, nangle, ntime, mhrous, nmins, rmins, stime,rtime;
	angle = (Math.atan2((mainWindow.height / 2) - system.event.vOffset, (mainWindow.width / 2) - system.event.hOffset) / Math.PI) * 180;
	if (angle > 90) {nangle = angle - 90};
	if (angle <= 90) {nangle = angle + 270};
        ntime = nangle /15; //convert the angle to one of 12 hrs
        
        if (ntime < 10) {
          stime = "0" + ntime; //add a zero to the hour, converting to string
        } else {
          stime = ntime +"";  // convert to string
        };
        nhours = stime.substring(0,2); //extract the strings
        nmins = stime.substring(3,5);  //extract the decimal portion

        rmins = nmins /1.66666667;     //convert to mins
        rmins = rmins.toFixed(2);      //now to only two decimal places
        if (rmins < 10) {
          rmins = "0" + rmins;         //add the preceding zero
        };

        rtime = nhours + ":" + rmins;
        //log("rtime " + rtime);
        // had real problems with parseInt here converting the string to a number
        //it worked with 0-7 and 9-23 but from 7 -9     it returned 0 - why?
	//observer.hours = parseInt(nhours);
	observer.hours = +nhours;         // +unary conversion
	observer.minutes = +rmins;

	//finally update the widget
	updateImage();
        showInfo(true);

}
//=====================
// function ends
//=====================

//=====================
//when the S toggle is clicked turn the globe slow
//=====================
toggleS.onClick = function () {
	if (preferences.soundPref.value === "enable") {
		play(winding, false);
	}
        showWidgetPreferences();
}
//=====================
// function ends
//=====================


//=====================
//when the supporting bar is clicked bar disappears
//=====================
supportingBar.onClick = function () {
            if (preferences.soundPref.value === "enable") {
                play(suck, false);
            }
            preferences.sizebar.value="disable"
            supportingBar.visible = false;
            toggle1.visible = false;
            toggle2.visible = false;
            toggle3.visible = false;
            toggle4.visible = false;
            toggle5.visible = false;
            toggle6.visible = false;
            toggle7.visible = false;
}
//=====================
// function ends
//=====================


//=====================
//when the supporting bar is clicked the bar disappears
//=====================
globetop.onClick = function () {
            if (preferences.soundPref.value === "enable") {
                play(suck, false);
            }
            preferences.sizebar.value="enable"
            supportingBar.visible = true;
            toggle1.visible = true;
            toggle2.visible = true;
            toggle3.visible = true;
            toggle4.visible = true;
            toggle5.visible = true;
            toggle6.visible = true;
            toggle7.visible = true;
}
//=====================
//End function
//=====================

//=====================
// Clicking on the image makes the about us box go away
//=====================
aboutimage.onClick = function () {
            if (preferences.soundPref.value === "enable") {
                play(suck, false);
            }
            aboutimage.visible = false;
}
//=====================
//End function
//=====================

//=====================
// when the cancel tap is clicked make the whole thing disappear
//=====================
cancel.onClick = function () {
  log("system.event.hOffset  " + system.event.hOffset);
  log("system.event.vOffset  " + system.event.vOffset);
  log("mainWindow.hOffset  " + mainWindow.hOffset);
  log("mainWindow.vOffset  " + mainWindow.vOffset);
  if (preferences.soundPref.value === "enable") {
                play(steamSound, false);
  }
  mainWindow.visible=false;
  dataWindow.visible=false;
  //tellWidget("Moon Phase II", "setDate:date=" + new Date().getTime());

}
//=====================
//End function
//=====================



//==============================
//  Re-position the components that comprise the large earth globe
//==============================
function repositionMoonGlobe() {
                //log("Repositioning the moon  " );
                ring.hoffset  = getHposs(origRingHoffset);
                ring.voffset  = getVposs(origRingVoffset);
                globetop.hoffset = getHposs(origGlobeTopHoffset);
                globetop.voffset = getVposs(origGlobeTopVoffset);
                supportingBar.hoffset = getHposs(origSupportingBarHoffset);
                supportingBar.voffset = getVposs(origSupportingBarVoffset);
                toggle1.hoffset = getHposs(origToggle1Hoffset);
                toggle1.voffset = getVposs(origToggle1Voffset);
                toggle2.hoffset = getHposs(origToggle2Hoffset  );
                toggle2.voffset = getVposs(origToggle2Voffset  );
                toggle3.hoffset = getHposs(origToggle3Hoffset  );
                toggle3.voffset = getVposs(origToggle3Voffset  );
                toggle4.hoffset = getHposs(origToggle4Hoffset  );
                toggle4.voffset = getVposs(origToggle4Voffset  );
                toggle5.hoffset = getHposs(origToggle5Hoffset  );
                toggle5.voffset = getVposs(origToggle5Voffset  );
                toggle6.hoffset = getHposs(origToggle6Hoffset  );
                toggle6.voffset = getVposs(origToggle6Voffset  );
                toggle7.hoffset = getHposs(origToggle7Hoffset  );
                toggle7.voffset = getVposs(origToggle7Voffset  );
                toggleS.hoffset = getHposs(origToggleSHoffset  );
                toggleS.voffset = getVposs(origToggleSVoffset  );
                toggleF.hoffset = getHposs(origToggleFHoffset  );
                toggleF.voffset = getVposs(origToggleFVoffset  );
                cancel.hoffset = getHposs(origcancelHoffset  );
                cancel.voffset = getVposs(origcancelVoffset  );
}
//=====================
// function ends
//=====================



//=================================================
// function to set the horizontal position of one of the moon widget's images
// in relation to the widget centre point
//=================================================
function getHposs(itemOrigHoffset) {
                var hModifier = 123 * scale;

                //find current location of the centre of the moon
                var moonCentre = moon.hoffset + ( moon.height / 2 );
                var origMoonCentre = origMoonHoffset  + ( origMoonHeight / 2 );
                var diffHoffset = origMoonCentre - itemOrigHoffset;
                var newDiffHoffset = diffHoffset * scale;
		var x = moon.hoffset - newDiffHoffset + (hModifier) ;
                return x;
}
//=====================
// function ends
//=====================


//=================================================
// function to set the vertical position of one of the moon widget's images
// in relation to the widget centre point
//=================================================
function getVposs(itemOrigVoffset) {
                var vModifier = 64 * scale;

                //find current location of the centre of the moon
                var moonCentre = moon.voffset + ( moon.height / 2 );
                var origMoonCentre = origMoonVoffset  + ( origMoonHeight / 2 );
                var diffVoffset = origMoonCentre - itemOrigVoffset;
                var newDiffVoffset = diffVoffset * scale;
		var x = moon.voffset - newDiffVoffset + (vModifier) ;
                return x;
}
//=====================
// function ends
//=====================


//=====================
// set the tooltips of the click points
//=====================
function setClickPointToolTips () {
                ring.tooltip = strSetDate;
                globetop.tooltip = strRestoreResizingBar;
                supportingBar.tooltip = strResizingBar;
                toggle1.tooltip = strToggle1;
                toggle2.tooltip = strToggle2;
                toggle3.tooltip = strToggle3;
                toggle4.tooltip = strToggle4;
                toggle5.tooltip = strToggle5;
                toggle6.tooltip = strToggle6;
                toggle7.tooltip = strToggle7;
                toggleS.tooltip = strToggleS;
                toggleF.tooltip = strToggleF;
                cancel.tooltip = strMoonWidgetAway;
                textBckgnd.tooltip = strDragTextBckgnd;
                text.tooltip = strDragText;
                moon.tooltip = strDragRing;
                dataWindow.tooltip = strDblClick;
}
//=====================
// function ends
//=====================

//=====================
// set the font for the information pop ups
//=====================
function sethoverTextFont () {
          text.font = preferences.popupPanelFont.value ;
  text.style.fontSize = preferences.popupPanelFontSizePref.value   + "px";

          hoverText.font = preferences.hoverTextFont.value ;
  hoverText.style.fontSize = preferences.hoverTextFontSizePref.value  + "px";
  
  log("preferences.hoverTextFontSizePref.value ",preferences.hoverTextFontSizePref.value);
}
//=====================
// function ends
//=====================