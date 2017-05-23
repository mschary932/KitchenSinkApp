function addWidgetsfrmAniMoveInFromBottom() {
    frmAniMoveInFromBottom.add();
};

function frmAniMoveInFromBottomGlobals() {
    frmAniMoveInFromBottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromBottom,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromBottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "MoveInFromBottom"
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
    frmAniMoveInFromBottom.info = {
        "kuid": "p2kwiet1288931495176"
    };
};