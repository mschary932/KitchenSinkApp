function addWidgetsfrmTitlebarCustom() {
    var label1178139583100982 = new kony.ui.Label({
        "id": "label1178139583100982",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Look at the customized look of titlebar ( with background image and custom left/right buttons ) above."
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
    frmTitlebarCustom.add(label1178139583100982);
};

function frmTitlebarCustomGlobals() {
    frmTitlebarCustom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarCustom,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarCustom",
        "needAppMenu": true,
        "skin": "frm"
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmTitlebarCustom.info = {
        "kuid": "p2kwiet12889314954870"
    };
};