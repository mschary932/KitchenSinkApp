function addWidgetsfrmFormImgBG() {
    var hbxFormWidTabSPA = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbxFormWidTabSPA",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblFormWidTabSPA = new kony.ui.Label({
        "id": "lblFormWidTabSPA",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Form with image background"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbxFormWidTabSPA.add(lblFormWidTabSPA);
    frmFormImgBG.add(hbxFormWidTabSPA);
};

function frmFormImgBGGlobals() {
    frmFormImgBG = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormImgBG,
        "enabledForIdleTimeout": false,
        "id": "frmFormImgBG",
        "needAppMenu": true,
        "skin": "frmImg",
        "title": "Image background"
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
    frmFormImgBG.info = {
        "kuid": "p2kwiet12889314953870"
    };
};