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
    }, {});
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["label1178139583100982"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmTitlebarCustom.info = {
        "kuid": "p2kwiet12889314954870"
    };
};