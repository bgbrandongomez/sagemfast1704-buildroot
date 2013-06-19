var MENU_OPTION_USER              = 0;
var MENU_OPTION_STANDARD          = 1;
var MENU_OPTION_PROTOCOL          = 2;
var MENU_OPTION_FIREWALL          = 3;
var MENU_OPTION_NAT               = 4;
var MENU_OPTION_IP_EXTENSION      = 5;
var MENU_OPTION_WIRELESS          = 6;
var MENU_OPTION_VOICE             = 7;
var MENU_OPTION_SNMP              = 8;
var MENU_OPTION_UPNP              = 9;
var MENU_OPTION_DDNSD             = 10;
var MENU_OPTION_SNTP              = 11;
var MENU_OPTION_EBTABLES          = 12;
var MENU_OPTION_BRIDGE            = 13;
var MENU_OPTION_TOD               = 14;
var MENU_OPTION_SIPROXD           = 15;
var MENU_OPTION_DHCPEN            = 16;
var MENU_OPTION_QOS               = 17;
var MENU_OPTION_PORTMAP           = 18;
var MENU_OPTION_IPP               = 19;
var MENU_OPTION_WIRELESS_SES      = 20;
var MENU_OPTION_RIP               = 21;
var MENU_OPTION_IPSEC             = 22;
var MENU_OPTION_CERT              = 23;
var MENU_OPTION_WL_QOS            = 24;
var MENU_OPTION_TR69C             = 25;
var MENU_OPTION_VDSL              = 26;
var MENU_OPTION_URLFILTER       = 27;
var MENU_OPTION_IPV6_SUPPORT      = 28;
var MENU_OPTION_IPV6_ENABLE       = 29;
var MENU_OPTION_DNSPROXY          = 30;
var MENU_OPTION_POLICY_ROUTING    = 31;
var MENU_OPTION_OMCI = 32;
var MENU_OPTION_CHIPID = 33;
var MENU_OPTION_WIRELESS_NUM_ADAPTOR =34;
var MENU_OPTION_DIAG_P8021AG      =35;
var MENU_OPTION_ETHWAN            =36;
var MENU_OPTION_PTM               =37;
var MENU_OPTION_SYSINFO_WEB_PAGE   = 39;
var MENU_OPTION_USBMODEM = 40;
var MENU_OPTION_LANGSETTING = 41;

var MENU_OPTION_STC_ADVANCED_SETTING   = 42;
var MENU_OPTION_STC_BASIC_SETTING   = 43;

var MENU_OPTION_ADMIN_ACCOUNT     = 44;
var MENU_OPTION_USER_ACCOUNT      = 45;
var MENU_OPTION_SUPPORT_ACCOUNT   = 46;
var MENU_OPTION_LANGUAGE   = 47;

var MENU_OPTION_MTS_BASIC_SETTING  = 48;
var MENU_OPTION_MTS_ADVANCED_SETTING  = 49;

var MENU_OPTION_FON = 50;


var wlItemsCgiCmd = new Array(
	'wlswitchinterface0.wl',
	'wlswitchinterface1.wl',
	'wlswitchinterface2.wl',
	'wlswitchinterface3.wl'
	);

var wlmenuTitle = new Array(
	'wl0',
	'wl1',
	'wl2',
	'wl3'
	);
