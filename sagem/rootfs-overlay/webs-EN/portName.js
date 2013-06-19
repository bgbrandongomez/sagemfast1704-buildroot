// PLEASE NOTE THAT A SPACE BETWEEN TWO WORDS IS TAKEN AS TWO SEPERATE
// WORDS. PLEASE KEEP THIS FILE CONSISTENT.
var portName_L = new Array();
var portName_U = new Array();

// For each Linux interface name in the boardparms.c file, add
// a corresponding Linux interface name and a user-friendly name
// of its equivalent that must be displayed on the WEB UI. It is
// best if the new inteface names are added at the end.

// Wireless interfac Linux interface name
portName_L[0]    = 'wl0';
// Wireless interface user-friendly name
portName_U[0]     = 'wl0';

// USB interface Linux interface name
portName_L[1]    = 'usb0';
// USB user-friendly name
portName_U[1]    = 'USB';

// Board ID F@ST1704 Linux name
portName_L[2]    = 'F@ST1704|eth0';
portName_L[3]    = 'F@ST1704|eth0.2';
portName_L[4]    = 'F@ST1704|eth0.3';
portName_L[5]    = 'F@ST1704|eth0.4';
portName_L[6]    = 'F@ST1704|eth0.5';
// Board ID F@ST1704 user-friendly name
portName_U[2]    = 'F@ST1704|ENET(1-4)';
portName_U[3]    = 'F@ST1704|ENET1';
portName_U[4]    = 'F@ST1704|ENET2';
portName_U[5]    = 'F@ST1704|ENET3';
portName_U[6]    = 'F@ST1704|ENET4';

// Board ID F@ST2804STC Linux name
portName_L[7]    = 'F@ST2804STC|eth0';
portName_L[8]    = 'F@ST2804STC|eth0.2';
portName_L[9]    = 'F@ST2804STC|eth0.3';
portName_L[10]    = 'F@ST2804STC|eth0.4';
portName_L[11]    = 'F@ST2804STC|eth0.5';
// Board ID F@ST2804STC user-friendly name
portName_U[7]    = 'F@ST2804STC|ENET(1-4)';
portName_U[8]    = 'F@ST2804STC|ENET1';
portName_U[9]    = 'F@ST2804STC|ENET2';
portName_U[10]    = 'F@ST2804STC|ENET3';
portName_U[11]    = 'F@ST2804STC|ENET4';

// Board ID F@ST1201 Linux name
portName_L[12]    = 'F@ST1201|eth0';
// Board ID F@ST1201 user-friendly name
portName_U[12]    = 'F@ST1201|ENET';

// Board ID F@ST2804 Linux name
portName_L[13]    = 'F@ST2804|eth0';
portName_L[14]    = 'F@ST2804|eth0.2';
portName_L[15]    = 'F@ST2804|eth0.3';
portName_L[16]    = 'F@ST2804|eth0.4';
portName_L[17]    = 'F@ST2804|eth0.5';
// Board ID F@ST2804 user-friendly name
portName_U[13]    = 'F@ST2804|ENET(1-4)';
portName_U[14]    = 'F@ST2804|ENET1';
portName_U[15]    = 'F@ST2804|ENET2';
portName_U[16]    = 'F@ST2804|ENET3';
portName_U[17]    = 'F@ST2804|ENET4';


// Board ID F@ST2604 Linux name
portName_L[18]    = 'F@ST2604|eth0';
portName_L[19]    = 'F@ST2604|eth0.2';
portName_L[20]    = 'F@ST2604|eth0.3';
portName_L[21]    = 'F@ST2604|eth0.4';
portName_L[22]    = 'F@ST2604|eth0.5';
// Board ID F@ST2604 user-friendly name
portName_U[18]    = 'F@ST2604|ENET(1-4)';
portName_U[19]    = 'F@ST2604|ENET4';
portName_U[20]    = 'F@ST2604|ENET3';
portName_U[21]    = 'F@ST2604|ENET2';
portName_U[22]    = 'F@ST2604|ENET1';

// Board ID F@ST2404 Linux name
portName_L[23]    = 'F@ST2404|eth0';
portName_L[24]    = 'F@ST2404|eth0.2';
portName_L[25]    = 'F@ST2404|eth0.3';
portName_L[26]    = 'F@ST2404|eth0.4';
portName_L[27]    = 'F@ST2404|eth0.5';
// Board ID F@ST2404 user-friendly name
portName_U[23]    = 'F@ST2404|ENET(1-4)';
portName_U[24]    = 'F@ST2404|ENET1';
portName_U[25]    = 'F@ST2404|ENET2';
portName_U[26]    = 'F@ST2404|ENET3';
portName_U[27]    = 'F@ST2404|ENET4';


