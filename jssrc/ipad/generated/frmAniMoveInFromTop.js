function addWidgetsfrmAniMoveInFromTop() {
    frmAniMoveInFromTop.add();
};

function frmAniMoveInFromTopGlobals() {
    frmAniMoveInFromTop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromTop,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromTop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "MoveInFromTop"
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
            "transitionDirection": "fromTop",
            "transitionEffect": "transitionMoveIn"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromBottom",
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
    frmAniMoveInFromTop.info = {
        "kuid": "p2kwiet9745998653477"
    };
};