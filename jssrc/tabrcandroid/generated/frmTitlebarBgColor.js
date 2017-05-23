function addWidgetsfrmTitlebarBgColor() {
    var label1178139583100876 = new kony.ui.Label({
        "id": "label1178139583100876",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Look at the customized look of  titlebar ( with background color ) above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmTitlebarBgColor.add(label1178139583100876);
};

function frmTitlebarBgColorGlobals() {
    frmTitlebarBgColor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarBgColor,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarBgColor",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Titlebar with background color"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
        "titleBarSkin": "titlestudio1",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmTitlebarBgColor.info = {
        "kuid": "p2kwiet12889314954862"
    };
};