function menuAdmin(options, tr69_flag) {
    var std = options[MENU_OPTION_STANDARD];
    var proto = options[MENU_OPTION_PROTOCOL];
    var firewall = options[MENU_OPTION_FIREWALL];
    var nat = options[MENU_OPTION_NAT];
    var ipExt = options[MENU_OPTION_IP_EXTENSION];
    var wireless = options[MENU_OPTION_WIRELESS];
    var voice = options[MENU_OPTION_VOICE];
    var snmp = options[MENU_OPTION_SNMP];
    var ddnsd = options[MENU_OPTION_DDNSD];
    var sntp = options[MENU_OPTION_SNTP];
    var ebtables = options[MENU_OPTION_EBTABLES];
    var bridge = options[MENU_OPTION_BRIDGE];
    var tod = options[MENU_OPTION_TOD];
    var siproxd = options[MENU_OPTION_SIPROXD];
    var QosEnabled = options[MENU_OPTION_QOS];
    var vlanconfig = options[MENU_OPTION_PORTMAP];
    var ipp = options[MENU_OPTION_IPP];
    var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
    var rip = options[MENU_OPTION_RIP];
    var ipsec = options[MENU_OPTION_IPSEC];
    var certificate = options[MENU_OPTION_CERT];
    var wlqos = options[MENU_OPTION_WL_QOS];
    var tr69c = options[MENU_OPTION_TR69C];
    var ipv6Support = options[MENU_OPTION_IPV6_SUPPORT];
    var ipv6Enable = options[MENU_OPTION_IPV6_ENABLE];
    var upnp = options[MENU_OPTION_UPNP];
    var urlfilter = options[MENU_OPTION_URLFILTER];
    var dnsproxy = options[MENU_OPTION_DNSPROXY];
    var pr = options[MENU_OPTION_POLICY_ROUTING];
    var omci = options[MENU_OPTION_OMCI];
    var chipId = options[MENU_OPTION_CHIPID];
    var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
    var p8021ag = options[MENU_OPTION_DIAG_P8021AG];
    var ethwan = options[MENU_OPTION_ETHWAN];
    var ptm = options[MENU_OPTION_PTM];
    var sysInfoWebPage = options[MENU_OPTION_SYSINFO_WEB_PAGE];
    var usbmodem = options[MENU_OPTION_USBMODEM];
    var langsetting = options[MENU_OPTION_LANGSETTING];  
    var fonsupport = options[MENU_OPTION_FON];

    // Configure advanced setup
    nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'dslatm.cmd'));
    nodeDslInteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'dslatm.cmd'));
    insDoc(nodeDslInteface, gLnk('R', getMenuTitle(MENU_DSL_ATM_INTERFACE), 'dslatm.cmd'));
    if ( ptm == '1' )
	insDoc(nodeDslInteface, gLnk('R', getMenuTitle(MENU_DSL_PTM_INTERFACE), 'dslptm.cmd'));
    if ( ethwan == '1' )
	insDoc(nodeDslInteface, gLnk('R', getMenuTitle(MENU_ETH_INTERFACE), 'ethwan.cmd'));

    insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'wancfg.cmd'));
//bug 2795
    if(usbmodem == '1'){
	    insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_3G_MODEM),'modeminfo.html'));
    }
