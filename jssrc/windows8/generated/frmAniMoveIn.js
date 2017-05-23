function addWidgetsfrmAniMoveIn() {
    frmAniMoveIn.add();
};

function frmAniMoveInGlobals() {
    frmAniMoveIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveIn,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "MoveIn"
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
    frmAniMoveIn.info = {
        "kuid": "p2kwiet12889314953469"
    };
};