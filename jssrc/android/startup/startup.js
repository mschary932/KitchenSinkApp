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
    initializeMVCTemplates();
    initializeUserWidgets();
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
    initializehdrIconEdit();
    initializehdrOne();
    initializehdrSearch();
    initializewinMangoHeader();
    initializeftrOne();
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
    frmAnibottomtopstyle1Globals();
    frmAniClothGlobals();
    frmAniCurlGlobals();
    frmAniDoorGlobals();
    frmAniFadeGlobals();
    frmAniFlipGlobals();
    frmAniFlipLeftGlobals();
    frmAniFlipRightGlobals();
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
    frmAnitopGlobals();
    frmAnitoprightbottomGlobals();
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
    frmAnibottomtopGlobals();
    frmAnifromcenterGlobals();
    frmAnifromleftGlobals();
    frmAnifromrightGlobals();
    frmAnitoleftGlobals();
    frmAnitorightGlobals();
    frmSegActionableWidgetsGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
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
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
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