//bug 4051
//bug 4404 remove FON html
   // if(fonsupport == '1'){
	//    insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_FON),'fon.html'));
    //}
    insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_LAN),'lancfg2.html'));
    if ( ipv6Enable == '1' )
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_LAN6),'ipv6lancfg.html'));

    // Configure security menu
    // If firewall is enabled and not in ipExt mode enable firewall menus
    // if (proto != 'Bridge' && ipExt != '1' ) {
    if ( proto != 'Not Applicable' && ipExt != '1' ) {
	// If NAT is On enable virtual server menus
	if ( nat == '1' ) {
	    nodeNat = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_SC_NAT), 'scvrtsrv.cmd?action=view'));
	    insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_VIRTUAL_SERVER), 'scvrtsrv.cmd?action=view'));
	    insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_PORT_TRIGGER), 'scprttrg.cmd?action=view'));
	    insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_DMZ_HOST), 'scdmz.html'));
	    if ( siproxd == '1' )
		insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_ALGS), 'algcfg.html'));
	}
	if ( proto != 'Bridge' && firewall == '1' ) {
	    nodeFirewall = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_SC_SECURITY), 'scoutflt.cmd?action=view'));
	    nodeIpFlt = insFld(nodeFirewall, gFld(getMenuTitle(MENU_SC_IP_FILTER), 'scoutflt.cmd?action=view'));
	    insDoc(nodeIpFlt, gLnk('R', getMenuTitle(MENU_SC_OUTGOING), 'scoutflt.cmd?action=view'));
	    insDoc(nodeIpFlt, gLnk('R', getMenuTitle(MENU_SC_INCOMING), 'scinflt.cmd?action=view'));
	} //else {
	//if ( ebtables == '1' ) {
	//   if ( bridge == '1' )
	//      nodeFirewall = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_SC_SECURITY),'scmacflt.cmd?action=view'));
	//}
	//}

	// Configure MAC filtering menu
	if ( ebtables == '1' ) {
	    //if ( bridge == '1' )
	    //   insFld(nodeFirewall, gFld(getMenuTitle(MENU_MAC_FILTER),'scmacflt.cmd?action=view'));
	    if ( tod == '1' ) 
	    {
		nodeParentalControl = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PARENTAL_CNTL),'todmngr.tod?action=view'));
		insDoc(nodeParentalControl, gFld(getMenuTitle(MENU_TOD),'todmngr.tod?action=view'));
	    }
	    if ( urlfilter == '1' )
		insDoc(nodeParentalControl, gFld(getMenuTitle(MENU_URLFILTER),'urlfilter.cmd?action=view'));
	}
    }

    // Configure QoS class menu
    nodeQos = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_QOS),'qosqmgmt.html'));
    insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_QUEUE), 'qosqueue.cmd?action=view'));
    insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_CLASS), 'qoscls.cmd?action=view'));


    // Configure routing menu
    nodeRouting = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_ROUTING), 'rtdefaultcfg.html'));
    insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_DEFAULT_ROUTE), 'rtdefaultcfg.html'));
    insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE),'rtroutecfg.cmd?action=viewcfg'));
    if (pr == '1' )
	insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_POLICY_ROUTING),'prmngr.cmd?action=view'));

    if ( (proto == 'PPPoE' && ipExt == '0') ||
	    (proto == 'PPPoA' && ipExt == '0') ||
	    (proto == 'MER') ||
	    (proto == 'IPoA') ) {
	// configure rip
	if ( rip == '1' )
	    insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_RIP),'ripcfg.cmd?action=view'));
	// configure dns server
	nodeDnsSetup = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNS), 'dnscfg.html'));
	insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DNS_SETUP), 'dnscfg.html'));
	// configure ddns client
	if ( ddnsd == '1' )
	    insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DDNS), 'ddnsmngr.cmd'));
    }

    // configure ipv6 default gateway
    if ( ipv6Enable == '1' ) {
	insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE6), 'rtroute6cfg.cmd?action=viewcfg'));
    }

    // Configure ADSL Setting Menu based on Annex
    if ( std == 'annex_c' )
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfgc.html'));
    else if (chipId != '6368')
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfg.html'));
    else
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'xdslcfg.html'));

    // Configure upnp
    if (upnp == '1')
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_UPNP), 'upnpcfg.html'));

    // Configure dnsproxy
    if (dnsproxy == '1')
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNSPROXY), 'dnsproxycfg.html'));

    // Configure print server
    if ( ipp == '1' )
	insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IPP), 'ippcfg.html'));

    // Configure wireless menu

    if ( parseInt(numWl) != 0 ) {

	if(numWl != '1')
	    wlanMenu = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));

	for(i = 0; i < parseInt(numWl); i++)
	{
	    // Configure wireless menu
	    if(numWl == '1')
		nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
	    else
		nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_BASIC), 'wlcfg.html'));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SECURITY), 'wlsecurity.html'));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_MAC_FILTERING), 'wlmacflt.cmd?action=view'));
	    //insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WDS), 'wlwds.cmd?action=view'));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_ADVANCED), 'wlcfgadv.html'));
	    //SUPPORT_SES
	    if ( wireless_ses == '1' ) { 
		insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SES), 'wlses.html'));      
	    }

	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_STATION_LIST), 'wlstationlist.cmd'));



	}
    }

    // Configure voice menu
    if ( voice == 'MGCP' ) {
	nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicemgcp_basic.html'));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_MGCP), 'voicemgcp_basic.html'));
	//insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_STATS), 'voicestats45.html'));
    }
    else if ( voice == 'SIP' ) {
	nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicesip_basic.html'));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_BASIC), 'voicesip_basic.html'));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_ADVANCED), 'voicesip_advanced.html'));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DEBUG), 'voicesip_debug.html'));
    }

    // Configure VLAN port mapping menu
    if ( vlanconfig == '1' ) {
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_INTF_GROUPING),'portmap.cmd'));
    }

    if (chipId != '6368') {
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_LAN_PORTS),'lanports.cmd?action=view'));
    }

    if ( ipsec == '1' ) {
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_SC_IPSEC), 'ipsec.cmd?action=view'));
    }
    if (certificate == '1')  {
	nodeCert = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_CERT), 'certlocal.cmd?action=view'));
	insDoc(nodeCert, gLnk('R', getMenuTitle(MENU_CERT_LOCAL), 'certlocal.cmd?action=view'));
	insDoc(nodeCert, gLnk('R', getMenuTitle(MENU_CERT_CA), 'certca.cmd?action=view'));
    }

    // Configure diagnostics menu
    nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'diag.html'));
    if (p8021ag == '1') {
	insDoc(nodeDiagnostics, gLnk('R', getMenuTitle(MENU_DIAGNOSTICS),'diag.html'));
	insDoc(nodeDiagnostics, gLnk('R', getMenuTitle(MENU_DIAGP8021AG),'diag8021ag.html'));
    }

    // Configure management menu
    nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'backupsettings.html'));

    nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS), 'backupsettings.html'));
    insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_BACKUP),'backupsettings.html'));
    insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_UPDATE),'updatesettings.html'));
    insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'defaultsettings.html'));

    insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'logintro.html'));
    if ( snmp == '1' )
	insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'snmpconfig.html'));
    if (tr69c == '1' && tr69_flag == 1)
	insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'tr69cfg.html'));
    if ( omci == '1' ) {
	nodeOmci = insFld(nodeMngr, gFld(getMenuTitle(MENU_OMCI_CFG), 'omcicfg.cmd?action=view'));
	insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_SET),'omcicfg.cmd?action=view'));
	insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_CREATE),'omcicreate.cmd?action=view'));
	insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_MACRO),'omcimacro.cmd?action=view'));
    }	  
    if ( sntp == '1' && proto != 'Bridge' && !(proto=='PPPoE' && ipExt=='1') && !(proto=='PPPoA' && ipExt=='1') )
	insFld(nodeMngr, gFld(getMenuTitle(MENU_SNTP), 'sntpcfg.html'));

    nodeAccCntr = insFld(nodeMngr, gFld(getMenuTitle(MENU_ACC_CNTR), 'password.html'));
    insDoc(nodeAccCntr, gLnk('R', getMenuTitle(MENU_ACC_CNTR_PASSWORD), 'password.html'));

    insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'upload.html'));

    if(sysInfoWebPage == '1')
    {
	insFld(nodeMngr, gFld(getMenuTitle(MENU_SYSTEM_INFO), 'sysinfo.html'));
    }

    if(langsetting == '1')	
	insFld(nodeMngr, gFld(getMenuTitle(MENU_LANG_SETTING), 'lang_setting.html'));

    insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'resetrouter.html'));

}

