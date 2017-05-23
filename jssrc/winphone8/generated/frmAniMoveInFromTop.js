function addWidgetsfrmAniMoveInFromTop() {
    frmAniMoveInFromTop.add();
};

function frmAniMoveInFromTopGlobals() {
    frmAniMoveInFromTop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromTop,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromTop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "MoveInFromTop"
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
    frmAniMoveInFromTop.info = {
        "kuid": "p2kwiet1288931495180"
    };
};