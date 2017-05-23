function initializehdrOne() {
    hbox192735980024418 = new kony.ui.Box({
        "id": "hbox192735980024418",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgKonyLogoDw = new kony.ui.Image2({
        "id": "imgKonyLogoDw",
        "isVisible": true,
        "src": "konylogodw.png"
    }, {
        "containerWeight": 45,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 500,
        "referenceWidth": 1000,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label19292414392646 = new kony.ui.Label({
        "id": "label19292414392646",
        "isVisible": true,
        "skin": "lblWhite1",
        "text": "a"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980024418.add(imgKonyLogoDw, label19292414392646);
}