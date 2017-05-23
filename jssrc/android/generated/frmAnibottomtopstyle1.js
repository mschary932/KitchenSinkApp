function addWidgetsfrmAnibottomtopstyle1() {
    frmAnibottomtopstyle1.add();
};

function frmAnibottomtopstyle1Globals() {
    frmAnibottomtopstyle1 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottomtopstyle1,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottomtopstyle1",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottom-top style1"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 9
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 9
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAnibottomtopstyle1.info = {
        "kuid": "p2kwiet1288931495129"
    };
};