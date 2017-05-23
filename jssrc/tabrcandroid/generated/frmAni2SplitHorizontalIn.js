function addWidgetsfrmAni2SplitHorizontalIn() {
    frmAni2SplitHorizontalIn.add();
};

function frmAni2SplitHorizontalInGlobals() {
    frmAni2SplitHorizontalIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitHorizontalIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitHorizontalIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "2SplitHorizontalIn"
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
    frmAni2SplitHorizontalIn.info = {
        "kuid": "p2kwiet12889314953368"
    };
};