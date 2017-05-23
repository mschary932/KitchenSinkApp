function addWidgetsfrmAniRotateExchange() {
    frmAniRotateExchange.add();
};

function frmAniRotateExchangeGlobals() {
    frmAniRotateExchange = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniRotateExchange,
        "enabledForIdleTimeout": false,
        "id": "frmAniRotateExchange",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "RotateExchange"
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
    frmAniRotateExchange.info = {
        "kuid": "p2kwiet12889314953492"
    };
};