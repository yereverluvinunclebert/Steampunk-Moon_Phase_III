
// Functions for the moon

// Meeus first edition table 45.A Longitude and distance of the moon
// (Table 47.A 2nd Edition)

   var T45AD = new Array(0, 2, 2, 0, 0, 0, 2, 2, 2, 2,
                         0, 1, 0, 2, 0, 0, 4, 0, 4, 2,
                         2, 1, 1, 2, 2, 4, 2, 0, 2, 2,
                         1, 2, 0, 0, 2, 2, 2, 4, 0, 3,
                         2, 4, 0, 2, 2, 2, 4, 0, 4, 1,
                         2, 0, 1, 3, 4, 2, 0, 1, 2, 2);

   var T45AM = new Array(0,  0,  0,  0,  1,  0,  0, -1,  0, -1,
                         1,  0,  1,  0,  0,  0,  0,  0,  0,  1,
                         1,  0,  1, -1,  0,  0,  0,  1,  0, -1,
                         0, -2,  1,  2, -2,  0,  0, -1,  0,  0,
                         1, -1,  2,  2,  1, -1,  0,  0, -1,  0,
                         1,  0,  1,  0,  0, -1,  2,  1,  0,  0);

   var T45AMP = new Array( 1, -1,  0,  2,  0,  0, -2, -1,  1,  0,
                          -1,  0,  1,  0,  1,  1, -1,  3, -2, -1,
                           0, -1,  0,  1,  2,  0, -3, -2, -1, -2,
                           1,  0,  2,  0, -1,  1,  0, -1,  2, -1,
                           1, -2, -1, -1, -2,  0,  1,  4,  0, -2,
                           0,  2,  1, -2, -3,  2,  1, -1,  3, -1);

   var T45AF  = new Array( 0,  0,  0,  0,  0,  2,  0,  0,  0,  0,
                           0,  0,  0, -2,  2, -2,  0,  0,  0,  0,
                           0,  0,  0,  0,  0,  0,  0,  0,  2,  0,
                           0,  0,  0,  0,  0, -2,  2,  0,  2,  0,
                           0,  0,  0,  0,  0, -2,  0,  0,  0,  0,
                          -2, -2,  0,  0,  0,  0,  0,  0,  0, -2);

   var T45AL = new Array(6288774, 1274027, 658314, 213618, -185116,
                         -114332,   58793,  57066,  53322,   45758,
                          -40923,  -34720, -30383,  15327,  -12528,
                           10980,   10675,  10034,   8548,   -7888,
                           -6766,   -5163,   4987,   4036,    3994,
                            3861,    3665,  -2689,  -2602,    2390,
                           -2348,    2236,  -2120,  -2069,    2048,
                           -1773,   -1595,   1215,  -1110,    -892,
                            -810,     759,   -713,   -700,     691,
                             596,     549,    537,    520,    -487,
                            -399,    -381,    351,   -340,     330,
                             327,    -323,    299,    294,       0);

   var T45AR = new Array(-20905355, -3699111, -2955968, -569925,   48888,
                             -3149,   246158,  -152138, -170733, -204586,
                           -129620,   108743,   104755,   10321,       0,
                             79661,   -34782,   -23210,  -21636,   24208,
                             30824,    -8379,   -16675,  -12831,  -10445,
                            -11650,    14403,    -7003,       0,   10056,
                              6322,    -9884,     5751,       0,   -4950,
                              4130,        0,    -3958,       0,    3258,
                              2616,    -1897,    -2117,    2354,       0,
                                 0,    -1423,    -1117,   -1571,   -1739,
                                 0,    -4421,        0,       0,       0,
                                 0,     1165,        0,       0,    8752);

