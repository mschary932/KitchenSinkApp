function addWidgetsfrmAniPush() {
    frmAniPush.add();
};

function frmAniPushGlobals() {
    frmAniPush = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniPush,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniPush",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Push"
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
            "transitionEffect": "transitionPush"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromRight",
            "transitionEffect": "transitionPush"
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