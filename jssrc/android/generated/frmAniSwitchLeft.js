function addWidgetsfrmAniSwitchLeft() {
    frmAniSwitchLeft.add();
};

function frmAniSwitchLeftGlobals() {
    frmAniSwitchLeft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniSwitchLeft,
        "enabledForIdleTimeout": false,
        "id": "frmAniSwitchLeft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "SwitchLeft"
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
    frmAniSwitchLeft.info = {
        "kuid": "p2kwiet1288931495208"
    };
};