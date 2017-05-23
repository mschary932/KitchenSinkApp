function addWidgetsfrmAniMoveInFromBottom() {
    frmAniMoveInFromBottom.add();
};

function frmAniMoveInFromBottomGlobals() {
    frmAniMoveInFromBottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromBottom,
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
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAniMoveInFromBottom.info = {
        "kuid": "p2kwiet12889314953473"
    };
};