function addWidgetsfrmAni4SplitRotateOut() {
    frmAni4SplitRotateOut.add();
};

function frmAni4SplitRotateOutGlobals() {
    frmAni4SplitRotateOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateOut,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateOut"
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
            "transitionEffect": "transitionFourSplitRotateOut"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionFourSplitRotateIn"
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
};