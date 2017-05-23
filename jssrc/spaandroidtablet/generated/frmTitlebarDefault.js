function addWidgetsfrmTitlebarDefault() {
    var label1927359800101124 = new kony.ui.Label({
        "id": "label1927359800101124",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Look at the standard title bar above."
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
    frmTitlebarDefault.add(label1927359800101124);
};

function frmTitlebarDefaultGlobals() {
    frmTitlebarDefault = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarDefault,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarDefault",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Default titlebar"
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
    frmTitlebarDefault.info = {
        "kuid": "p2kwiet12889314954875"
    };
};