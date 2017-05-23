function addWidgetsfrmTtlbarCustom() {
    var labeltitleBack2 = new kony.ui.Label({
        "id": "labeltitleBack2",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of titlebar ( with background image and custom left/right buttons ) above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    frmTtlbarCustom.add(labeltitleBack2);
};

function frmTtlbarCustomGlobals() {
    frmTtlbarCustom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarCustom,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarCustom",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmTtlbarCustom.info = {
        "kuid": "p2kwiet12889314953186"
    };
};