//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "ksa2",
    appName: "KitchenSinkApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.5.172",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "ksa2",
    isMFApp: false,
    eventTypes: [],
    url: "https://app-factory-dev.konycloud.com/ksa2/MWServlet",
    secureurl: "https://app-factory-dev.konycloud.com/ksa2/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrOne();
    initializehdrSearch();
    initializehdrUI();
    initializewinMangoHeader();
    initializeftrOne();
    initializedynamicTemplate1();
    initializedynamicTemplate2();
    initializehdr();
    initializesegHdrTemp1();
    initializesegHdrTemp2();
    initializesegLoading();
    initializesegRow1();
    initializesegrow2();
    initializetemplate1();
    initializetemplate2();
    initializetemplate3();
    initializetempSegHdr();
    initializetempSegHdr1();
    initializetempSegHdr2();
    initializevbox974599865267();
    initializevbox974599865269();
    initializevbox974599865271();
    initializevbox974599865273();
    initializevbox974599865275();
    initializevbox974599865277();
    initializevbox974599865279();
    initializevbox974599865281();
    initializevbox974599865283();
    initializevbox974599865285();
    initializevbox974599865287();
    initializevbox974599865289();
    initializevbox974599865291();
    initializevbox974599865293();
    initializevbox974599865295();
    initializevbox974599865297();
    initializevbox974599865299();
    initializevbox974599865301();
    initializevbox974599865303();
    initializevbox974599865305();
    initializevbox974599865307();
    initializevbox974599865309();
    initializevbox974599865311();
    initializevbox974599865313();
    initializevbox974599865315();
    initializevbox974599865317();
    initializevbox974599865319();
    initializevbox974599865321();
    initializevbox974599865323();
    initializevbox974599865325();
    initializevbox974599865327();
    initializevbox974599865329();
    initializevbox974599865331();
    initializevbox974599865333();
    initializevbox974599865335();
    initializevbox974599865337();
    initializevbox974599865339();
    initializevbox974599865341();
    initializevbox974599865343();
    initializevbox974599865345();
    initializevbox974599865347();
    initializevbox974599865349();
    initializevbox974599865351();
    initializevbox974599865353();
    initializevbox974599865355();
    initializevbox974599865357();
    initializevbox974599865359();
    initializevbox974599865361();
    initializevbox974599865363();
    initializevbox974599865365();
    initializevbox974599865367();
    initializevbox974599865369();
    initializevbox974599865371();
    initializevbox974599865373();
    initializevbox974599865375();
    initializevbox974599865377();
    initializevbox974599865379();
    initializevbox974599865381();
    initializevbox974599865383();
    initializevbox974599865425();
    frmAclMeterReadingsGlobals();
    frmAni2SplitHorizontalInGlobals();
    frmAni2SplitHorizontalOutGlobals();
    frmAni2SplitVerticalInGlobals();
    frmAni2SplitVerticalOutGlobals();
    frmAni4SplitInGlobals();
    frmAni4SplitOutGlobals();
    frmAni4SplitRotateInGlobals();
    frmAni4SplitRotateOutGlobals();
    frmAnibottomGlobals();
    frmAnibottomlefttopGlobals();
    frmAnibottomtopGlobals();
    frmAnibottomtopstyle1Globals();
    frmAniClothGlobals();
    frmAniCurlGlobals();
    frmAniDoorGlobals();
    frmAniFadeGlobals();
    frmAniFlipGlobals();
    frmAniFlipLeftGlobals();
    frmAniFlipRightGlobals();
    frmAnifromcenterGlobals();
    frmAnifromleftGlobals();
    frmAnifromrightGlobals();
    frmAnileftGlobals();
    frmAnimationsGlobals();
    frmAniMoveInGlobals();
    frmAniMoveInFromBottomGlobals();
    frmAniMoveInFromTopGlobals();
    frmAniPushGlobals();
    frmAniRevealGlobals();
    frmAnirightGlobals();
    frmAniRotateExchangeGlobals();
    frmAniSwitchLeftGlobals();
    frmAniSwitchRightGlobals();
    frmAnitoleftGlobals();
    frmAnitopGlobals();
    frmAnitoprightbottomGlobals();
    frmAnitorightGlobals();
    frmAppSettingsGlobals();
    frmAsyncDataAccessGlobals();
    frmBadgeGlobals();
    frmBrowserGlobals();
    frmBrowserOptionsGlobals();
    frmButtonGlobals();
    frmCalendarGlobals();
    frmCalendarEventsGlobals();
    frmCameraGlobals();
    frmCameraOverlaidGlobals();
    frmCheckboxGlobals();
    frmComboBoxGlobals();
    frmContactGlobals();
    frmCryptoGlobals();
    frmDatagridGlobals();
    frmDeviceFeaturesGlobals();
    frmDeviceInfoGlobals();
    frmDummyGlobals();
    frmFormGlobals();
    frmFormImgBGGlobals();
    frmFormOptionsGlobals();
    frmGeoCurrentNWatchGlobals();
    frmGesturesGlobals();
    frmHdrFtrGlobals();
    frmHomeGlobals();
    frmIconsGlobals();
    frmImageGlobals();
    frmImgGalleryGlobals();
    frmImgStripGlobals();
    frmLabelsGlobals();
    frmLinkGlobals();
    frmListBoxGlobals();
    frmLocalStoreGlobals();
    frmMapGlobals();
    frmPickerViewGlobals();
    frmPlatformsGlobals();
    frmPopGlobals();
    frmRadioButtonGlobals();
    frmRichTextGlobals();
    frmScrollBoxMenuGlobals();
    frmScrollBoxSPAGlobals();
    frmSegDictViewGlobals();
    frmSegDynRowTemplateGlobals();
    frmSegmentFeaturesGlobals();
    frmSegmentTabletGlobals();
    frmSegmentViewsGlobals();
    frmSegOnReachEndGlobals();
    frmSegPullGlobals();
    frmSegScreenLevelGlobals();
    frmSegSearchViewGlobals();
    frmSegSecHdrDockGlobals();
    frmSegSwipeGlobals();
    frmSliderGlobals();
    frmSwitchGlobals();
    frmTabPaneGlobals();
    frmTextAreaGlobals();
    frmTextBoxGlobals();
    frmTitlebarBgColorGlobals();
    frmTitlebarBgImageGlobals();
    frmTitlebarCustomGlobals();
    frmTitlebarDefaultGlobals();
    frmTitlebarOptionsGlobals();
    frmUInterfaceGlobals();
    frmWebSQLGlobals();
    popFormAnchorGlobals();
    popLeftNrightGlobals();
    popTopNBottomGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        preappinit: ksa2preappinit,
        init: appInit,
        showstartupform: function() {
            frmPlatforms.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;