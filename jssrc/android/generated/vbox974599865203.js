function initializevbox974599865203() {
    vbox974599865203 = new kony.ui.Box({
        "id": "vbox974599865203",
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
    var hbox117989725234368 = new kony.ui.Box({
        "id": "hbox117989725234368",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    var image2117989725234369 = new kony.ui.Image2({
        "id": "image2117989725234369",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 15, 0, 15],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 90,
        "referenceWidth": 444,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox117989725234368.add(image2117989725234369);
    vbox974599865203.add(hbox117989725234368);
}