// Meeus table 45B latitude of the moon
// (Table 47.B 2nd Edition)

   var T45BD = new Array(0, 0, 0, 2, 2, 2, 2, 0, 2, 0,
                         2, 2, 2, 2, 2, 2, 2, 0, 4, 0,
                         0, 0, 1, 0, 0, 0, 1, 0, 4, 4,
                         0, 4, 2, 2, 2, 2, 0, 2, 2, 2,
                         2, 4, 2, 2, 0, 2, 1, 1, 0, 2,
                         1, 2, 0, 4, 4, 1, 4, 1, 4, 2);

   var T45BM = new Array( 0,  0,  0,  0,  0,  0,  0, 0,  0,  0,
                         -1,  0,  0,  1, -1, -1, -1, 1,  0,  1,
                          0,  1,  0,  1,  1,  1,  0, 0,  0,  0,
                          0,  0,  0,  0, -1,  0,  0, 0,  0,  1,
                          1,  0, -1, -2,  0,  1,  1, 1,  1,  1,
                          0, -1,  1,  0, -1,  0,  0, 0, -1, -2);

   var T45BMP = new Array(0,  1, 1,  0, -1, -1,  0,  2,  1,  2,
                          0, -2, 1,  0, -1,  0, -1, -1, -1,  0,
                          0, -1, 0,  1,  1,  0,  0,  3,  0, -1,
                          1, -2, 0,  2,  1, -2,  3,  2, -3, -1,
                          0,  0, 1,  0,  1,  1,  0,  0, -2, -1,
                          1, -2, 2, -2, -1,  1,  1, -1,  0,  0);

   var T45BF = new Array( 1,  1, -1, -1,  1, -1,  1,  1, -1, -1,
                         -1, -1,  1, -1,  1,  1, -1, -1, -1,  1,
                          3,  1,  1,  1, -1, -1, -1,  1, -1,  1,
                         -3,  1, -3, -1, -1,  1, -1,  1, -1,  1,
                          1,  1,  1, -1,  3, -1, -1,  1, -1, -1,
                          1, -1,  1, -1, -1, -1, -1, -1, -1,  1);

   var T45BL = new Array(5128122, 280602, 277693, 173237, 55413,
                           46271,  32573,  17198,   9266,  8822,
                            8216,   4324,   4200,  -3359,  2463,
                            2211,   2065,  -1870,   1828, -1794,
                           -1749,  -1565,  -1491,  -1475, -1410,
                           -1344,  -1335,   1107,   1021,   833,
                             777,    671,    607,    596,   491,
                            -451,    439,    422,    421,  -366,
                            -351,    331,    315,    302,  -283,
                            -229,    223,    223,   -220,  -220,
                            -185,    181,   -177,    176,   166,
                            -164,    132,   -119,    115,   107);

// MoonPos calculates the Moon position, based on Meeus chapter 45
// and the illuminated percentage from Meeus equations 46.4 and 46.1
//
// Returns:
// Geocentirc RA, Dec
// mr?
// Geocentric Alt, Az
// Moons Position Angle
// Moons argument of Latitiude

