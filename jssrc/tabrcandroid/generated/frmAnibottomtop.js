function addWidgetsfrmAnibottomtop() {
    frmAnibottomtop.add();
};

function frmAnibottomtopGlobals() {
    frmAnibottomtop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottomtop,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottomtop",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottom-top"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 1
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 10
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAnibottomtop.info = {
        "kuid": "p2kwiet12889314953406"
    };
};