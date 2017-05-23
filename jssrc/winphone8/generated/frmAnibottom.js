function addWidgetsfrmAnibottom() {
    frmAnibottom.add();
};

function frmAnibottomGlobals() {
    frmAnibottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottom,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottom"
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
    frmAnibottom.info = {
        "kuid": "p2kwiet1288931495120"
    };
};