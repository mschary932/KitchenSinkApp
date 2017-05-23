function addWidgetsfrmAnifromcenter() {
    frmAnifromcenter.add();
};

function frmAnifromcenterGlobals() {
    frmAnifromcenter = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromcenter,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromcenter",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "from center"
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
    frmAnifromcenter.info = {
        "kuid": "p2kwiet12889314953440"
    };
};