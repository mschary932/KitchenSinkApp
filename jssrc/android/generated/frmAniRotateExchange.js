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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAniRotateExchange.info = {
        "kuid": "p2kwiet1288931495195"
    };
};