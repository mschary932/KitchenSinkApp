function addWidgetsfrmTitlebarBgImage() {
    var label1178139583100948 = new kony.ui.Label({
        "id": "label1178139583100948",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Look at the customized look of  titlebar (with background image) above."
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    frmTitlebarBgImage.add(label1178139583100948);
};

function frmTitlebarBgImageGlobals() {
    frmTitlebarBgImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarBgImage,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarBgImage",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmTitlebarBgImage.info = {
        "kuid": "p2kwiet12889314954866"
    };
};