function addWidgetsfrmAniFlipRight() {
    frmAniFlipRight.add();
};

function frmAniFlipRightGlobals() {
    frmAniFlipRight = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlipRight,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlipRight",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "FlipRight"
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
    frmAniFlipRight.info = {
        "kuid": "p2kwiet12889314953436"
    };
};