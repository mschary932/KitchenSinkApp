function initializehdrIconEdit() {
    hbox117822895620695 = new kony.ui.Box({
        "focusSkin": "hboxIconEdit",
        "id": "hbox117822895620695",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxIconEdit"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox117822895620239 = new kony.ui.Box({
        "id": "vbox117822895620239",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 19,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button15633488265515 = new kony.ui.Button({
        "focusSkin": "btnBack",
        "id": "button15633488265515",
        "isVisible": true,
        "onClick": p2kwiet12889314955950_button15633488265515_onClick_seq0,
        "skin": "btnBack2",
        "text": "Back"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox117822895620239.add(button15633488265515);
    var label15633488265532 = new kony.ui.Label({
        "id": "label15633488265532",
        "isVisible": true,
        "skin": "lblGrayTitleIconEditStyle",
        "text": "Icon edit style"
    }, {
        "containerWeight": 62,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var button117822895620523 = new kony.ui.Button({
        "focusSkin": "btnEdit",
        "id": "button117822895620523",
        "isVisible": true,
        "onClick": p2kwiet12889314955950_button117822895620523_onClick_seq0,
        "skin": "btnEdit",
        "text": "Edit"
    }, {
        "containerWeight": 19,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox117822895620695.add(vbox117822895620239, label15633488265532, button117822895620523);
}