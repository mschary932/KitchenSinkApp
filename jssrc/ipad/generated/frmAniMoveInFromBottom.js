function addWidgetsfrmAniMoveInFromBottom() {
    frmAniMoveInFromBottom.add();
};

function frmAniMoveInFromBottomGlobals() {
    frmAniMoveInFromBottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromBottom,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromBottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "MoveInFromBottom"
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
            "transitionDirection": "fromBottom",
            "transitionEffect": "transitionMoveIn"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromTop",
            "transitionEffect": "transitionReveal"
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
    frmAniMoveInFromBottom.info = {
        "kuid": "p2kwiet12889314953473"
    };
};