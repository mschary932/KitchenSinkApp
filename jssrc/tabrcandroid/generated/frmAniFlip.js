function addWidgetsfrmAniFlip() {
    frmAniFlip.add();
};

function frmAniFlipGlobals() {
    frmAniFlip = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlip,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlip",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Flip"
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