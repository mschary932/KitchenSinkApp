function addWidgetsfrmTtlbarBgColor() {
    var labeltitleBack = new kony.ui.Label({
        "id": "labeltitleBack",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of  titlebar ( with background color ) above."
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
    frmTtlbarBgColor.add(labeltitleBack);
};

function frmTtlbarBgColorGlobals() {
    frmTtlbarBgColor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarBgColor,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarBgColor",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Titlebar"
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
        "titleBarSkin": "titlestudio1",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};