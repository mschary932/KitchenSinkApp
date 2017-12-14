function addWidgetsfrmDummy() {
    frmDummy.add();
};

function frmDummyGlobals() {
    frmDummy = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDummy,
        "enabledForIdleTimeout": false,
        "id": "frmDummy",
        "needAppMenu": true,
        "postShow": p2kwiet1288931495940_frmDummy_postshow_seq0,
        "skin": "frmSknTrans"
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
};