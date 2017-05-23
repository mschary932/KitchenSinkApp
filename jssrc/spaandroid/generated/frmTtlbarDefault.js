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
        "margin": [2, 3, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
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
    frmTtlbarDefault.info = {
        "kuid": "p2kwiet12889314953191"
    };
};