function addWidgetsfrmTabs() {
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
        "text": "Tabs"
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
    var button117989725229932 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725229932",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button117989725229932_onClick_seq0,
        "skin": "btnNormal",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1041822331265 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1041822331265",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1041822331265_onClick_seq0,
        "skin": "btnNormal",
        "text": "Collapsible view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1041822331266 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1041822331266",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1041822331266_onClick_seq0,
        "skin": "btnNormal",
        "text": "Page view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button117989725231517 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725231517",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button117989725231517_onClick_seq0,
        "skin": "btnNormal",
        "text": "Panorama view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1181029310128010 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310128010",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1181029310128010_onClick_seq0,
        "skin": "btnNormal",
        "text": "Toggle tabs"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1181029310128024 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310128024",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1181029310128024_onClick_seq0,
        "skin": "btnNormal",
        "text": "Tab image positions"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1181029310128038 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310128038",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1181029310128038_onClick_seq0,
        "skin": "btnNormal",
        "text": "Screen level tabpane"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmTabs.add(hbox103994549623663, button117989725229932, button1041822331265, button1041822331266, button117989725231517, button1181029310128010, button1181029310128024, button1181029310128038);
};

function frmTabsGlobals() {
    frmTabs = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTabs,
        "enabledForIdleTimeout": false,
        "id": "frmTabs",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Tabs"
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
    frmTabs.info = {
        "kuid": "p2kwiet12889314953034"
    };
};