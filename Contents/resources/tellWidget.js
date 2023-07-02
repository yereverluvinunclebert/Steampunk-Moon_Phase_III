/* 	Code to handle tellWidget() calls made to this widget
*	From a suggestion and template code supplied by Harry Whitfield
*	Mark Crossley June 2007
*/

// "action:name1=param1;name2=param2;name3=param3;name4=param4" etc.

function parseTellCommand(data)
{									// data   ::= action ":" params
									// params ::= (param) (";" param)*
									// param  ::= name "=" value
	var params = [], k = 0;
	var action;

	var lookFor = /^(\w+)\:(?:(\w+)\=([^\;]+))((?:\;(?:\w+)\=(?:[^\;]+))*)$/;
	var found = data.match(lookFor);
	if (found !== null)
	{
		action = found[1];
		params[k] = [ found[2], found[3] ];
		k += 1;

		while (found[4])
		{
			data = found[4];
			lookFor = /^(\;)(\w+)\=([^\;]+)((?:\;(?:\w+)\=(?:[^\;]+))*)$/;
			found = data.match(lookFor);
			if (found !== null)
			{
				params[k] = [ found[2], found[3] ];
				k += 1;
			}
		}
		return [ action, params ];	// returns array with [0] = action and [1] =  params
	}
	else { return null; }
}

function setExternalDate(value)
{
	var newDate;
	var number = parseInt(value, 10);
        //log("TELLWIDGET RECEIVING****Date**** "+value);

	if (!isNaN(number) && (value.length < 16) && number !== 0)
	{
		//create a new date object to decode the number sent to us
		newDate = new Date(number);
                
                //log("newDate* "+newDate);

		//check the year falls in a sensible range
		if (!(newDate.getFullYear() >= 1582 && newDate.getFullYear() <= 2500))
		{
			//no it doesn't - ignore it
			return;
		}

		//set the observer object
		observer.year = newDate.getFullYear();
		observer.month = newDate.getMonth()+1;
		observer.day = newDate.getDate();
		observer.hours = newDate.getHours();
		observer.minutes = newDate.getMinutes();
		observer.seconds = newDate.getSeconds();

		//switch off realtime settings
		preferences.realTimePref.value = "0";

		//finally update the widget
		updateImage();
	}
	else if (number == 0)//
	{
		//switch on realtime settings
		preferences.realTimePref.value = "1";
		//update the widget
		updateImage();
	}
}


function setExternalPreference(pref, val)
{
        //log("TELLWIDGET RECEIVING****Pref**** "+pref);
        switch (pref)
	{
		case "lang":
			val = val.toUpperCase();
			switch (val)
			{
				case "ES":
				case "FR":
				case "DE":
				case "EN":
					preferences.languagePref.value = val;
					break;
			}
			break;
		case "latitude":
		        log("TELLWIDGET RECEIVING****latitude**** "+val);
			if (validateLatLon(val) != -999)
				preferences.latPref.value = val;
			break;
		case "longitude":
                        log("TELLWIDGET RECEIVING****longitude**** "+val);
			if (validateLatLon(val) != -999)
				preferences.lonPref.value = val;
			break;
		case "hoffset":
		        log("TELLWIDGET RECEIVING****hoffset**** "+val);
                                var mmm = (val - 158 );
                                mainWindow.hoffset = mmm;
			break;
		case "voffset":
		      log("TELLWIDGET RECEIVING****voffset**** "+val);
                                var mmm = (val - 155 );
				mainWindow.voffset = mmm;
			break;
		case "visible":
		        log("TELLWIDGET RECEIVING****visible**** "+val);
			if (val == "false" || val == "true")  {
				mainWindow.visible = val;
			}
                        break;
		case "locked":
			if (val == "false" || val == "true")  {
		        log("TELLWIDGET RECEIVING****locked**** "+val);
			        // both my window and mainwindow must be locked
				//myWindow.locked = val;
				mainWindow.locked = val;
			}
			break;
		case "level":
		        log("TELLWIDGET RECEIVING****level**** "+val);
                        //
                        val = val.replace(/"/g,"");
                        preferences.windowLevel.value = val;
                        mainWindow.level = val;
		        log("TELLWIDGET RECEIVING****level**** "+preferences.windowLevel.value);
			break;
		case "long":
			if (validateLatLon(val) != -999)
				preferences.lonPref.value = val;
			break;
		case "click":
			if (val == "0" || val == "1")
				//preferences.clickPref.value = val;
			break;
		case "topo":
			if (val == "G" || val == "T")
				preferences.topoPref.value = val;
			break;
		case "autoupdate":
			if (val == "0" || val == "1")
				preferences.autoUpdatePref.value = val;
			break;
		case "size":
		        log("TELLWIDGET RECEIVING****size**** "+val);
			if (+val >= preferences.sizePref.minLength && +val <= preferences.sizePref.maxLength)
				preferences.sizePref.value = val;
			break;
		case "rotate":
			if (val == "0" || val == "1" || val == "2")
				preferences.rotatePref.value = val;
			break;
		case "fade":
			if (+val >= preferences.fadePref.minLength && +val <= preferences.fadePref.maxLength)
				preferences.fadePref.value = val;
			break;
		case "info":
			if (val == "0" || val == "1")
				preferences.showInfoPref.value = val;
			break;
		case "utc":
			if (val == "1" || val == "0")
				preferences.utcTimePref.value = val;
			break;
		default:
			return;
	}

}


//Handle the date/time being passed to the widget via a tellWidget() call
// the only action understood is "setDate" followed by an integer date value.
// If the date value is zero, then the widget reverts to realtime
// Calling syntax:
// 		tellWidget("Moon Phase II", "setDate:date=1180978368631");
//		tellWidget("Moon Phase II", "setDate:date=" + new Date().getTime());
// 		tellWidget("Moon Phase II", "setDate:date=0");
//		tellWidget("Moon Phase II", "setPref:preference1=value1;preference2=value2;...");

function handleExternalCall()
{
	var command, action, params, item, name, value;
	command = parseTellCommand(system.event.data);
	if (command !== null)
	{
                try
		{
			action = command[0].toLowerCase();	// "setDate"
			params = command[1];				// [ [ "date", "1180978368631" ] ]
			if (action == "setdate")
			{
				item  = params[0];
				name  = item[0].toLowerCase();
				value = item[1];
				//don't pass the date to the function if the moon widget is currently not visible
                                if (mainWindow.visible == true && name  == "date") setExternalDate(value);
			}
			else if (action == "setpref")
			{
				var i = 0;
				while (params[i])
				{
					item = params[i];
					setExternalPreference(item[0].toLowerCase(), item[1]);
					i += 1;
				}

				//update the preferences
				updateBehavior(true);

				//update the image
				updateImage();
			}

    	}
    	catch(e)
    	{
    		return;
    	}
	}
}