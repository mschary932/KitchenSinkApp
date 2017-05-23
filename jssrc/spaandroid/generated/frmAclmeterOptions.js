function addWidgetsfrmAclmeterOptions() {
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Accelerometer"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var button1927359800104630 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800104630",
        "isVisible": true,
        "onClick": p2kwiet128893149516_button1927359800104630_onClick_seq0,
        "skin": "btnNormal",
        "text": "Current accelerometer data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 4, 4, 2],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927359800104641 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800104641",
        "isVisible": true,
        "onClick": p2kwiet128893149516_button1927359800104641_onClick_seq0,
        "skin": "btnNormal",
        "text": "Start monitoring acceleration"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927359800104647 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800104647",
        "isVisible": true,
        "onClick": p2kwiet128893149516_button1927359800104647_onClick_seq0,
        "skin": "btnNormal",
        "text": "Register shake event"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmAclmeterOptions.add(hbox103994549623663, button1927359800104630, button1927359800104641, button1927359800104647);
};

function frmAclmeterOptionsGlobals() {
    frmAclmeterOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAclmeterOptions,
        "enabledForIdleTimeout": false,
        "id": "frmAclmeterOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Accelerometer"
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
    frmAclmeterOptions.info = {
        "kuid": "p2kwiet128893149516"
    };
};