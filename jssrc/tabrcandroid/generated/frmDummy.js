function addWidgetsfrmDummy() {
    frmDummy.add();
};

function frmDummyGlobals() {
    frmDummy = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDummy,
        "enabledForIdleTimeout": false,
        "id": "frmDummy",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmDummy.info = {
        "kuid": "p2kwiet12889314953845"
    };
};