function menuSupport(options, customer_flag) {
    var std = options[MENU_OPTION_STANDARD];
    var proto = options[MENU_OPTION_PROTOCOL];
    var ipExt = options[MENU_OPTION_IP_EXTENSION];
    var wireless = options[MENU_OPTION_WIRELESS];
    var voice = options[MENU_OPTION_VOICE];
    var snmp = options[MENU_OPTION_SNMP];
    var ddnsd = options[MENU_OPTION_DDNSD];
    var sntp = options[MENU_OPTION_SNTP];
    var QosEnabled = options[MENU_OPTION_QOS];
    var ipp = options[MENU_OPTION_IPP];
    var rip = options[MENU_OPTION_RIP];
    var tr69c = options[MENU_OPTION_TR69C];
    var ipv6Support = options[MENU_OPTION_IPV6_SUPPORT];
    var ipv6Enable = options[MENU_OPTION_IPV6_ENABLE];
    var upnp = options[MENU_OPTION_UPNP];
    var dnsproxy = options[MENU_OPTION_DNSPROXY];
    var chipId = options[MENU_OPTION_CHIPID];
    var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
    var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
    var ethwan = options[MENU_OPTION_ETHWAN];
    var ptm = options[MENU_OPTION_PTM];

//Bug1270 added for sys info web page start, by DavidChen, 2009.2.16
    var sysInfoWebPage = options[MENU_OPTION_SYSINFO_WEB_PAGE];
//Bug1270 added end

    // Configure advanced setup
    nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'dslatm.cmd'));
    nodeDslInteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'dslatm.cmd'));
    insDoc(nodeDslInteface, gLnk('R', getMenuTitle(MENU_DSL_ATM_INTERFACE), 'dslatm.cmd'));
    if ( ptm == '1' )
	insDoc(nodeDslInteface, gLnk('R', getMenuTitle(MENU_DSL_PTM_INTERFACE), 'dslptm.cmd'));
    if ( ethwan == '1' )
	insDoc(nodeDslInteface, gLnk('R', getMenuTitle(MENU_ETH_INTERFACE), 'ethwan.cmd'));

    insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'wancfg.cmd'));
    insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_LAN),'lancfg2.html'));
    if ( ipv6Enable == '1' )
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_LAN6),'ipv6lancfg.html'));

    // Configure QoS class menu
    nodeQos = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_QOS),'qosqmgmt.html'));
    insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_QUEUE), 'qosqueue.cmd?action=view'));
    insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_CLASS), 'qoscls.cmd?action=view'));

    // Configure routing menu
    nodeRouting = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_ROUTING), 'rtdefaultcfg.html'));
    insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_DEFAULT_ROUTE), 'rtdefaultcfg.html'));
    insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE),'rtroutecfg.cmd?action=viewcfg'));

    if ( (proto == 'PPPoE' && ipExt == '0') ||
	    (proto == 'PPPoA' && ipExt == '0') ||
	    (proto == 'MER') ||
	    (proto == 'IPoA') ) {
	// configure rip
	if ( rip == '1' )
	    insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_RIP),'ripcfg.cmd?action=view'));
	// configure dns server
	nodeDnsSetup = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNS), 'dnscfg.html'));
	insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DNS_SETUP), 'dnscfg.html'));
	// configure ddns client
	if ( ddnsd == '1' )
	    insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DDNS), 'ddnsmngr.cmd'));
    }

    // configure ipv6
    if ( ipv6Enable == '1' )	{
	insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE6),'rtroute6cfg.cmd?action=viewcfg'));
    }

    // Configure ADSL Setting Menu based on Annex
    if ( std == 'annex_c' )
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfgc.html'));
    else if (chipId != '6368')
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfg.html'));
    else
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'xdslcfg.html'));

    // Configure print server
    if ( ipp == '1' )
	insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IPP), 'ippcfg.html'));

    // Configure upnp
    if (upnp == '1')
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_UPNP), 'upnpcfg.html'));

    // Configure dnsproxy
    if (dnsproxy == '1')
	insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNSPROXY), 'dnsproxycfg.html'));

    // Configure wireless menu
    if ( parseInt(numWl) != 0 ) {

	if(numWl != '1')
	    wlanMenu = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));

	for(i = 0; i < parseInt(numWl); i++)
	{
	    // Configure wireless menu
	    if(numWl == '1')
		nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
	    else
		nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_BASIC), 'wlcfg.html'));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SECURITY), 'wlsecurity.html'));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_MAC_FILTERING), 'wlmacflt.cmd?action=view'));
	    //insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WDS), 'wlwds.cmd?action=view'));
	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_ADVANCED), 'wlcfgadv.html'));
	    //SUPPORT_SES
	    if ( wireless_ses == '1' ) { 
		insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SES), 'wlses.html'));      
	    }

	    insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_STATION_LIST), 'wlstationlist.cmd'));



	}
    }

    // Configure voice menu
    if ( voice == 'mgcp' ) {
	nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicemgcpview.cmd'));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_MGCP), 'voicemgcpview.cmd'));
	//insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_STATS), 'voicestats45.html'));
    }
    else if ( voice == 'SIP/2.0' ) {
	nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), ''));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_BASIC), ''));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_ADVANCED), ''));
	insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DEBUG), ''));
    }

    // Configure diagnostics menu
    nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'diag.html'));

    // Configure management menu
    nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'backupsettings.html'));
    nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS), 'backupsettings.html'));
    insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_BACKUP),'backupsettings.html'));
    insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_UPDATE),'updatesettings.html'));
    insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'defaultsettings.html'));

    insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'logintro.html'));
    if ( snmp == '1' )
	insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'snmpconfig.html'));
    if ( tr69c == '1' )
	insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'tr69cfg.html'));
    if ( sntp == '1' && proto != 'Bridge' && !(proto=='PPPoE' && ipExt=='1') && !(proto=='PPPoA' && ipExt=='1') )
	insFld(nodeMngr, gFld(getMenuTitle(MENU_SNTP), 'sntpcfg.html'));

    if(customer_flag != '4'){
	    insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'upload.html'));
    }
