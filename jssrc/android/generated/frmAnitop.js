function addWidgetsfrmAnitop() {
    frmAnitop.add();
};

function frmAnitopGlobals() {
    frmAnitop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitop,
        "enabledForIdleTimeout": false,
        "id": "frmAnitop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "top"
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
    frmAnitop.info = {
        "kuid": "p2kwiet1288931495219"
    };
};