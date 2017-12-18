function addWidgetsfrmAnibottom() {
    frmAnibottom.add();
};

function frmAnibottomGlobals() {
    frmAnibottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottom,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottom"
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};