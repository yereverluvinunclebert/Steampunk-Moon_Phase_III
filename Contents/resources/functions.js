//===========================================================================
// functions.js
// Steampunk Volume widget  1.0.3
// Originally written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
// Vitality code, advice and patience from Harry Whitfield
//
//===========================================================================

/*global mainWindow, mainWindowwidthDefault, mainWindowheightDefault,
	cableWheelSet, cableWheelSethoffsetDefault, cableWheelSetvoffsetDefault,
	cableWheelSetwidthDefault, cableWheelSetheightDefault, cable, cablehoffsetDefault,
	cablevoffsetDefault, cablewidthDefault, cableheightDefault, pipes, pipeshoffsetDefault,
	pipesvoffsetDefault, pipeswidthDefault, pipesheightDefault, bell, bellhoffsetDefault,
	bellvoffsetDefault, bellwidthDefault, bellheightDefault, indicatorRed,
	indicatorRedhoffsetDefault, indicatorRedvoffsetDefault, indicatorRedwidthDefault,
	indicatorRedheightDefault, speaker, speakerhoffsetDefault, speakervoffsetDefault,
	speakerwidthDefault, speakerheightDefault, bar, barhoffsetDefault, barvoffsetDefault,
	barwidthDefault, barheightDefault, sliderSet, sliderSethoffsetDefault,
	sliderSetvoffsetDefault, sliderSetwidthDefault, sliderSetheightDefault, text1,
	text1hoffsetDefault, text1voffsetDefault, text1fontDefault, text2, text2hoffsetDefault,
	text2voffsetDefault, text2fontDefault, tingingSound, startup, Scale:true
*/

/*properties
    altKey, contextMenuItems, data, debug, event, fontsize, hOffset, height,
    hoffset, hoffsetpref, imageCmdPref, onContextMenu, onRunCommandInBgComplete,
    onSelect, open, openFilePref, sizePref, soundpref, style, title, tooltip,
    tooltipPref, vOffset, value, visible, voffset, voffsetpref, widgetTooltip,
    width
*/

//======================================================================================
// Function to move the main_window onto the main screen
//======================================================================================
function mainScreen() {
// if the widget is off screen then move into the viewable window

    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 32) {
        mainWindow.vOffset = 32; // avoid Mac toolbar
    }
    //log("%MOON-I-MAINSCREEN, mainWindow.vOffset " + mainWindow.vOffset);
    //log("%MOON-I-MAINSCREEN, screen.height " + screen.height);

    if (mainWindow.hOffset + 140 > screen.width ) {
        mainWindow.hOffset = (screen.width - mainWindow.width) + 50;
    }
    if (mainWindow.vOffset + 150 > screen.height ) {
        mainWindow.vOffset = (screen.height - mainWindow.height) + 50; // avoid Mac toolbar
    }

    // calculate the current hlocation in % of the screen
    //store the current hlocation in % of the screen
    if ( preferences.hLocationPercPref.value != 0) {
      preferences.hLocationPercPref.value = (mainWindow.hoffset / screen.width)* 100;
    }
    if ( preferences.vLocationPercPref.value != 0) {
      preferences.vLocationPercPref.value = (mainWindow.voffset / screen.height)* 100;
    }
    // now move the widget to a preferred location if one has been set
    if (preferences.hoffsetpref.value > 0) {
        mainWindow.hOffset = parseInt(preferences.hoffsetpref.value, 10);
    }
    if (preferences.voffsetpref.value > 0) {
        mainWindow.vOffset = parseInt(preferences.voffsetpref.value, 10);
    }

}
//=====================
//End function
//=====================

