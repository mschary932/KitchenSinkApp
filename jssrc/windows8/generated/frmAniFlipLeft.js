function addWidgetsfrmAniFlipLeft() {
    frmAniFlipLeft.add();
};

function frmAniFlipLeftGlobals() {
    frmAniFlipLeft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlipLeft,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlipLeft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "FlipLeft"
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
    frmAniFlipLeft.info = {
        "kuid": "p2kwiet12889314953432"
    };
};