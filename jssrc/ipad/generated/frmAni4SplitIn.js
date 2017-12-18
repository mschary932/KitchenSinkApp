function addWidgetsfrmAni4SplitIn() {
    frmAni4SplitIn.add();
};

function frmAni4SplitInGlobals() {
    frmAni4SplitIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitIn,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitIn"
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
            "transitionDirection": "none",
            "transitionEffect": "transitionFourSplitIn"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "transitionFourSplitOut"
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