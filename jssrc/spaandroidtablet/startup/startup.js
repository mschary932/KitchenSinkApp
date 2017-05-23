//startup.js file
var appConfig = {
    appId: "ksa2",
    appName: "KitchenSinkApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.5.172",
    serverPort: "8080",
    secureServerPort: null,
    isMFApp: false,
    eventTypes: [],
    url: "https://app-factory-dev.konycloud.com/ksa2/MWServlet",
    secureurl: "https://app-factory-dev.konycloud.com/ksa2/MWServlet",
    middlewareContext: "ksa2"
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
    initializevbox1288931495267();
    initializevbox1288931495269();
    initializevbox1288931495271();
    initializevbox1288931495273();
    initializevbox1288931495275();
    initializevbox1288931495277();
    initializevbox1288931495279();
    initializevbox1288931495281();
    initializevbox1288931495283();
    initializevbox1288931495285();
    initializevbox1288931495287();
    initializevbox1288931495289();
    initializevbox1288931495291();
    initializevbox1288931495293();
    initializevbox1288931495295();
    initializevbox1288931495297();
    initializevbox1288931495299();
    initializevbox1288931495301();
    initializevbox1288931495303();
    initializevbox1288931495305();
    initializevbox1288931495307();
    initializevbox1288931495309();
    initializevbox1288931495311();
    initializevbox1288931495313();
    initializevbox1288931495315();
    initializevbox1288931495317();
    initializevbox1288931495319();
    initializevbox1288931495321();
    initializevbox1288931495323();
    initializevbox1288931495325();
    initializevbox1288931495327();
    initializevbox1288931495329();
    initializevbox1288931495331();
    initializevbox1288931495333();
    initializevbox1288931495335();
    initializevbox1288931495337();
    initializevbox1288931495339();
    initializevbox1288931495341();
    initializevbox1288931495343();
    initializevbox1288931495345();
    initializevbox1288931495347();
    initializevbox1288931495349();
    initializevbox1288931495351();
    initializevbox1288931495353();
    initializevbox1288931495355();
    initializevbox1288931495357();
    initializevbox1288931495359();
    initializevbox1288931495361();
    initializevbox1288931495363();
    initializevbox1288931495365();
    initializevbox1288931495367();
    initializevbox1288931495369();
    initializevbox1288931495371();
    initializevbox1288931495373();
    initializevbox1288931495375();
    initializevbox1288931495377();
    initializevbox1288931495379();
    initializevbox1288931495381();
    initializevbox1288931495383();
    initializevbox1288931495425();
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
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};