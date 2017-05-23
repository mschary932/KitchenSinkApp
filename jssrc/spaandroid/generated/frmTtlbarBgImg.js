function addWidgetsfrmTtlbarBgImg() {
    var labeltitleBack1 = new kony.ui.Label({
        "id": "labeltitleBack1",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of  titlebar (with background image) above."
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
    frmTtlbarBgImg.add(labeltitleBack1);
};

function frmTtlbarBgImgGlobals() {
    frmTtlbarBgImg = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarBgImg,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarBgImg",
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
    frmTtlbarBgImg.info = {
        "kuid": "p2kwiet12889314953182"
    };
};