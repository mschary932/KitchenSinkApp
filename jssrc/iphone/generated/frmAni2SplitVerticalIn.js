function addWidgetsfrmAni2SplitVerticalIn() {
    frmAni2SplitVerticalIn.add();
};

function frmAni2SplitVerticalInGlobals() {
    frmAni2SplitVerticalIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalIn,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalIn"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "transitionTwoSplitVerticalIn"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "transitionTwoSplitVerticalOut"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "4e4e4eff",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "title",
                "closureLeftSideView": goToFrmAni,
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};