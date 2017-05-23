function addWidgetsfrmAnitoright() {
    frmAnitoright.add();
};

function frmAnitorightGlobals() {
    frmAnitoright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoright,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoright",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "to right"
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
    frmAnitoright.info = {
        "kuid": "p2kwiet1288931495225"
    };
};