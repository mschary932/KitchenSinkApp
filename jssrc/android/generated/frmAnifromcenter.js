function addWidgetsfrmAnifromcenter() {
    frmAnifromcenter.add();
};

function frmAnifromcenterGlobals() {
    frmAnifromcenter = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromcenter,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromcenter",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "from center"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 6
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 6
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};