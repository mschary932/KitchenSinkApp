function addWidgetsfrmAniFade() {
    frmAniFade.add();
};

function frmAniFadeGlobals() {
    frmAniFade = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFade,
        "enabledForIdleTimeout": false,
        "id": "frmAniFade",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Fade"
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
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAniFade.info = {
        "kuid": "p2kwiet12889314953424"
    };
};