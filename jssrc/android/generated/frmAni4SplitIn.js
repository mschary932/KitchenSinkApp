function addWidgetsfrmAni4SplitIn() {
    frmAni4SplitIn.add();
};

function frmAni4SplitInGlobals() {
    frmAni4SplitIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitIn"
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
};