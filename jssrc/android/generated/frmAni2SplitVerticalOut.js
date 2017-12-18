function addWidgetsfrmAni2SplitVerticalOut() {
    frmAni2SplitVerticalOut.add();
};

function frmAni2SplitVerticalOutGlobals() {
    frmAni2SplitVerticalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalOut"
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