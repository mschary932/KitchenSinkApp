function addWidgetsfrmAniFade() {
    frmAniFade.add();
};

function frmAniFadeGlobals() {
    frmAniFade = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFade,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniFade",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Fade"
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
    frmAniFade.info = {
        "kuid": "p2kwiet1288931495144"
    };
};