function MoonPos(obs) {
  // julian date
  var jdobs=jd(obs);
  var T=(jdobs-2451545.0)/36525;
  var T2=T*T;
  var T3=T2*T;
  var T4=T3*T;
  // Moons mean longitude L'
  var LP=218.3164477+481267.88123421*T-0.0015786*T2+T3/538841.0-T4/65194000.0;
  // Moons mean elongation
  var D=297.8501921+445267.1114034*T-0.0018819*T2+T3/545868.0-T4/113065000.0;
  // Suns mean anomaly
  var M=357.5291092+35999.0502909*T-0.0001536*T2+T3/24490000.0;
  // Moons mean anomaly M'
  var MP=134.9633964+477198.8675055*T+0.0087414*T2+T3/69699.0-T4/14712000.0;
  // Moons argument of latitude
  var F=93.2720950+483202.0175233*T-0.0036539*T2-T3/3526000.0+T4/863310000.0;
  // Moons logitude of mean ascending node - Added by Mark Crossley
  var Om= 125.0445479 - 1934.1362891*T + 0.0020754*T2 +T3/467441.0 -T4/60616000.0;
      Om = range(Om);
  // Additional arguments
  var A1=119.75+131.849*T;
  var A2=53.09+479264.290*T;
  var A3=313.45+481266.484*T;
  var E=1-0.002516*T-0.0000074*T2;
  var E2=E*E;
  // Sums of periodic terms from table 45.A and 45.B
  var Sl=0.0;
  var Sr=0.0;
  for (var i=0; i<60; i++) {
    var Eterm=1;
    if (Math.abs(T45AM[i])==1) Eterm=E;
    if (Math.abs(T45AM[i])==2) Eterm=E2;
    Sl+=T45AL[i]*Eterm*sind(rev(T45AD[i]*D+T45AM[i]*M+T45AMP[i]*MP+T45AF[i]*F));
    Sr+=T45AR[i]*Eterm*cosd(rev(T45AD[i]*D+T45AM[i]*M+T45AMP[i]*MP+T45AF[i]*F));
  }
  var Sb=0.0;
  for (var i=0; i<60; i++) {
    var Eterm=1;
    if (Math.abs(T45BM[i])==1) Eterm=E;
    if (Math.abs(T45BM[i])==2) Eterm=E2;
    Sb+=T45BL[i]*Eterm*sind(rev(T45BD[i]*D+T45BM[i]*M+T45BMP[i]*MP+T45BF[i]*F));
  }
  // Additional additive terms
  Sl=Sl+3958*sind(rev(A1))+1962*sind(rev(LP-F))+318*sind(rev(A2));
  Sb=Sb-2235*sind(rev(LP))+382*sind(rev(A3))+175*sind(rev(A1-F))+
     175*sind(rev(A1+F))+127*sind(rev(LP-MP))-115*sind(rev(LP+MP));
  // geocentric longitude, latitude and distance
  var mglong=rev(LP+Sl/1000000.0);
  var mglat=rev(Sb/1000000.0);
  if (mglat > 180.0) mglat=mglat-360;
  var mr=Math.round(385000.56+Sr/1000.0);
  // Obliquity of Ecliptic
  var obl=23.4393-3.563E-7*(jdobs-2451543.5);
  // RA and dec
  var ra=rev(atan2d(sind(mglong)*cosd(obl)-tand(mglat)*sind(obl),
                    cosd(mglong)))/15.0;
  var dec=rev(asind(sind(mglat)*cosd(obl)+cosd(mglat)*sind(obl)*sind(mglong)));
  if (dec > 180.0) dec=dec-360;
  // phase angle
  var pa=180.0-D-6.289*sind(MP)+2.1*sind(M)-1.274*sind(2*D-MP)
         -0.658*sind(2*D)-0.214*sind(2*MP)-0.11*sind(D);
  // Altitude and azimuth
  var altaz=radtoaa(ra,dec,obs);

  // Physical libration (Meeus 2nd Ed, 53.2) - too small for us! <0.04 degrees - Mark Crossley

  // Topocentric libration - Added by Mark Crossley
  // Get Moons Topocentric RA/Dec

  var bet=5.128122*sind(F) + 0.280602*sind(MP + F) + 0.277693*sind(MP - F) + 0.173237*sind(D*2 - F);
      bet+=0.055413*sind(D*2 - MP + F)+0.046271*sind(D*2 - MP - F) + 0.032573*sind(D*2 + F);
  var lam=6.288874*sind(MP) + 1.274027*sind(D*2 -MP) + 0.658314*sind(D*2);
      lam+=0.213618*sind(2*MP) - 0.185116*sind(M) - 0.114332*sind(2 * F);
      lam+=0.05793*sind(D*2 - 2*MP) + 0.057066*sind(D*2 - M - MP) + 0.053322*sind(D*2 + MP) + LP;
      lam=rev(lam);
  var I=1.54242;
  var W=lam-Om;
  var Y=cosd(W)*cosd(bet);
  var X=sind(W)*cosd(bet)*cosd(I)-sind(bet)*sind(I);
  var A=atan2d(X,Y);
  var l=rev(A-F);
  if (l>180) {l=360-l;l=-l;}
  var b=asind(-sind(W)*cosd(bet)*sind(I)-sind(bet)*cosd(I));

  return new Array(ra,dec,mr,altaz[0],altaz[1],rev(pa),mglat,l,b);
}




