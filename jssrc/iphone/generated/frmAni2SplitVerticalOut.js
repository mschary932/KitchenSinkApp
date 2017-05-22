function addWidgetsfrmAni2SplitVerticalOut() {
    frmAni2SplitVerticalOut.add();
};

function frmAni2SplitVerticalOutGlobals() {
    frmAni2SplitVerticalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalOut,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalOut"
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
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionTwoSplitVerticalOut"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionTwoSplitVerticalIn"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "closureLeftSideView": goToFrmAni,
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAni2SplitVerticalOut.info = {
        "kuid": "p2kwiet97459986593"
    };
};