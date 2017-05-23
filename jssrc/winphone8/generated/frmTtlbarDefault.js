function addWidgetsfrmTtlbarDefault() {
    var labelTilebar44 = new kony.ui.Label({
        "enableCache": false,
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
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmTtlbarDefault.add(labelTilebar44);
};

function frmTtlbarDefaultGlobals() {
    frmTtlbarDefault = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarDefault,
        "enableCache": false,
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["labelTilebar44"],
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
    frmTtlbarDefault.info = {
        "kuid": "p2kwiet12889314953191"
    };
};