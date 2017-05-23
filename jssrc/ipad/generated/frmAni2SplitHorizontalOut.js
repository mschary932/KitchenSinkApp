function addWidgetsfrmAni2SplitHorizontalOut() {
    frmAni2SplitHorizontalOut.add();
};

function frmAni2SplitHorizontalOutGlobals() {
    frmAni2SplitHorizontalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitHorizontalOut,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitHorizontalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "2SplitHorizontalOut"
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
            "transitionEffect": "transitionTwoSplitHorizontalOut"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionTwoSplitHorizontalIn"
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
    frmAni2SplitHorizontalOut.info = {
        "kuid": "p2kwiet12889314953372"
    };
};