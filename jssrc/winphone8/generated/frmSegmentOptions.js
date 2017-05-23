function addWidgetsfrmSegmentOptions() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Segment"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox103994549623663.add(label103994549623664);
    var button117989725237440 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button117989725237440",
        "isVisible": true,
        "onClick": p2kwiet12889314952589_button117989725237440_onClick_seq0,
        "skin": "btnNormal",
        "text": "Segment views"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button117989725237450 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button117989725237450",
        "isVisible": true,
        "onClick": p2kwiet12889314952589_button117989725237450_onClick_seq0,
        "skin": "btnNormal",
        "text": "Segment with sections"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192735980060418 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button192735980060418",
        "isVisible": true,
        "onClick": p2kwiet12889314952589_button192735980060418_onClick_seq0,
        "skin": "btnNormal",
        "text": "Row template"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnSegSecHdrTemp = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btnSegSecHdrTemp",
        "isVisible": true,
        "onClick": p2kwiet12889314952589_btnSegSecHdrTemp_onClick_seq0,
        "skin": "btnNormal",
        "text": "Section header template"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnSegMulSel = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btnSegMulSel",
        "isVisible": true,
        "onClick": p2kwiet12889314952589_btnSegMulSel_onClick_seq0,
        "skin": "btnNormal",
        "text": "Multi Select"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button117822895631304 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button117822895631304",
        "isVisible": true,
        "onClick": p2kwiet12889314952589_button117822895631304_onClick_seq0,
        "skin": "btnNormal",
        "text": "Dynamic row templates"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmSegmentOptions.add(hbox103994549623663, button117989725237440, button117989725237450, button192735980060418, btnSegSecHdrTemp, btnSegMulSel, button117822895631304);
};

function frmSegmentOptionsGlobals() {
    frmSegmentOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentOptions,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["btnSegmentSingleSelect", "btnSegMulSel", "btnSegSecHdrTemp", "button117822895619570", "button117822895631304", "button117989725237440", "button117989725237450", "button117989725237596", "button1927359800104825", "button192735980060418", "button192735980060914", "button192735980061634", "button685080434820567", "hbox103994549623663", "label103994549623664"],
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
    frmSegmentOptions.info = {
        "kuid": "p2kwiet12889314952589"
    };
};