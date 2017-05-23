function addWidgetsfrmAnitoright() {
    frmAnitoright.add();
};

function frmAnitorightGlobals() {
    frmAnitoright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoright,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoright",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "to right"
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
    frmAnitoright.info = {
        "kuid": "p2kwiet12889314953513"
    };
};