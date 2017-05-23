function addWidgetsfrmTtlbarBgImg() {
    var labeltitleBack1 = new kony.ui.Label({
        "enableCache": false,
        "id": "labeltitleBack1",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of  titlebar (with background image) above."
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
    frmTtlbarBgImg.add(labeltitleBack1);
};

function frmTtlbarBgImgGlobals() {
    frmTtlbarBgImg = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarBgImg,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarBgImg",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["labeltitleBack1"],
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
    frmTtlbarBgImg.info = {
        "kuid": "p2kwiet12889314953182"
    };
};