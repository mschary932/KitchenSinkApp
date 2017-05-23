function addWidgetsfrmTtlbarBgColor() {
    var labeltitleBack = new kony.ui.Label({
        "enableCache": false,
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
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmTtlbarBgColor.add(labeltitleBack);
};

function frmTtlbarBgColorGlobals() {
    frmTtlbarBgColor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarBgColor,
        "enableCache": false,
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["labeltitleBack"],
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
    frmTtlbarBgColor.info = {
        "kuid": "p2kwiet12889314953178"
    };
};