function initializevbox1288931495193() {
    vbox1288931495193 = new kony.ui.Box({
        "enableCache": false,
        "id": "vbox1288931495193",
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
    var hbox120858598121942 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox120858598121942",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    var BAccName = new kony.ui.Label({
        "enableCache": false,
        "id": "BAccName",
        "isVisible": true
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [6, 1, 1, 1],
        "marginInPixel": true,
        "padding": [2, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var WithdrawLimit = new kony.ui.Label({
        "enableCache": false,
        "id": "WithdrawLimit",
        "isVisible": true
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [2, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var CreditLimit = new kony.ui.Label({
        "enableCache": false,
        "id": "CreditLimit",
        "isVisible": true
    }, {
        "containerWeight": 21,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [2, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgChk = new kony.ui.Image2({
        "enableCache": false,
        "id": "imgChk",
        "isVisible": true,
        "src": "checkboxwhite.png"
    }, {
        "containerWeight": 9,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox120858598121942.add(BAccName, WithdrawLimit, CreditLimit, imgChk);
    vbox1288931495193.add(hbox120858598121942);
}