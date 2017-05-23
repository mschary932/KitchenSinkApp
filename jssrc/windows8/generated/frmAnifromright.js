function addWidgetsfrmAnifromright() {
    frmAnifromright.add();
};

function frmAnifromrightGlobals() {
    frmAnifromright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromright,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromright",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "from right"
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
        "titleBar": true
    });
    frmAnifromright.info = {
        "kuid": "p2kwiet12889314953446"
    };
};