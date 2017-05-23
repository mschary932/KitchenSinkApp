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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
    frmTtlbarBgColor.info = {
        "kuid": "p2kwiet12889314953178"
    };
};