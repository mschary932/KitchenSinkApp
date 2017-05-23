function addWidgetsfrmAnitoright() {
    frmAnitoright.add();
};

function frmAnitorightGlobals() {
    frmAnitoright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoright,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoright",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "to right"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 4
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 5
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAnitoright.info = {
        "kuid": "p2kwiet12889314953513"
    };
};