// Board ID F@ST1744 Linux name
portName_L[28]    = 'F@ST1744|eth0';
portName_L[29]    = 'F@ST1744|eth0.2';
portName_L[30]    = 'F@ST1744|eth0.3';
portName_L[31]    = 'F@ST1744|eth0.4';
portName_L[32]    = 'F@ST1744|eth0.5';
// Board ID F@ST1744 user-friendly name
portName_U[28]    = 'F@ST1744|ENET(1-4)';
portName_U[29]    = 'F@ST1744|ENET1';
portName_U[30]    = 'F@ST1744|ENET2';
portName_U[31]    = 'F@ST1744|ENET3';
portName_U[32]    = 'F@ST1744|ENET4';

// Board ID F@ST2804v2 Linux name
portName_L[33]    = 'F@ST2804v2|eth0';
portName_L[34]    = 'F@ST2804v2|eth0.2';
portName_L[35]    = 'F@ST2804v2|eth0.3';
portName_L[36]    = 'F@ST2804v2|eth0.4';
portName_L[37]    = 'F@ST2804v2|eth0.5';
// Board ID F@ST2804v2 user-friendly name
portName_U[33]    = 'F@ST2804v2|ENET(1-4)';
portName_U[34]    = 'F@ST2804v2|ENET1';
portName_U[35]    = 'F@ST2804v2|ENET2';
portName_U[36]    = 'F@ST2804v2|ENET3';
portName_U[37]    = 'F@ST2804v2|ENET4';

// Board ID F@ST2844v2 Linux name
portName_L[38]    = 'F@ST2844v2|eth0';
portName_L[39]    = 'F@ST2844v2|eth0.2';
portName_L[40]    = 'F@ST2844v2|eth0.3';
portName_L[41]    = 'F@ST2844v2|eth0.4';
portName_L[42]    = 'F@ST2844v2|eth0.5';
// Board ID F@ST2844v2 user-friendly name
portName_U[38]    = 'F@ST2844v2|ENET(1-4)';
portName_U[39]    = 'F@ST2844v2|ENET1';
portName_U[40]    = 'F@ST2844v2|ENET2';
portName_U[41]    = 'F@ST2844v2|ENET3';
portName_U[42]    = 'F@ST2844v2|ENET4';

function getUNameByLName(name) {
   var index = 0;
   var uName   = '';

   // SafetyNet if someone sends a name without prefixing the
   // board ID and |, then return that name.
   if (name.indexOf('|') == -1)
      return name;
      
   /*Wlan naming: Could be a better name*/
   if (name.indexOf('wl0.3') != -1) {
      return 'wl0_Guest3';
   }
   else if (name.indexOf('wl0.2') != -1) {
      return 'wl0_Guest2';
   }
   else if (name.indexOf('wl0.1') != -1) {
      return 'wl0_Guest1';
   }
   else if (name.indexOf('wl0') != -1) {
      return 'wlan0';
   }
    else if (name.indexOf('wl1.3') != -1) {
      return 'wl1_Guest3';
   }
    else if (name.indexOf('wl1.2') != -1) {
      return 'wl1_Guest2';
   }
    else if (name.indexOf('wl1.1') != -1) {
      return 'wl1_Guest1';
   }
    else if (name.indexOf('wl1') != -1) {
      return 'wlan1';
   }

   if (name.indexOf('usb0') != -1) {
      return 'USB';
   }
   for (index = 0; index < portName_L.length; index++) {
      if (portName_L[index] == name) {
         uName = portName_U[index].split('|');
         return uName[1];
      }
   }
   uName = name.split('|');
   return uName[1];
}

function getLNameByUName(name) {
   var index = 0;
   var brdIntf = name.split('|');
   var lName   = '';
   var uName   = '';

   // SafetyNet if someone sends a name without prefixing the
   // board ID and |, then return that name.
   if (name.indexOf('|') == -1)
      return name;
      
   if (name.indexOf('wl0_Guest3') != -1)
      return 'wl0.3';
   if (name.indexOf('wl0_Guest2') != -1)
      return 'wl0.2';
   if (name.indexOf('wl0_Guest1') != -1)
      return 'wl0.1';
   if (name.indexOf('wlan0') != -1)
      return 'wl0';
   if (name.indexOf('wl1_Guest3') != -1)
      return 'wl1.3';
   if (name.indexOf('wl1_Guest2') != -1)
      return 'wl1.2';
   if (name.indexOf('wl1_Guest1') != -1)
      return 'wl1.1';
   if (name.indexOf('wlan1') != -1)
      return 'wl1';
      
   if (name.indexOf('USB') != -1)
      return 'usb0';
   for (index = 0; index < portName_U.length; index++) {
      uName = portName_U[index].split('|');
      if (portName_U[index] == name) {
         lName = portName_L[index].split('|');
         return lName[1];
      }
   }
   lName = name.split('|');
   return lName[1];
}
