function addWidgetsfrmAni4SplitOut() {
    frmAni4SplitOut.add();
};

function frmAni4SplitOutGlobals() {
    frmAni4SplitOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitOut"
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
    frmAni4SplitOut.info = {
        "kuid": "p2kwiet1288931495101"
    };
};