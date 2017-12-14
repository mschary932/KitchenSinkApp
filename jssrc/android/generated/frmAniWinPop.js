function addWidgetsfrmAniWinPop() {
    frmAniWinPop.add();
};

function frmAniWinPopGlobals() {
    frmAniWinPop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinPop,
        "enabledForIdleTimeout": false,
        "id": "frmAniWinPop",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495237_frmAniWinPop_preshow_seq0,
        "skin": "frmAniSkin",
        "title": "Pop"
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