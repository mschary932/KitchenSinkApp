function addWidgetsfrmAniRotateExchange() {
    frmAniRotateExchange.add();
};

function frmAniRotateExchangeGlobals() {
    frmAniRotateExchange = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniRotateExchange,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniRotateExchange",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "RotateExchange"
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
    frmAniRotateExchange.info = {
        "kuid": "p2kwiet1288931495195"
    };
};