// Moon rise/set search

function moonrise(obs) {
  // returns an array containing rise and set times or one of the
  // following codes.
  // -1 rise or set event not found and moon was down at 00:00
  // -2 rise or set event not found and moon was up   at 00:00
  var obscopy=new Object();
  for (var i in obs) obscopy[i] = obs[i];
  obscopy.hours=0;
  obscopy.minutes=0;
  obscopy.seconds=0;
  var riseset=new Array();
  // elh is the elevation at the hour elhdone is true if elh calculated
  var elh=new Array();
  var elhdone=new Array();
  for (var i=0; i<=24; i++) {
     elhdone[i]=false;
  }
  moontab=MoonPos(obscopy);
  elh[0]=moontab[3]; elhdone[0]=true;
  // set the return code to allow for always up or never rises
  if (elh[0] >= 0.0) {
    riseset=new Array(-2,-2);
  } else {
    riseset=new Array(-1,-1);
  }
  obscopy.hours=24;
  moontab=MoonPos(obscopy);
  elh[24]=moontab[3]; elhdone[24]=true;
  // search for moonrise and set
  for (var rise=0; rise<2; rise++) {
     var found=false;
     var hfirst=0;
     var hlast=24;
     obscopy.minutes=0;
     obscopy.seconds=0;
     // Try a binary chop on the hours to speed the search
     while (Math.ceil((hlast-hfirst)/2) > 1) {
       var hmid=hfirst+Math.round((hlast-hfirst)/2);
       if (!elhdone[hmid]) {
          obscopy.hours=hmid;
          moontab=MoonPos(obscopy);
          elh[hmid]=moontab[3]; elhdone[hmid]=true;
       }
       if (((rise == 0) && (elh[hfirst] <= 0.0) && (elh[hmid] >= 0.0)) ||
           ((rise == 1) && (elh[hfirst] >= 0.0) && (elh[hmid] <= 0.0))) {
         hlast=hmid; found=true; continue;
       }
       if (((rise == 0) && (elh[hmid] <= 0.0) && (elh[hlast] >= 0.0)) ||
          ((rise == 1) && (elh[hmid] >= 0.0) && (elh[hlast] <= 0.0))) {
         hfirst=hmid; found=true; continue;
       }
       break;
     }
     // If the binary chop did not find a 1 hour interval
     if ((hlast-hfirst) > 1) {
       for (var i=hfirst; i<hlast; i++) {
         found=false;
         if (!elhdone[i+1]) {
          obscopy.hours=i+1;
          moontab=MoonPos(obscopy);
          elh[i+1]=moontab[3]; elhdone[i+1]=true;
         }
         if (((rise == 0) && (elh[i] <= 0.0) && (elh[i+1] >= 0.0)) ||
             ((rise == 1) && (elh[i] >= 0.0) && (elh[i+1] <= 0.0))) {
           hfirst=i; hlast=i+1; found=true; break;
         }
       }
     }
     // simple linear interpolation for the minutes
     if (found) {
       var elfirst=elh[hfirst]; var ellast=elh[hlast];
       obscopy.hours=hfirst;
       obscopy.minutes=30;
       moontab=MoonPos(obscopy);
       if ((rise == 0) && (moontab[3] <= 0.0))
          {hfirst=hfirst+0.5; elfirst=moontab[3];}
       if ((rise == 0) && (moontab[3]  > 0.0))
          {hlast=hfirst+0.5; ellast=moontab[3];}
       if ((rise == 1) && (moontab[3] <= 0.0))
          {hlast=hfirst+0.5; ellast=moontab[3];}
       if ((rise == 1) && (moontab[3]  > 0.0))
          {hfirst=hfirst+0.5; elfirst=moontab[3];}
       var eld=Math.abs(elfirst)+Math.abs(ellast);
       riseset[rise]=hfirst+(hlast-hfirst)*Math.abs(elfirst)/eld;
     }
  } // End of rise/set loop
  return(riseset);
}

