function addWidgetsfrmAnifromcenter() {
    frmAnifromcenter.add();
};

function frmAnifromcenterGlobals() {
    frmAnifromcenter = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromcenter,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromcenter",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "from center"
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
    frmAnifromcenter.info = {
        "kuid": "p2kwiet1288931495160"
    };
};