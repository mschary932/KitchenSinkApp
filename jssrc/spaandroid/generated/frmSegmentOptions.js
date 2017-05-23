function addWidgetsfrmSegmentOptions() {
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
        "text": "Segment options"
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
    var button117989725237440 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725237440",
        "isVisible": true,
        "onClick": p2kwiet12889314952616_button117989725237440_onClick_seq0,
        "skin": "btnNormal",
        "text": "Segment views"
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
    var button117989725237450 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725237450",
        "isVisible": true,
        "onClick": p2kwiet12889314952616_button117989725237450_onClick_seq0,
        "skin": "btnNormal",
        "text": "Segment with sections"
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
    var button192735980060418 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192735980060418",
        "isVisible": true,
        "onClick": p2kwiet12889314952616_button192735980060418_onClick_seq0,
        "skin": "btnNormal",
        "text": "Row template"
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
    var button192735980060798 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192735980060798",
        "isVisible": true,
        "onClick": p2kwiet12889314952616_button192735980060798_onClick_seq0,
        "skin": "btnNormal",
        "text": "Section header template"
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
    var button192735980061634 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192735980061634",
        "isVisible": true,
        "onClick": p2kwiet12889314952616_button192735980061634_onClick_seq0,
        "skin": "btnNormal",
        "text": "Segment widgets with preferred width"
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
    var button1927359800104825 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800104825",
        "isVisible": true,
        "onClick": p2kwiet12889314952616_button1927359800104825_onClick_seq0,
        "skin": "btnNormal",
        "text": "Segment with row skins"
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
    frmSegmentOptions.add(hbox103994549623663, button117989725237440, button117989725237450, button192735980060418, button192735980060798, button192735980061634, button1927359800104825);
};

function frmSegmentOptionsGlobals() {
    frmSegmentOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentOptions,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
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
    frmSegmentOptions.info = {
        "kuid": "frmSegmentOptionsSPAAndroid"
    };
};