function addWidgetsfrmTtlbarDefault() {
    var labelTilebar44 = new kony.ui.Label({
        "id": "labelTilebar44",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the standard title bar above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 7, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmTtlbarDefault.add(labelTilebar44);
};

function frmTtlbarDefaultGlobals() {
    frmTtlbarDefault = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarDefault,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarDefault",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Default Titlebar"
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
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};