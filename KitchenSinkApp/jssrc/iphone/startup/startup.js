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
    initializevbox974599865113();
    initializevbox974599865115();
    initializevbox974599865117();
    initializevbox974599865119();
    initializevbox974599865121();
    initializevbox974599865123();
    initializevbox974599865125();
    initializevbox974599865127();
    initializevbox974599865129();
    initializevbox974599865131();
    initializevbox974599865133();
    initializevbox974599865135();
    initializevbox974599865137();
    initializevbox974599865139();
    initializevbox974599865141();
    initializevbox974599865143();
    initializevbox974599865145();
    initializevbox974599865147();
    initializevbox974599865149();
    initializevbox974599865151();
    initializevbox974599865153();
    initializevbox974599865155();
    initializevbox974599865157();
    initializevbox974599865159();
    initializevbox974599865161();
    initializevbox974599865163();
    initializevbox974599865165();
    initializevbox974599865167();
    initializevbox974599865169();
    initializevbox974599865171();
    initializevbox974599865173();
    initializevbox974599865175();
    initializevbox974599865177();
    initializevbox974599865179();
    initializevbox974599865181();
    initializevbox974599865183();
    initializevbox974599865185();
    initializevbox974599865187();
    initializevbox974599865189();
    initializevbox974599865191();
    initializevbox974599865193();
    initializevbox974599865195();
    initializevbox974599865197();
    initializevbox974599865199();
    initializevbox974599865201();
    initializevbox974599865203();
    initializevbox974599865205();
    initializevbox974599865207();
    initializevbox974599865209();
    initializevbox974599865211();
    initializevbox974599865213();
    initializevbox974599865215();
    initializevbox974599865217();
    initializevbox974599865219();
    initializevbox974599865221();
    initializevbox974599865223();
    initializevbox974599865225();
    initializevbox974599865227();
    initializevbox974599865229();
    initializevbox974599865231();
    initializevbox974599865233();
    initializevbox974599865235();
    initializevbox974599865237();
    initializevbox974599865239();
    initializevbox974599865241();
    initializevbox974599865243();
    initializevbox974599865245();
    initializevbox974599865247();
    initializevbox974599865249();
    initializevbox974599865251();
    initializevbox974599865253();
    initializevbox974599865255();
    initializevbox974599865257();
    initializevbox974599865259();
    initializevbox974599865261();
    initializevbox974599865263();
    initializevbox974599865265();
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