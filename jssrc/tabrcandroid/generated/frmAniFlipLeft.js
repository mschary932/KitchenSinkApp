function addWidgetsfrmAniFlipLeft() {
    frmAniFlipLeft.add();
};

function frmAniFlipLeftGlobals() {
    frmAniFlipLeft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlipLeft,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlipLeft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "FlipLeft"
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
};