//===========================================
// this function opens the online help file
//===========================================
function menuitem1OnClick() {
    var answer = alert("This button opens a browser window and connects to the help page for this widget. Do you wish to proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/instructions-for-the-steampunk-moon-phase-widget.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the URL for paypal
//===========================================
function menuitem2OnClick() {
    var answer = alert("Help support the creation of more widgets like this, send us a coffee! This button opens a browser window and connects to the Kofi donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("https://www.ko-fi.com/yereverluvinunclebert");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens my Amazon URL wishlist
//===========================================
function menuitem3OnClick() {
    var answer = alert("Help support the creation of more widgets like this. Buy me a small item on my Amazon wishlist! This button opens a browser window and connects to my Amazon wish list page). Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.amazon.co.uk/gp/registry/registry.html?ie=UTF8&id=A3OBFB6ZN4F7&type=wishlist");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the rocketdock URL
//===========================================
function menuitem4OnClick() {

    var answer = alert("Log in and vote for the widget on Rocketdock. This button opens a browser window and connects to the Rocketdock page where you can give the widget a 5 star rating... Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://rocketdock.com/addon/misc/45672");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the underWidget URL
//===========================================
function underWidget() {
        var answer = alert("This button opens a browser window and connects to the Under Widget download page where you can download and install the UnderWidget that provides the cogs and gubbins underneath this widget", "Open Browser Window", "No Thanks");
	if (answer === 1) {
		openURL("http://lightquick.co.uk/downloads/steampunk-underwidget.html?Itemid=264");
		if (preferences.soundPref.value === "enable") {
			play(winding, false);
		}
	}
}
//=====================
//End function
//=====================

//===========================================
// this function opens the Moon Widget URL
//===========================================
function orreryWidget() {
	var answer = alert("This button opens a browser window and connects to the Orrery Widget download page where you can download and install the timekeeper widget that provides extra UI functionality for this widget", "Open Browser Window", "No Thanks");

	if (answer === 1) {
		openURL("http://lightquick.co.uk/downloads/steampunk-orrery-calendar-clock-yahoo-widget-mkii.html?Itemid=264");
		if (preferences.soundPref.value === "enable") {
			play(winding, false);
		}
	}
}
//=====================
//End function
//=====================
//===========================================
// this function opens other widgets URL
//===========================================
function menuitem5OnClick() {
    var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/steampunk-widgets.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the download URL
//===========================================
function menuitem6OnClick() {
    var answer = alert("Download latest version of the widget - this button opens a browser window and connects to the widget download page where you can check and download the latest zipped .WIDGET file). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/downloads/steampunk-moon-phase-widget.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the browser at the contact URL
//===========================================
function menuitem7OnClick() {
    var answer = alert("Visiting the support page - this button opens a browser window and connects to our contact us page where you can send us a support query or just have a chat). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/contact.html?Itemid=3");
    }
}
//=====================
//End function
//=====================

//===========================================
// this function edits the widget
//===========================================
function editWidget() {
    //var answer = alert("Editing the widget. Proceed?", "Open Editor", "No Thanks");
    //if (answer === 1) {
        //uses the contents of imageEditPref to initiate your default editor
        performCommand("menu");
    //}
}
//=====================
//End function
//=====================

//===========================================
// this function opens the browser at the contact URL
//===========================================
function facebookChat() {
    var answer = alert("Visiting the Facebook chat page - this button opens a browser window and connects to our Facebook chat page.). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.facebook.com/profile.php?id=100012278951649");
    }
}
//=====================
//End function
//=====================

//===========================================
// this function allows a spacer in the menu
//===========================================
function nullfunction() { print("null"); }
//=====================
//End function
//=====================



//=========================================================================
// this function assigns translations to preference descriptions and titles
//=========================================================================
function setmenu() {
      var items = mainWindow.contextMenuItems;

        items[2] = new MenuItem();
        items[2].title = "Online Help";
        items[2].onSelect = function () {
            menuitem1OnClick();
        };
        items[3] = new MenuItem();
        items[3].title = "Donate a Coffee with Ko-Fi";
        items[3].onSelect = function () {
            menuitem2OnClick();
        };
        items[6] = new MenuItem();
        items[6].title = "";
        items[6].onSelect = function () {
            nullfunction();
        };
        items[7] = new MenuItem();
        items[7].title = "See More Steampunk Widgets";
        items[7].onSelect = function () {
            menuitem5OnClick();
        };
        items[8] = new MenuItem();
        items[8].title = "Contact Support";
        items[8].onSelect = function () {
            menuitem7OnClick();
        };
        items[9] = new MenuItem();
        items[9].title = "Display Licence Agreement...";
        items[9].onSelect = function() {
            displayLicence();
        };
        items[10] = new MenuItem();
        items[10].title = "Download Latest Version";
        items[10].onSelect = function () {
            menuitem6OnClick();
        };
        items[11] = new MenuItem();
        items[11].title = "";
        items[11].onSelect = function () {
            nullfunction();
        };
        items[12] = new MenuItem();
        items[12].title = "Get the optional Under Widget";
        items[12].onSelect = function () {
            underWidget();
        };
        items[13] = new MenuItem();
        items[13].title = "Get the essential Orrery Widget";
        items[13].onSelect = function () {
            orreryWidget();
        };

        items[14] = new MenuItem();
        items[14].title = "";
        items[14].onSelect = function() {
            nullfunction();
        };
        items[15] = new MenuItem();
        items[15].title = "Chat about Steampunk Widgets on Facebook";
        items[15].onSelect = function() {
            facebookChat();
        };

        items[16] = new MenuItem();
        items[16].title = "";
        items[16].onSelect = function() {
            nullfunction();
        };

        items[17] = new MenuItem();
        items[17].title = "Reveal Widget in Windows Explorer";
        items[17].onSelect = function() {
            findWidget();
        };
        items[18] = new MenuItem();
        items[18].title = "";
        items[18].onSelect = function() {
            nullfunction();
        };
        items[19] = new MenuItem();
        items[19].title = "Reload Widget (F5)";
        items[19].onSelect = function () {
            reloadWidget();
        };      
        
        if (preferences.imageEditPref.value != "" && debugFlg === "1") {
            mItem = new MenuItem();
            mItem.title = "Edit Widget using " + preferences.imageEditPref.value;
            mItem.onSelect = function () {
                editWidget();
            };
            items.push(mItem);
         }
                     
        mainWindow.contextMenuItems = items;

}
//=====================
//End function
//=====================

//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function changePrefs() {
    log("preferences Changed");
    savePreferences(); 	/// <<<<<<<<<<<<<
    sleep(1000);
    startup();			/// <<<<<<<<<<<<<
//	reloadWidget();
}
//=====================
//End function
//=====================
//======================================================================================
// Function to perform commands
//======================================================================================
var runningTask;

//=====================
// function to carry out a command
//=====================
function performCommand(method) {
    var answer;

    if (preferences.soundPref.value === "enabled") {
        play(ting, false);
    }

    if (system.event.altKey) { // filesystem.open() call
        if (preferences.openFilePref.value === "") {
            answer = alert("This widget has not been assigned an alt+double-click function. You need to open the preferences and select a file to be opened. Do you wish to proceed?", "Open Preferences", "No Thanks");
            if (answer === 1) {
                showWidgetPreferences();
            }
            return;
        }
        filesystem.open(preferences.openFilePref.value);
    } else { // runCommandInBg() call
        if (preferences.imageCmdPref.value === "") {
            answer = alert("This widget has not been assigned a double-click function. You need to open the preferences and enter a run command for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
            if (answer === 1) {
                showWidgetPreferences();
            }
            return;
        }
        print("method "+method);
        if (method === "menu") {
            runCommandInBg(preferences.imageEditPref.value, "runningTask");        		
        } else {
            runCommandInBg(preferences.imageCmdPref.value, "runningTask");        	
        }
    }
}
//=====================
//End function
//=====================

widget.onRunCommandInBgComplete = function () {
    var theTag = system.event.data;
    print("onRunCommandInBgComplete for tag: " + theTag);
    if (theTag === "runningTask") {
        if (widget.debug === "on") {
            print(preferences.imageCmdPref.value + "\n\n" + runningTask);
        } else {
            alert(preferences.imageCmdPref.value + "\n\n" + runningTask);
        }
    }
};


//=================================================
// function to check whether the moon widget exists
//=================================================
function checkOrreryWidget() {
	var expandedForm, widgetForm, answer;

		log("%TIMEK-I-CHKM, 1 Checking the Orrery widget is installed.");
		log("%TIMEK-I-CHKM, 2 Checking system.userWidgetsFolder - " + system.userWidgetsFolder);
		// expandedForm = system.userWidgetsFolder + "/Orrery_Phase_III/Contents/Orrery_phase_iii.kon";
		// temporary development version of the widget
		//log("%TIMEK-I-CHKM, D:/DEAN/steampunk theme/Orrery_Phase_III/Contents/Orrery_phase_iii.kon ");
		expandedForm = preferences.orreryLocationPref.value;
                //expandedForm = "D:/DEAN/steampunk theme/Orrery_Phase_III/Contents/Orrery_phase_iii.kon";

		//widget form
		widgetForm = system.userWidgetsFolder + "/timekeeper.widget";
		//log("widgetForm ", widgetForm);

		// use the expanded form in preference to the .widget form
		if ( expandedForm != "" ) {
                    log("Checking expanded form ", expandedForm);
                    if (filesystem.itemExists(expandedForm)) {
    			log("%TIMEK-I-CHKM, 3 Checking expanded form of the Orrery widget - " + filesystem.itemExists(expandedForm));
    			preferred_form = expandedForm;
    		    } else if (filesystem.itemExists(widgetForm)) {
    			log("%TIMEK-I-CHKM, 4 Checking widget form of the Orrery widget - " + filesystem.itemExists(widgetForm));
    			preferred_form = widgetForm;
    		    }
                } else {
       			preferred_form = widgetForm;
                        log("Preferred_form ", preferred_form);
                }

                log("Checking either form ");
                log("Checking expandedForm ",expandedForm);
                log("Checking widgetForm ",widgetForm);
		if (filesystem.itemExists(expandedForm) || filesystem.itemExists(widgetForm)) {
			log("%TIMEK-I-CHKM, 5 Orrery widget is installed." + preferred_form);
			orreryWidgetFound = true;
			play(tingingSound, false);
		} else {
			orreryWidgetFound = false;
			log("%TIMEK-I-CHKM, orrery widget is NOT installed.");
			//cancel.opacity = 0;
			mainWindow.locked = false;
		}

}
//=====================
//End function
//=====================


//===========================================
// this function causes explorer to be opened and the file selected
//===========================================
function findWidget() {

 // temporary development version of the widget
    var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
    var alertString = "The widget folder is: \n";
    if (filesystem.itemExists(widgetFullPath)) {
        alertString += system.userWidgetsFolder + " \n\n";
        alertString += "The widget name is: \n";
        alertString += widgetName + ".\n ";

        alert(alertString, "Open the widget's folder?", "No Thanks");

        filesystem.reveal(widgetFullPath);
    } else {
        widgetFullPath = resolvePath(".");   
        filesystem.reveal(widgetFullPath);
        print("widgetFullPath " + widgetFullPath);
    }
}
//=====================
//End function
//=====================

//======================================================================================
// END script functions.js
//======================================================================================