//Bug1270 added for sysinfo page start
    if(sysInfoWebPage == '1')
    {
	    insFld(nodeMngr, gFld(getMenuTitle(MENU_SYSTEM_INFO), 'sysinfo.html'));
    }
//Bug1270 added for sysinfo page end

    insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'resetrouter.html'));
}

function menuUser(tr69_flag) {
    var snmp = options[MENU_OPTION_SNMP];
    var tr69c = options[MENU_OPTION_TR69C];
//Bug1270 added for sys info web page start, by DavidChen, 2009.2.16
    var sysInfoWebPage = options[MENU_OPTION_SYSINFO_WEB_PAGE];
//Bug1270 added end

    // Configure diagnostics menu
    nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'diag.html'));

    // Configure management menu
    nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'logintro.html'));
    insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'logintro.html'));
    if ( snmp == '1' )
	insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'snmpconfig.html'));
    if (tr69c == '1' && tr69_flag == 1)
	insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'tr69cfg.html'));
    insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'upload.html'));

//Bug1270 added for sysinfo page start
    if(sysInfoWebPage == '1')
    {
	    insFld(nodeMngr, gFld(getMenuTitle(MENU_SYSTEM_INFO), 'sysinfo.html'));
    }
//Bug1270 added for sysinfo page end

}


