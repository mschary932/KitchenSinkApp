function addWidgetsfrmAni4SplitRotateIn() {
    frmAni4SplitRotateIn.add();
};

function frmAni4SplitRotateInGlobals() {
    frmAni4SplitRotateIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateIn,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateIn"
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
            "transitionEffect": "transitionFourSplitRotateIn"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromRight",
            "transitionEffect": "transitionFourSplitRotateOut"
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
    frmAni4SplitRotateIn.info = {
        "kuid": "p2kwiet1288931495105"
    };
};