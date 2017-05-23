function addWidgetsfrmAni2SplitVerticalIn() {
    frmAni2SplitVerticalIn.add();
};

function frmAni2SplitVerticalInGlobals() {
    frmAni2SplitVerticalIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalIn"
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
    frmAni2SplitVerticalIn.info = {
        "kuid": "p2kwiet128893149589"
    };
};