function STC_Basic_User(options) {
    var wireless = options[MENU_OPTION_WIRELESS];
    var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
    var sysInfoWebPage = options[MENU_OPTION_SYSINFO_WEB_PAGE];
    var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
    var stc_advanced_setting=options[MENU_OPTION_STC_ADVANCED_SETTING]; 

    // Configure wireless menu
    if(numWl == '1')
	nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), 'wlBasicForSTC.html'));
    else
	nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));

    // Configure management menu
    nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'defaultsettings.html'));
    nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'defaultsettings.html'));

    insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'resetrouter.html'));

    if(stc_advanced_setting == '1')	{
	insFld(foldersTree, gFld('', ''));
	insFld(foldersTree, gFld('', ''));
	nodeWebSwitchSTC = insFld(foldersTree, gFld(getMenuTitle(MENU_STC_ADVANCED_SETTING), 'STC_AdvancedMenu.cmd'));
    }
}

//add by Alice for MTS 2010-04-15
function MTS_Basic_User(options) {
    var wireless = options[MENU_OPTION_WIRELESS];
    var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
    var sysInfoWebPage = options[MENU_OPTION_SYSINFO_WEB_PAGE];
    var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
    var stc_advanced_setting=options[MENU_OPTION_MTS_ADVANCED_SETTING]; 
    var usbmodem = options[MENU_OPTION_USBMODEM];
    var fonsupport = options[MENU_OPTION_FON];

    // Configure wireless menu
    if(numWl == '1')
	nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), 'wlBasicForMTS.html'));
    else
	nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));


    if(usbmodem == '1')
	insDoc(foldersTree, gLnk('R', getMenuTitle(MENU_3G_MODEM),'modeminfo.html'));

