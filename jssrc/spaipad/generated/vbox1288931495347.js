function initializevbox1288931495347() {
    vbox1288931495347 = new kony.ui.Box({
        "id": "vbox1288931495347",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblContainerWidget = new kony.ui.Label({
        "id": "lblContainerWidget",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Label"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [5, 3, 1, 3],
        "paddingInPixel": false,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    vbox1288931495347.add(lblContainerWidget);
}