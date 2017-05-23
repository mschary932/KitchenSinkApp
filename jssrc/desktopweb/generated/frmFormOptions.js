function addWidgetsfrmFormOptions() {
    var hbxFormOptionsTab = new kony.ui.Box({
        "id": "hbxFormOptionsTab",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 3],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox193203698710975 = new kony.ui.Box({
        "id": "vbox193203698710975",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox19337994629111 = new kony.ui.Box({
        "id": "hbox19337994629111",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    var button193203698710976 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button193203698710976",
        "isVisible": true,
        "onClick": p2kwiet12889314955283_button193203698710976_onClick_seq0,
        "skin": "btnNormal",
        "text": "Form with widgets"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button193203698710986 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button193203698710986",
        "isVisible": true,
        "onClick": p2kwiet12889314955283_button193203698710986_onClick_seq0,
        "skin": "btnNormal",
        "text": "Form with image background"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox19337994629111.add(button193203698710976, button193203698710986);
    var hbox19337994629112 = new kony.ui.Box({
        "id": "hbox19337994629112",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    var button193203698711004 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button193203698711004",
        "isVisible": true,
        "onClick": p2kwiet12889314955283_button193203698711004_onClick_seq0,
        "skin": "btnNormal",
        "text": "ShowLoadingScreen"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button193203698711042 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button193203698711042",
        "isVisible": true,
        "onClick": p2kwiet12889314955283_button193203698711042_onClick_seq0,
        "skin": "btnNormal",
        "text": "Popup anchoring"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox19337994629112.add(button193203698711004, button193203698711042);
    vbox193203698710975.add(hbox19337994629111, hbox19337994629112);
    hbxFormOptionsTab.add(vbox193203698710975);
    frmFormOptions.add(hbxFormOptionsTab);
};

function frmFormOptionsGlobals() {
    frmFormOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormOptions,
        "enabledForIdleTimeout": false,
        "id": "frmFormOptions",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmFormOptions.info = {
        "kuid": "p2kwiet12889314955283"
    };
};