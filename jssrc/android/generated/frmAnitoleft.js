function addWidgetsfrmAnitoleft() {
    frmAnitoleft.add();
};

function frmAnitoleftGlobals() {
    frmAnitoleft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoleft,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoleft",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "to left"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 5
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
    frmAnitoleft.info = {
        "kuid": "p2kwiet1288931495216"
    };
};