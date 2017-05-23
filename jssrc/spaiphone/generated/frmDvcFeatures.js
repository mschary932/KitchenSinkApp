function addWidgetsfrmDvcFeatures() {
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
        "text": "Device features"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var button1181029310123295 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310123295",
        "isVisible": true,
        "onClick": p2kwiet1288931495959_button1181029310123295_onClick_seq0,
        "skin": "btnNormal",
        "text": "GeoLocation"
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
    var button1181029310123319 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310123319",
        "isVisible": true,
        "onClick": p2kwiet1288931495959_button1181029310123319_onClick_seq0,
        "skin": "btnNormal",
        "text": "Device Info"
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
    var button1181029310123331 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310123331",
        "isVisible": true,
        "onClick": p2kwiet1288931495959_button1181029310123331_onClick_seq0,
        "skin": "btnNormal",
        "text": "Local Storage"
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
    var button1181029310123337 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310123337",
        "isVisible": true,
        "onClick": p2kwiet1288931495959_button1181029310123337_onClick_seq0,
        "skin": "btnNormal",
        "text": "WebSQL"
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
    var button1181029310123343 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310123343",
        "isVisible": true,
        "onClick": p2kwiet1288931495959_button1181029310123343_onClick_seq0,
        "skin": "btnNormal",
        "text": "Crypto Libraries"
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
    frmDvcFeatures.add(hbox103994549623663, button1181029310123295, button1181029310123319, button1181029310123331, button1181029310123337, button1181029310123343);
};

function frmDvcFeaturesGlobals() {
    frmDvcFeatures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDvcFeatures,
        "enabledForIdleTimeout": false,
        "id": "frmDvcFeatures",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Device Features"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmDvcFeatures.info = {
        "kuid": "p2kwiet1288931495959"
    };
};