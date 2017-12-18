function addWidgetsfrmAnifromleft() {
    frmAnifromleft.add();
};

function frmAnifromleftGlobals() {
    frmAnifromleft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromleft,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromleft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "from left"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 2
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 3
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};