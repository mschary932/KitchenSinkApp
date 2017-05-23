function addWidgetsfrmBrowserOptions() {
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
        "text": "Browser options"
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
    var btnStaticHTML = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnStaticHTML",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_btnStaticHTML_onClick_seq0,
        "skin": "btnNormal",
        "text": "Browser with static content"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 5, 4, 5],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnDynamicURL = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnDynamicURL",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_btnDynamicURL_onClick_seq0,
        "skin": "btnNormal",
        "text": "Browser with dynamic content"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192840248542398 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192840248542398",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_button192840248542398_onClick_seq0,
        "skin": "btnNormal",
        "text": "Detect Telephone numbers"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192840248542498 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192840248542498",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_button192840248542498_onClick_seq0,
        "skin": "btnNormal",
        "text": "Enable Zoom property of Browser"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmBrowserOptions.add(hbox103994549623663, btnStaticHTML, btnDynamicURL, button192840248542398, button192840248542498);
};

function frmBrowserOptionsGlobals() {
    frmBrowserOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowserOptions,
        "enabledForIdleTimeout": false,
        "id": "frmBrowserOptions",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495410_frmBrowserOptions_preshow_seq0,
        "title": "Browser"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmBrowserOptions.info = {
        "kuid": "p2kwiet1288931495410"
    };
};