//bug 4044 remove fon page
    //if(fonsupport == '1'){
	//insDoc(foldersTree, gLnk('R', getMenuTitle(MENU_FON),'fon.html'));
    //}

    // Configure management menu
    nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'defaultsettings.html'));
    nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'defaultsettings.html'));

    insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'resetrouter.html'));

    if(stc_advanced_setting == '1')	{
	insFld(foldersTree, gFld('', ''));
	insFld(foldersTree, gFld('', ''));
	nodeWebSwitchMTS = insFld(foldersTree, gFld(getMenuTitle(MENU_MTS_ADVANCED_SETTING), 'MTS_AdvancedMenu.cmd'));
    }
}
//add end Alice


function createBcmMenu(options, customer_flag) {
    var user = options[MENU_OPTION_USER];
    var admin_account=options[MENU_OPTION_ADMIN_ACCOUNT];
    var user_account=options[MENU_OPTION_USER_ACCOUNT];
    var support_account=options[MENU_OPTION_SUPPORT_ACCOUNT];

    var proto = options[MENU_OPTION_PROTOCOL];
    var ipExt = options[MENU_OPTION_IP_EXTENSION];
    var dhcpen = options[MENU_OPTION_DHCPEN];
    var vdslIncluded = options[MENU_OPTION_VDSL];
//bug 2795
    var usbmodem = options[MENU_OPTION_USBMODEM];
    var langsetting = options[MENU_OPTION_LANGSETTING];   
    foldersTree = gFld('', 'info.html');
    var languageId = options[MENU_OPTION_LANGUAGE];


    if((customer_flag == '2')||(customer_flag == '1')) {//for STC
	if(languageId==0)
	    langNodeSTC=insFld(foldersTree, gFld(getMenuTitle(MENU_STC_SWITCHER_EN), ''));
	else if(languageId==1)
	    langNodeSTC=insFld(foldersTree, gFld(getMenuTitle(MENU_STC_SWITCHER_AB), ''));

	insFld(foldersTree, gFld('', ''));

	if(customer_flag == '2'){
	    titleSTC = insFld(foldersTree, gFld("<font class='menuTitle'>Basic Settings</font>", ''));
	    //document.writeln("<font class='menuTitle'>Basic Settings</font>");
	}else if(customer_flag == '1'){
	    titleSTC = insFld(foldersTree, gFld("<font class='menuTitle'>Advanced Settings</font>", ''));
	}
    }
//add by Alice for MTS 2010-04-15
    if((customer_flag == '8')||(customer_flag == '16')) {
	insFld(foldersTree, gFld('', 'MTS'));

	if(customer_flag == '8'){
	    titleMTS = insFld(foldersTree, gFld("<font class='menuTitle'>Basic Settings</font>", ''));
	    //document.writeln("<font class='menuTitle'>Basic Settings</font>");
	}else if(customer_flag == '16'){
	    titleMTS = insFld(foldersTree, gFld("<font class='menuTitle'>Advanced Settings</font>", ''));
	}
    }
//add end Alice



    // device info menu
    nodeDeviceInfo = insFld(foldersTree, gFld(getMenuTitle(MENU_DEVICE_INFO), 'info.html'));

    //add by Alice for MTS 2010-04-15
    if(customer_flag != '2' && customer_flag != '8'){
	//add end Alice
	// device summary menu
	insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_SUMMARY), 'info.html'));
	// device wan menu
	insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_WAN), 'wancfg.cmd?action=view'));

	// device statistics menu
	nodeSts = insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_STATISTICS), 'statsifc.html'));
	insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_LAN), 'statsifc.html'));
	insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_WAN), 'statswan.cmd'));
	insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_ATM), 'statsxtm.cmd'));
	insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_ADSL), 'statsadsl.html'));
	if (vdslIncluded == 'true')
	    insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_VDSL), 'statsvdsl.html'));
	// device route menu
	insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_ROUTE), 'rtroutecfg.cmd?action=view'));
	insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_RT_ARP),'arpview.cmd'));
	//bug 2795
	if(usbmodem == '1') {
	    insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_ST_MODEM),'modemview.cmd'));
	}

	// dhcp info
	if (!(proto == 'Bridge' || ipExt == '1') && dhcpen == '1') {
	    insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DHCPINFO),'dhcpinfo.html'));
	}
    }

    //for STC
    if ((customer_flag == '2')&&(user != user_account)){//same pages for admin and support
	insFld(foldersTree, gFld(getMenuTitle(MENU_INTERNET_CONNECTION),
		    'wancfg.cmd?action=pppinterconn'));
	STC_Basic_User(options);
    }else if( (customer_flag == '1')&&(user != user_account)){
	insFld(foldersTree, gFld(getMenuTitle(MENU_INTERNET_CONNECTION),
		    'wancfg.cmd?action=pppinterconn'));
	menuAdmin(options, 1);

	var stc_basic_setting=options[MENU_OPTION_STC_BASIC_SETTING]; 
	if (stc_basic_setting == '1'){
	    insFld(foldersTree, gFld('', ''));
	    insFld(foldersTree, gFld('', ''));
	    nodeWebSwitchSTC = insFld(foldersTree, gFld(getMenuTitle(MENU_STC_BASIC_SETTING),
			'STC_BasicMenu.cmd'));
	}
//add by Alice for MTS 2010-04-15
    }else if ((customer_flag == '8')&&(user != user_account)){//same pages for admin and support
	insFld(foldersTree, gFld(getMenuTitle(MENU_INTERNET_CONNECTION),
		    'wancfg.cmd?action=pppinterconn'));
	MTS_Basic_User(options);
    }else if( (customer_flag == '16')&&(user != user_account)){
	insFld(foldersTree, gFld(getMenuTitle(MENU_INTERNET_CONNECTION),
		    'wancfg.cmd?action=pppinterconn'));
	menuAdmin(options, 1);

	var stc_basic_setting=options[MENU_OPTION_MTS_BASIC_SETTING]; 
	if (stc_basic_setting == '1'){
	    insFld(foldersTree, gFld('', ''));
	    insFld(foldersTree, gFld('', ''));
	    nodeWebSwitchMTS = insFld(foldersTree, gFld(getMenuTitle(MENU_MTS_BASIC_SETTING),
			'MTS_BasicMenu.cmd'));
	}
//add end Alice
    }else{ //for generic 
	if (user == admin_account || user == support_account) {
	    insFld(foldersTree, gFld(getMenuTitle(MENU_INTERNET_CONNECTION),
			'wancfg.cmd?action=pppinterconn'));
//Bug 4088 start		
	    if( (customer_flag == '32') && (user == admin_account) )
		    menuAdmin(options, 0);
	    else    
		    menuAdmin(options, 1);
//Bug 4088 end		    
	} else if (user == user_account) {
	    if ((customer_flag == '8') || (customer_flag == '16')) {
		menuUser(0);
	    } else if (customer_flag != '4') {
		 insFld(foldersTree, gFld(getMenuTitle(MENU_INTERNET_CONNECTION),
			'wancfg.cmd?action=pppinterconn')); //bug:4617
		menuUser(1);
	    }
	}else{
	    alert('Account error: '+user);
	}

    }
}
