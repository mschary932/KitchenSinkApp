function addWidgetsfrmAnibottomlefttop() {
    frmAnibottomlefttop.add();
};

function frmAnibottomlefttopGlobals() {
    frmAnibottomlefttop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottomlefttop,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottomlefttop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "bottomleft-top"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 8
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 8
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};