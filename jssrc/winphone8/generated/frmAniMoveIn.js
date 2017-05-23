function addWidgetsfrmAniMoveIn() {
    frmAniMoveIn.add();
};

function frmAniMoveInGlobals() {
    frmAniMoveIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveIn,
        "enableCache": false,
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
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAniMoveIn.info = {
        "kuid": "p2kwiet1288931495172"
    };
};