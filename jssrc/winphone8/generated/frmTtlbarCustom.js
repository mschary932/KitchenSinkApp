function addWidgetsfrmTtlbarCustom() {
    var labeltitleBack2 = new kony.ui.Label({
        "enableCache": false,
        "id": "labeltitleBack2",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of titlebar ( with background image and custom left/right buttons ) above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 7, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmTtlbarCustom.add(labeltitleBack2);
};

function frmTtlbarCustomGlobals() {
    frmTtlbarCustom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarCustom,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarCustom",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["labeltitleBack2"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmTtlbarCustom.info = {
        "kuid": "p2kwiet12889314953186"
    };
};