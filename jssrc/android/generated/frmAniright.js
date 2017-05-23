function addWidgetsfrmAniright() {
    frmAniright.add();
};

function frmAnirightGlobals() {
    frmAniright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniright,
        "enabledForIdleTimeout": false,
        "id": "frmAniright",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "right"
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
    frmAniright.info = {
        "kuid": "p2kwiet1288931495192"
    };
};