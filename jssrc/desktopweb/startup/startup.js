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
    initializevbox1288931495385();
    initializevbox1288931495387();
    initializevbox1288931495389();
    initializevbox1288931495391();
    initializevbox1288931495393();
    initializevbox1288931495395();
    initializevbox1288931495397();
    initializevbox1288931495399();
    initializevbox1288931495401();
    initializevbox1288931495403();
    initializevbox1288931495405();
    initializevbox1288931495407();
    initializevbox1288931495409();
    initializevbox1288931495411();
    initializevbox1288931495413();
    initializevbox1288931495415();
    initializevbox1288931495417();
    initializevbox1288931495419();
    initializevbox1288931495421();
    initializevbox1288931495423();
    initializehdrOne();
    frmAnibottomGlobals();
    frmAnileftGlobals();
    frmAnimationsGlobals();
    frmAnirightGlobals();
    frmAnitopGlobals();
    frmBrowserGlobals();
    frmBrowserOptionsGlobals();
    frmButtonGlobals();
    frmCalendarGlobals();
    frmCheckboxGlobals();
    frmComboBoxGlobals();
    frmCryptoGlobals();
    frmDatagridGlobals();
    frmDeviceFeaturesGlobals();
    frmDeviceInfoGlobals();
    frmFormGlobals();
    frmFormImgBGGlobals();
    frmFormOptionsGlobals();
    frmGeoCurrentNWatchGlobals();
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
    frmPlatformsGlobals();
    frmRadioButtonGlobals();
    frmRichTextGlobals();
    frmScrollBoxGlobals();
    frmSegDynRowTemplateGlobals();
    frmSegmentFeaturesGlobals();
    frmSegmentTabletGlobals();
    frmSegmentViewsGlobals();
    frmSegOnReachEndGlobals();
    frmSegPullGlobals();
    frmSegScreenLevelGlobals();
    frmSegSecHdrDockGlobals();
    frmSwitchGlobals();
    frmTabPaneGlobals();
    frmTextAreaGlobals();
    frmTextBoxGlobals();
    frmUInterfaceGlobals();
    frmWebSQLGlobals();
    popFormAnchorGlobals();
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
            frmUInterface.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
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