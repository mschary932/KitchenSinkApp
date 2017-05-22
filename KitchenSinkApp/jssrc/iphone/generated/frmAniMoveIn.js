function addWidgetsfrmAniMoveIn() {
    frmAniMoveIn.add();
};

function frmAniMoveInGlobals() {
    frmAniMoveIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveIn,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "MoveIn"
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
            "transitionEffect": "transitionMoveIn"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromRight",
            "transitionEffect": "transitionMoveIn"
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
    frmAniMoveIn.info = {
        "kuid": "p2kwiet974599865172"
    };
};