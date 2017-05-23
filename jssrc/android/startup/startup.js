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
    initializehdrIconEdit();
    initializehdrOne();
    initializehdrSearch();
    initializewinMangoHeader();
    initializeftrOne();
    initializeactionWidsTemplate();
    initializedynamicRowTemplate1();
    initializedynamicRowTemplate2();
    initializehdr();
    initializerowTemplate1();
    initializerowTemplate2();
    initializerowTemplate3();
    initializeSecHeaderTemplate1();
    initializeSecHeaderTemplate2();
    initializeSecHeaderTemplate3();
    initializesegLoadingOnReachEnd();
    initializespaRowTemplate1();
    initializespaRowTemplate2();
    initializespaSecHdrTemp1();
    initializespaSecHdrTemp2();
    initializevbox1288931495113();
    initializevbox1288931495115();
    initializevbox1288931495117();
    initializevbox1288931495119();
    initializevbox1288931495121();
    initializevbox1288931495123();
    initializevbox1288931495125();
    initializevbox1288931495127();
    initializevbox1288931495129();
    initializevbox1288931495131();
    initializevbox1288931495133();
    initializevbox1288931495135();
    initializevbox1288931495137();
    initializevbox1288931495139();
    initializevbox1288931495141();
    initializevbox1288931495143();
    initializevbox1288931495145();
    initializevbox1288931495147();
    initializevbox1288931495149();
    initializevbox1288931495151();
    initializevbox1288931495153();
    initializevbox1288931495155();
    initializevbox1288931495157();
    initializevbox1288931495159();
    initializevbox1288931495161();
    initializevbox1288931495163();
    initializevbox1288931495165();
    initializevbox1288931495167();
    initializevbox1288931495169();
    initializevbox1288931495171();
    initializevbox1288931495173();
    initializevbox1288931495175();
    initializevbox1288931495177();
    initializevbox1288931495179();
    initializevbox1288931495181();
    initializevbox1288931495183();
    initializevbox1288931495185();
    initializevbox1288931495187();
    initializevbox1288931495189();
    initializevbox1288931495191();
    initializevbox1288931495193();
    initializevbox1288931495195();
    initializevbox1288931495197();
    initializevbox1288931495199();
    initializevbox1288931495201();
    initializevbox1288931495203();
    initializevbox1288931495205();
    initializevbox1288931495207();
    initializevbox1288931495209();
    initializevbox1288931495211();
    initializevbox1288931495213();
    initializevbox1288931495215();
    initializevbox1288931495217();
    initializevbox1288931495219();
    initializevbox1288931495221();
    initializevbox1288931495223();
    initializevbox1288931495225();
    initializevbox1288931495227();
    initializevbox1288931495229();
    initializevbox1288931495231();
    initializevbox1288931495233();
    initializevbox1288931495235();
    initializevbox1288931495237();
    initializevbox1288931495239();
    initializevbox1288931495241();
    initializevbox1288931495243();
    initializevbox1288931495245();
    initializevbox1288931495247();
    initializevbox1288931495249();
    initializevbox1288931495251();
    initializevbox1288931495253();
    initializevbox1288931495255();
    initializevbox1288931495257();
    initializevbox1288931495259();
    initializevbox1288931495261();
    initializevbox1288931495263();
    initializevbox1288931495265();
    frm3DObjGlobals();
    frmAclmeterOptionsGlobals();
    frmAclMeterReadingsGlobals();
    frmAdvancedWidgetsGlobals();
    frmAniGlobals();
    frmAni2SplitHorizontalInGlobals();
    frmAni2SplitHorizontalOutGlobals();
    frmAni2SplitVerticalInGlobals();
    frmAni2SplitVerticalOutGlobals();
    frmAni4SplitInGlobals();
    frmAni4SplitOutGlobals();
    frmAni4SplitRotateInGlobals();
    frmAni4SplitRotateOutGlobals();
    frmAniAndGlobals();
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
    frmAniMoveInGlobals();
    frmAniMoveInFromBottomGlobals();
    frmAniMoveInFromTopGlobals();
    frmAniPushGlobals();
    frmAniRevealGlobals();
    frmAnirightGlobals();
    frmAniRotateExchangeGlobals();
    frmAniSPAGlobals();
    frmAniSwitchLeftGlobals();
    frmAniSwitchRightGlobals();
    frmAnitoleftGlobals();
    frmAnitopGlobals();
    frmAnitoprightbottomGlobals();
    frmAnitorightGlobals();
    frmAniWinGlobals();
    frmAniWinPopGlobals();
    frmAniWinRotate3DDualGlobals();
    frmAniWinRotate3DSingleGlobals();
    frmAniWinSlideGlobals();
    frmAniWinSqueezeGlobals();
    frmAPIKeyGlobals();
    frmAppSetReadGlobals();
    frmAppSettingsGlobals();
    frmAppSetWriteGlobals();
    frmAsyncDataAccessGlobals();
    frmAsyncDataDisplayGlobals();
    frmBadgeGlobals();
    frmBasicWidgetsGlobals();
    frmBrowserGlobals();
    frmBrowserOptionsGlobals();
    frmBtnGlobals();
    frmCalGlobals();
    frmCalendarEventsGlobals();
    frmCamAcsModesGlobals();
    frmCameraBasicGlobals();
    frmCameraFrmOverlayGlobals();
    frmCameraOptionsGlobals();
    frmCameraOverlaidGlobals();
    frmCamOrientGlobals();
    frmCBoxGlobals();
    frmChkGlobals();
    frmComplexGlobals();
    frmContactGlobals();
    frmContainerWidgetsGlobals();
    frmCryptoGlobals();
    frmCustomCollapsTabGlobals();
    frmDatagrdGlobals();
    frmDeviceInfoGlobals();
    frmDictViewGlobals();
    frmDummyGlobals();
    frmDvcFeaturesGlobals();
    frmEmailGlobals();
    frmFlexGlobals();
    frmFormGlobals();
    frmFormImgBckGlobals();
    frmFormOptionsGlobals();
    frmGeoCurrentNWatchGlobals();
    frmGesturesGlobals();
    frmHdrFooterGlobals();
    frmHomeGlobals();
    frmIconEditStyleGlobals();
    frmIconsGlobals();
    frmImageGlobals();
    frmImgCropGlobals();
    frmImgFitToDimensionsGlobals();
    frmImgGalGlobals();
    frmImgMaintainAspectRatioGlobals();
    frmImgStripGlobals();
    frmLblGlobals();
    frmLinkGlobals();
    frmLiveTilesGlobals();
    frmLocalStoreGlobals();
    frmLstBoxGlobals();
    frmLstItemsGlobals();
    frmMapGlobals();
    frmNListGlobals();
    frmNLst2Globals();
    frmPhnGlobals();
    frmPickerViewGlobals();
    frmPlatformsGlobals();
    frmPopupGlobals();
    frmPushPullGlobals();
    frmRdoGlobals();
    frmRegisterAccelerometerGlobals();
    frmRichTextGlobals();
    frmRowTemplatesGlobals();
    frmScrollBoxMenuGlobals();
    frmScrollSPAGlobals();
    frmSecHdrWidoutTemplatesGlobals();
    frmSegActionableWidgetsGlobals();
    frmSegBoxesGlobals();
    frmSegCoverFlowViewGlobals();
    frmSegCustomPageIndicatorGlobals();
    frmSegCylinderViewGlobals();
    frmSegDynRowTemplateGlobals();
    frmsegGroupModeGlobals();
    frmSegInvertCylinderViewGlobals();
    frmSegInvertRotaryViewGlobals();
    frmSegLinearViewGlobals();
    frmSegmentMoreFeaturesGlobals();
    frmSegmentOptionsGlobals();
    frmSegMulSelectDataGlobals();
    frmSegOnReachEndGlobals();
    frmSegPageViewGlobals();
    frmSegRotatoryViewGlobals();
    frmSegSearchViewGlobals();
    frmSegSectionsGlobals();
    frmSegSinleSelectGlobals();
    frmSegStackViewGlobals();
    frmSegTableViewGlobals();
    frmSegViewsGlobals();
    frmSliderGlobals();
    frmSwipeGlobals();
    frmSwitchGlobals();
    frmTabCollpasibleGlobals();
    frmTabDefaultGlobals();
    frmTabPageViewGlobals();
    frmTabsGlobals();
    frmTabScreenLevelGlobals();
    frmTbxGlobals();
    frmToggleTabsGlobals();
    frmTtlbarBgColorGlobals();
    frmTtlbarBgImgGlobals();
    frmTtlbarCustomGlobals();
    frmTtlbarDefaultGlobals();
    frmTtlbarOptionsGlobals();
    frmTxtAreaGlobals();
    frmUICategoryGlobals();
    frmURLBasedImageGlobals();
    frmWebSQLGlobals();
    frmWebSQLResultsGlobals();
    popFormAnchorGlobals();
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