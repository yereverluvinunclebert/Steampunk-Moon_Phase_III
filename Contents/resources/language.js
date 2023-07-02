// 1.0 Initial release
// 1.1 Updated for release 1.4 of widget

//strings for language
var strAlertMsgLong, strAlertMsgLat, strAlertBtnContinue, strAlertBtnPrefs;
var strCurrentPhase, strIllumFrac;
var strAge1, strAge2;
var strMoonDown, strMoonUp, strMoonRise, strMoonSet;
var strSunRise, strSunSets;
var strMoonPos, strMoonRange;
var strFullMoon, strNewMoon;
var strWaningGibbous, strLastQuarter, strWaningCrescent, strWaxingCresent, strFirstQuarter, strWaxingGibbous;
var strUnknownPhase;
var strBelowHorizon;
var strComputerClock, strYear, strMonth, arrMonths, strDay, strHour, strMinute;
var strRealTimeTooltip, strEnterDateTime, strBtnUserDate, strBtnRealDate;
var strMoonLibration, strMoonLibLong, strMoonLibLat;
var strMoonWidgetAway, strRestoreResizingBar, strResizingBar, strToggle1, strToggle2;
var strToggle3, strToggle4, strToggle5, strToggle6, strToggle7, strToggleS, strToggleF, strCancel;
var strDragTextBckgnd, strDragText, strDragRing, strDblClick;

var g_lastLanguage;


