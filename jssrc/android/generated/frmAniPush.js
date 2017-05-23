function addWidgetsfrmAniPush() {
    frmAniPush.add();
};

function frmAniPushGlobals() {
    frmAniPush = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniPush,
        "enabledForIdleTimeout": false,
        "id": "frmAniPush",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Push"
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
    frmAniPush.info = {
        "kuid": "p2kwiet1288931495184"
    };
};