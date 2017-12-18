function addWidgetsfrmAni4SplitOut() {
    frmAni4SplitOut.add();
};

function frmAni4SplitOutGlobals() {
    frmAni4SplitOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitOut,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitOut"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionFourSplitOut"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionFourSplitIn"
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