function setLanguage()
{

	// do we need to do anything?
	if (g_lastLanguage == preferences.languagePref.value)
		return;
	else
		g_lastLanguage = preferences.languagePref.value;

	switch (g_lastLanguage)
	{
		case "EN":
			strAlertMsgLong = "The value you entered for your longitude is invalid.\nFormats: ddd.dd[W/E], dddDmmMssS[W/E], ddd:mm:ss\"[W/E], ddd mm ss[W/E], ddd,mm,dd[W/E]";
			strAlertMsgLat = "The value you entered for your latitude is invalid.\nFormats: dd.dd[N/S], ddDmmMssS[N/S], dd:mm:ss\"[N/S], dd mm ss[N/S], dd,mm,dd[N/S]";
			strAlertBtnContinue = "Continue";
			strAlertBtnPrefs = "Preferences";
			strCurrentPhase = "Phase Angle ";
			strAge1 = "Age "; strAge2 = " days";
			strIllumFrac = "Illuminated fraction ";
			strMoonDown = "Moon is down all day";
			strMoonUp = "Moon is up all day";
			strMoonRise = "Moon rise ";
			strMoonSet = "Moon set ";
			strSunRise = "Sun rise ";
			strSunSets = "Sun set ";
			strMoonPos = "Position ";
			strMoonRange = "Distance ";
			strMoonLibration = "Libration";
			strMoonLibLong = "Longitude: ";
			strMoonLibLat = "Latitude: ";
			strNewMoon = "New Moon";
			strFullMoon = "Full Moon";
			strWaningGibbous = "Waning Gibbous";
			strLastQuarter = "Last Quarter";
			strWaningCrescent = "Waning Crescent";
			strWaxingCresent = "Waxing Crescent";
			strFirstQuarter = "First Quarter";
			strWaxingGibbous = "Waxing Gibbous";
			strUnknownPhase = "! Unknown Phase !";
			strBelowHorizon = "Not visible";
			strTopocentric = "Topocentric";
			strGeocentric = "Geocentric";
			strLocal = "local";
			strComputerClock = "Use computer clock";
			strYear = "Year: ";
			strMonth = "Month: ";
			arrMonths = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
			strDay = "Day: ";
			strHour = "Hour: ";
			strMinute = "Minute: ";
			strRealTimeTooltip = "Moon now";
			strInvalidYear = "The year you entered is not valid, the valid range is 1582-2500.";
			strEnterDateTime = "User defined date/time";
			strBtnUserDate = "User date";
			strBtnRealDate = "Realtime";
                        strSetDate = "Clicking on the outer ring sets the exact time of the moon phase (24hr clock)";
                        strMoonWidgetAway = "click here to make the moon phase widget go away";
                        strRestoreResizingBar = "click here to restore the resizing bar";
                        strResizingBar ="click on the resizing bar to make it go away";
                        strToggle1 ="click here to reduce size";
                        strToggle2 ="click here to reduce size";
                        strToggle3 ="click here to reduce size";
                        strToggle4 ="click here to reduce size";
                        strToggle5 ="click here to reduce size";
                        strToggle6 ="click here to reduce size";
                        strToggle7 ="click here to reduce size";
                        strToggleS ="click here to open the preferences";
                        strToggleF ="click here to open the information window";
                        strDragTextBckgnd ="Drag me to move me. Double click here to read more moon phase information and a final double click to make the panel disappear";
                        strDragText ="Drag me to move me. Double click here to read more moon phase information and a final double click to make the panel disappear";
                        strDragRing ="To change the moon phase drag the orrery date ring";
                        strDblClick = strDragTextBckgnd;
			menuResetDefaults.title = "Reset preferences to defaults";
			menuDate.title = "Enter a moon phase date";

			preferences.languagePref.title = "Select language:";
			preferences.languagePref.description = "Select the language of your choice.";
			preferences.latPref.title = "Latitude:";
			preferences.lonPref.title = "Longitude:";
			preferences.lonPref.description = "Enter the latitude and longitude for your location. Eg. 51.5072N";
			preferences.rotatePref.title = "Rotate image";
			preferences.rotatePref.option = new Array("Apparent view","North up","South up");
			preferences.rotatePref.description = "Show the moon image in the correct horizon orientation for your location, North up, or South up.";
			preferenceGroups.viewGrp.title = "Appearance";
			preferences.moonSizePref.title = "Moon size:";
			preferences.moonSizePref.description = "Use this drop-down selector to adjust the size of the Moon in pixels.";
			preferences.fadePref.title = "Shadow density:";
			preferences.fadePref.description = "Use this slider to adjust the opacity of the shadow. 100% is the darkest";
			preferences.topoPref.title = "Positional info:";
			preferences.topoPref.option = new Array("Topocentric","Geocentric");
			preferences.topoPref.description = "Displays the Moons position relative to your geographic position (topocentric), or the centre of the Earth (geocentric)";
			preferences.realTimePref.title = strComputerClock;
			preferences.realTimePref.description = "Clear this to disable real-time display and be prompted for a date";
			preferences.showInfoPref.title = "Show moon information";
			preferences.showInfoPref.description = "Show summary date/time/phase age information when the mouse is place over the moon.";
			preferences.infoStickPref.title = "Moon information sticks";
			preferences.infoStickPref.description = "Summary information persists on the moon after a mouse-over";
			preferences.utcTimePref.title = "Rise/Setting times in UTC";
			break;

		case "FR":
			strAlertMsgLong = "La valeur que vous avez donné pour votre longitude est incorrecte.\nFormats: ddd.dd[W/E], dddDmmMssS[W/E], ddd:mm:ss\"[W/E], ddd mm ss[W/E], ddd,mm,dd[W/E]";
			strAlertMsgLat = "La valeur que vous avez donné pour votre latitude est incorecte.\nFormats: dd.dd[N/S], ddDmmMssS[N/S], dd:mm:ss\"[N/S], dd mm ss[N/S], dd,mm,dd[N/S]";
			strAlertBtnContinue = "Continuer";
			strAlertBtnPrefs = "Préférences ";
			strCurrentPhase = "Angle de phase ";
			strAge1 = "Âge "; strAge2 = " jours";
			strIllumFrac = "Fraction lumineuse ";
			strMoonDown = "La lune est vers le bas toute la journée";
			strMoonUp = "La lune est vers le haut toute la journée";
			strMoonRise = "Lever de la lune ";
			strMoonSet = "Coucher de la lune ";
			strSunRise = "Lever de soleil ";
			strSunSets = "Coucher du soleil ";
			strMoonPos = "Position ";
			strMoonRange = "Distance ";
			strMoonLibration = "Libration";
			strMoonLibLong = "Longitude: ";
			strMoonLibLat = "Latitude: ";
			strNewMoon = "Nouvelle lune";
			strFullMoon = "Pleine lune";
			strWaningGibbous = "Affaiblissement gibbbeux";
			strLastQuarter = "Dernier trimestre";
			strWaningCrescent = "Croissant de affaiblissement";
			strWaxingCresent = "Cirer le croissant";
			strFirstQuarter = "Premier trimestre";
			strWaxingGibbous = "Cirer gibbbeux";
			strUnknownPhase = "! Phase inconnue !";
			strBelowHorizon = "Non évident";
			strTopocentric = "Topocentrique";
			strGeocentric = "Géocentrique";
			strLocal = "local";
			strComputerClock = "Utiliser l'horloge d'ordinateur";
			strYear = "Année: ";
			strMonth = "Mois: ";
			arrMonths = new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
			strDay = "Jour: ";
			strHour = "Heure: ";
			strMinute = "Minute: ";
			strRealTimeTooltip = "Lune maintenant";
			strInvalidYear = "L'année où vous avez écrite est inadmissible, la gamme valide est 1582-2500.";
			strEnterDateTime = "Date/heure défini pour l'utilisateur";
			strBtnUserDate = "Date écrite";
			strBtnRealDate = "En temps réel";

			menuRefreshNow.title = "Mise à jour maintenant";
			menuResetDefaults.title = "Remettre les préférences par défaut";
			menuDate.title = "Date définie pour l'utilisateur...";

			preferences.languagePref.title = "Choisissez la langue :";
			preferences.languagePref.description = "Choisir les différentes versions de langue.";
			preferences.latPref.title = "Latitude :";
			preferences.lonPref.title = "Longitude :";
			preferences.rotatePref.title = "Tourner l'image";
			preferences.rotatePref.option = new Array("Vue apparente","Nord vers le haut","Sud vers le haut");
			preferences.rotatePref.description = "Montrer l'image dans l'orientation correcte à votre horizon, nord vers le haut, ou sud vers le haut.";
			preferences.lonPref.description = "Indiquez la latitude et la longitude de votre site.";
			preferenceGroups.viewGrp.title = "Aspect";
			preferences.moonSizePref.title = "Taille de lune:";
			preferences.moonSizePref.description = "Utiliser ce glisseur pour ajuster la taille de la lune.";
			preferences.fadePref.title = "Densité d'ombre:";
			preferences.fadePref.description = "Utiliser ce glisseur pour ajuster l'obscurité de l'ombre.";
			preferences.topoPref.title = "Information de position:";
			preferences.topoPref.option = new Array("Topocentrique","Géocentrique");
			preferences.topoPref.description = "Montre la position de lunes relativement à votre position géographique (topocentric), ou le centre de la terre (géocentrique)";
			preferences.realTimePref.title = strComputerClock;
			preferences.realTimePref.description = "Dégager ceci pour neutraliser l'affichage en temps réel et pour être incité pendant une date";
			preferences.showInfoPref.title = "Montrer souris-au-dessus de l'information";
			preferences.showInfoPref.description = "Montrer la brève information de date/heure et d'âge sur la souris plus de.";
			break;

		case "DE":
		// Courtesy of Anton Schmidt
			strAlertMsgLong = "Den Wert, den du für deine Länge eintrugst, ist unzulässig.\nFormate: ddd.dd[W/E], dddDmmMssS[W/E], ddd:mm:ss\"[W/E], ddd mm ss[W/E], ddd,mm,dd[W/E]";
			strAlertMsgLat = "Den Wert, den du für deine Breite eintrugst, ist unzulässig.\nFormate: dd.dd[N/S], ddDmmMssS[N/S], dd:mm:ss\"[N/S], dd mm ss[N/S], dd,mm,dd[N/S]";
			strAlertBtnContinue = "Fortfahren";
			strAlertBtnPrefs = "Präferenzen";
			strCurrentPhase = "Winkel der Phase ";
			strAge1 = "Alter "; strAge2 = " Tage";
			strIllumFrac = "beleuchteter Teil ";
			strMoonDown = "Mond den ganzen Tag nicht sichtbar";
			sstrMoonUp = "Mond den ganzen Tag sichtbar";
			strMoonRise = "Mondaufgang ";
			strMoonSet = "Monduntergang ";
			strSunRise = "Sonnenaufgang ";
			strSunSets = "Sonnenuntergang ";
			strMoonPos = "Position ";
			strMoonRange = "Distanz ";
			strMoonLibration = "Libration";
			strMoonLibLong = "Länge: ";
			strMoonLibLat = "Breite: ";
			strNewMoon = "Neumond";
			strFullMoon = "Vollmond";
			strWaningGibbous = "abnehmender Mond";
			strLastQuarter = "Letztes Viertel";
			strWaningCrescent = "abnehmender Halbmond";
			strWaxingCresent = "zunehmender Halbmond";
			strFirstQuarter = "Erstes Viertel";
			strWaxingGibbous = "zunehmender Mond";
			strUnknownPhase = "! Unbekannte Phase !";
			strBelowHorizon = "Nicht sichtbar";
			strTopocentric = "Topocentric";
			strGeocentric = "Geocentric";
			strLocal = "lokal";
			strComputerClock = "Computertaktgeber benutzen";
			strYear = "Jahr: ";
			strMonth = "Monat: ";
			arrMonths = new Array("Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember");
			strDay = "Tag: ";
			strHour = "Stunde: ";
			strMinute = "Minute: ";
			strRealTimeTooltip = "Mond jetzt";
			strInvalidYear = "Das Jahr, das du erreichtest, ist, die gültige Strecke ist 1582-2500 unzulässig.";
			strEnterDateTime = "Verbraucherbestimmtes Datum/Zeit";
			strBtnUserDate = "Benutzerdatum";
			strBtnRealDate = "Realzeit";

			menuRefreshNow.title = "Update jetzt";
			menuResetDefaults.title = "Präferenzen zu den Rückstellungen zurückstellen";
			menuDate.title = "Verbraucherbestimmtes Datum...";

			preferences.languagePref.title = "Sprache wählen:";
			preferences.languagePref.description = "Sprache des Widget wählen.";
			preferences.latPref.title = "Breitengrad:";
			preferences.lonPref.title = "Längengrad: ";
			preferences.lonPref.description = "Den Breitengrad und den Längengrad deines Standortes eingeben.";
			preferences.rotatePref.title = "Bildanzeige";
			preferences.rotatePref.option = new Array("effektive Sicht","nördliche Halbkugel","südliche Halbkugel");
			preferences.rotatePref.description = "Die Anzeige des Mond-Bildes zu deinem Standort festlegen, entweder  effektive Sicht oder  nördliche Erd-Halbkugel oder südliche Erd-Halbkugel.";
			preferenceGroups.viewGrp.title = "Aussehen";
			preferences.moonSizePref.title = "Mondgröße:";
			preferences.moonSizePref.description = "Diesen Schieber benutzen, um die Grösse des Mondes zu bestimmen.";
			preferences.fadePref.title = "Schattendichte:";
			preferences.fadePref.description = "Diesen Schieber benutzen um die Dichte des Schatten-Teils zu bestimmen.";
			preferences.topoPref.title = "Positionsinfo:";
			preferences.topoPref.option = new Array("Topozentrisch","Geozentrisch");
			preferences.topoPref.description = "Zeigt die Mondposition im Verhältnis zu deiner geographischen Position (topozentrisch) oder gemessen am Mittelpunkt der Erde (geozentrisch)";
			preferences.realTimePref.title = strComputerClock;
			preferences.realTimePref.description = "Dieses löschen, um Realzeitanzeige zu sperren und ein Datum verlangt zu werden";
			preferences.showInfoPref.title = "Maus-über Info darstellen";
			preferences.showInfoPref.description = "Kurze Datum-/Zeit- und Altersinformationen über Maus rüber zeigen.";
			break;

		case "ES":
			//Courtesy of Mariano J Belgrano
			strAlertMsgLong = "El valor que ingresaste para tu longitud es inválido.\nFormatos: ddd.dd[W/E], dddDmmMssS[W/E], ddd:mm:ss\"[W/E], ddd mm ss[W/E], ddd,mm,dd[W/E]";
			strAlertMsgLat = "El valor que ingresaste para tu latitud es inválido.\nFormatos: dd.dd[N/S], ddDmmMssS[N/S], dd:mm:ss\"[N/S], dd mm ss[N/S], dd,mm,dd[N/S]";
			strAlertBtnContinue = "Continúa";
			strAlertBtnPrefs = "Preferencias";
			strCurrentPhase = "Áng. de fase ";
			strAge1 = "Edad "; strAge2 = " días";
			strIllumFrac = "Fracción iluminada ";
			strMoonDown = "Luna debajo todo el día";
			strMoonUp = "Luna arriba todo el día";
			strMoonRise = "Luna sale ";
			strMoonSet = "Luna se pone ";
			strSunRise = "Sol sale ";
			strSunSets = "Sol se pone ";
			strMoonPos = "Posición ";
			strMoonRange = "Distancia ";
			strMoonLibration = "Libración";
			strMoonLibLong = "Longitud: ";
			strMoonLibLat = "Latitud: ";
			strNewMoon = "Luna Nueva";
			strFullMoon = "Luna Llena";
			strWaningGibbous = "Luna Gibosa Menguante";
			strLastQuarter = "Cuarto Menguante";
			strWaningCrescent = "Luna Menguante";
			strWaxingCresent = "Luna Nueva Visible";
			strFirstQuarter = "Cuarto Creciente";
			strWaxingGibbous = "Luna Gibosa Creciente";
			strUnknownPhase = "! Fase desconocida !";
			strBelowHorizon = "No visible";
			strTopocentric = "Topocéntrica";
			strGeocentric = "Geocéntrica";
			strLocal = "local";
			strComputerClock = "Usar reloj interno";
			strYear = "Año: ";
			strMonth = "Mes: ";
			arrMonths = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
			strDay = "Día: ";
			strHour = "Hora: ";
			strMinute = "Minuto: ";
			strRealTimeTooltip = "Luna actual";
			strInvalidYear = "El año que ingresó es inválido, el rango válido es 1582-2500.";
			strEnterDateTime = "Definir fecha y hora";
			strBtnUserDate = "Aplicar fecha y hora";
			strBtnRealDate = "Usar Tiempo-Real";

			menuRefreshNow.title = "Actualizar ahora";
			menuResetDefaults.title = "Restaurar valores por defecto";
			menuDate.title = "Definir fecha y hora...";

			preferences.languagePref.title = "Seleccionar idioma:";
			preferences.languagePref.description = "Selecciona un idioma diferente.";
			preferences.latPref.title = "Latitud:";
			preferences.lonPref.title = "Longitud:";
			preferences.lonPref.description = "Ingresa tu latitud y longitud.";
			preferences.rotatePref.title = "Rotar imagen";
			preferences.rotatePref.option = new Array("Vista aparente","Norte arriba","Sur arriba");
			preferences.rotatePref.description = "Muestra la imagen en la orientación respecto a tu horizonte, hacia el Norte arriba, o hacia el Sur arriba.";
			preferenceGroups.viewGrp.title = "Apariencia";
			preferences.moonSizePref.title = "Tamaño de la Luna:";
			preferences.moonSizePref.description = "Utiliza el slider para ajustar el tamaño de la Luna.";
			preferences.fadePref.title = "Densidad de sombra:";
			preferences.fadePref.description = "Utiliza el slider para ajustar oscuridad de la sombra.";
			preferences.topoPref.title = "Info posicional:";
			preferences.topoPref.option = new Array("Topocéntrica","Geocéntrica");
			preferences.topoPref.description = "Muestra la Luna relativa a tu posición geográfica (topocéntrica) o relativa al centro de la Tierra (geocéntrica)";
			preferences.realTimePref.title = strComputerClock;
			preferences.realTimePref.description = "Habilita la vista en Tiempo-Real";
			preferences.showInfoPref.title = "Mostrar resumen al pasar el mouse";
			preferences.showInfoPref.description = "Muestra resumen de la fecha, hora y edad cuando desplaza el mouse por encima.";
			break;

	}
}