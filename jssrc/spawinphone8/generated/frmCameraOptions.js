function addWidgetsfrmCameraOptions() {
    var hbox103994549623663 = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Camera options"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbox103994549623663.add(label103994549623664);
    var button1927508755138051 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138051",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138051_onClick_seq0,
        "skin": "btnNormal",
        "text": "Basic camera"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927508755138061 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138061",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138061_onClick_seq0,
        "skin": "btnNormal",
        "text": "Camera with form overlay"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927508755138075 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138075",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138075_onClick_seq0,
        "skin": "btnNormal",
        "text": "Camera access modes"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927508755138081 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138081",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138081_onClick_seq0,
        "skin": "btnNormal",
        "text": "Capture orientation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmCameraOptions.add(hbox103994549623663, button1927508755138051, button1927508755138061, button1927508755138075, button1927508755138081);
};

function frmCameraOptionsGlobals() {
    frmCameraOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraOptions,
        "enabledForIdleTimeout": false,
        "id": "frmCameraOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Camera"
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
    frmCameraOptions.info = {
        "kuid": "p2kwiet1288931495574"
    };
};