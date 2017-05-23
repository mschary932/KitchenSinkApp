function addWidgetsfrmAnifromright() {
    frmAnifromright.add();
};

function frmAnifromrightGlobals() {
    frmAnifromright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromright,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromright",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "from right"
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
    frmAnifromright.info = {
        "kuid": "p2kwiet1288931495166"
    };
};