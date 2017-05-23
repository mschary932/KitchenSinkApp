function addWidgetsfrmAni4SplitRotateOut() {
    frmAni4SplitRotateOut.add();
};

function frmAni4SplitRotateOutGlobals() {
    frmAni4SplitRotateOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateOut"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
    frmAni4SplitRotateOut.info = {
        "kuid": "p2kwiet12889314953396"
    };
};