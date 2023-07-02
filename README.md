# Steampunk Moon_Phase_III

 
 Steampunk Moon_Phase_III widget, written in Javascript and XML for the Yahoo 
 Widget (Konfabulator) Engine. Created for XP, Vista, Win7, 8, 10+ as well as the 
 Apple Mac.
 
This widget is an attractive steampunk Yahoo widget for your desktop. The Steam 
Punk Yahoo Widget for your Windows/Mac desktop, a fully working yahoo widget 
and it can be moved around your desktop looking very steampunk indeed. 
It displays a beautiful moon globe that you can resize at will and that will 
display through the phases according to any date supplied
  
It is shown here on top of the steampunk orrery widget, the reason for this is 
that the orrery is the natural home for the moon phase widget. When the orrery 
runs, it controls the moon phase widget, passing the dates it is calculating to 
the moon widget for it to display the current moon phase. The orrery places the 
moon phase widget on the correct location for the screen and makes it appear 
when it is required.
  
  ![mediaplayer02_670](https://github.com/yereverluvinunclebert/Steampunk-MediaPlayer-Ywidget/assets/2788342/d9e011aa-e9c8-4bc8-8640-a9f983274d5c)

 The widget can be resized - Hover the cursor over the widget. Press the CTRL key 
 and use your mousewheel up or down. The widget will resize dynamically.
 
 The widget functionality is self-explanatory, tinker with it and you will soon 
 get to grips with it, you cannot do any harm. Think of it as a bit of steampunk 
 eye-candy with a useful function. The yahoo widget has a useful playlist. It 
 can hold up to 10,000 media files, can save and re-open playlists and saves 
 folders for later playing. You can drag/drop files or folders onto the widget 
 straight from Windows.

 ![media-player-demo2_261](https://github.com/yereverluvinunclebert/Steampunk-MediaPlayer-Ywidget/assets/2788342/49cba403-0bfe-469d-8932-ca5b03bc478b)

  Click on the slider and drag it to the left or right and the media player 
 volume will increase/decrease.There are pause, next and previous buttons.
 
 Click on the pause button and the media player sound will mute as the track 
 will be paused.

 ![media-player-yahoo-display_670](https://github.com/yereverluvinunclebert/Steampunk-MediaPlayer-Ywidget/assets/2788342/5a8b0ee5-29d3-4298-8df9-0eae80f052de)


 The position slider allows you to select the exact part of the track to play. 
 The rod to the right end of the chassis acts as a shuffle button. The rod on 
 the other end allows you to select a specific single file for playing. To 
 select a whole folder for playing click on the speaker.
 The widget itself has a built-in help screen (above) accessible when clicking 
 on the help pin lug.
 
 Right clicking will bring up a menu of options. One option is the player 
 settings where you can set the default player for the widget to use.You can 
 also select a variety of options for playing incuding selecting an audio CD.
 
![media-player-help_670](https://github.com/yereverluvinunclebert/Steampunk-MediaPlayer-Ywidget/assets/2788342/7ea3636c-225f-43a4-881f-64ee53b4995b)
 
 Double-clicking on the widget will cause a personalised Windows application to 
 fire up. The first time you run it there will be no assigned function and so it 
 will state as such and then pop up the preferences so that you can enter the 
 command of your choice. The widget takes command line-style commands for 
 windows. 

 ![yahoo-logo-small_111](https://github.com/yereverluvinunclebert/Steampunk-MediaPlayer-Ywidget/assets/2788342/c5668608-ab57-4665-a332-3bc9b7e07a9f)

 All javascript widgets need an engine to function, in this case the widget uses 
 the Yahoo Widget Konfabulator engine. The engine interprets the javascript and 
 creates the widget according to the XML description and using the images you 
 provide. 
 
Built using: 

	RJTextEd Advanced Editor  https://www.rj-texted.se/ 
	Adobe Photoshop CS ver 8.0 (2003)  https://www.adobe.com/uk/products/photoshop/free-trial-download.html  

Tested on :

	ReactOS 0.4.14 32bit on virtualBox    
	Windows 7 Professional 32bit on Intel    
	Windows 7 Ultimate 64bit on Intel    
	Windows 7 Professional 64bit on Intel    
	Windows XP SP3 32bit on Intel    
	Windows 10 Home 64bit on Intel    
	Windows 10 Home 64bit on AMD    
	Windows 11 64bit on Intel 
   
 Dependencies:
 
 o A windows-alike o/s such as Windows XP, 7-11 or Apple Mac OSX 11.  
 
 
 To run this widget properly you will also need:
 
 1. Steampunk Orrery Timekeeper Widget here; yereverluvinuncleber.deviantar�
 2. Steampunk Underwidget here: yereverluvinuncleber.deviantar�
   	
 
 o Installation of the yahoo widget SDK runtime engine  
 
	Yahoo widget engine for Windows - https://www.deviantart.com/users/outgoing?http://g6auc.me.uk/ywidgets_sdk_setup.exe  
	Yahoo widget engine for Mac - https://www.deviantart.com/users/outgoing?https://rickyromero.com/widgets/downloads/yahoo-widgets-4.5.2.dmg
 
 Running the widget using a javascript engine frees javascript from running only 
 within the captivity of a browser, you will now be able to run these widgets on 
 your Windows desktop as long as you have the correct widget engine installed.
  
 Instructions for running Yahoo widgets on Windows
 =================================================
 
 1. Install yahoo widget SDK runtime engine
 2. Download the gauge from this repo.
 3. Unzip it
 4. Double-click on the resulting .KON file and it will install and run
 
 Instructions for running Yahoo widgets on Mac OS/X ONLY
 ========================================================
 
 1. Install yahoo widget SDK runtime engine for Mac
 2. Download the gauge from this repo.
 3. Unzip it
 4. For all all recent versions of Mac OS/X including Sierra, edit the following 
 file:
 
 com.yahoo.widgetengine.plist which is in /Users/xxx/Library/Preferences. Look 
 for these lines: 
    
   <key>DockOpen</key>  
   <string>false</string>  
 
 Change to false if it is true.
 
 5. Double-click on the widgets .KON file and it will install and run
 
 Wit these instructions you should be able to start Yahoo! Widgets and the 
 menubar item should appear. Widgets can then be started from the menubar or by 
 double-clicking on the KON file in the usual way.
 
 
 LICENCE AGREEMENTS:
 
 Copyright 2023 Dean Beedell
 
 In addition to the GNU General Public Licence please be aware that you may use
 any of my own imagery in your own creations but commercially only with my
 permission. In all other non-commercial cases I require a credit to the
 original artist using my name or one of my pseudonyms and a link to my site.
 With regard to the commercial use of incorporated images, permission and a
 licence would need to be obtained from the original owner and creator, ie. me.
 
