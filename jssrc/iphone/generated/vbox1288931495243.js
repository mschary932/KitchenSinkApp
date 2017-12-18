function initializevbox1288931495243() {
    vbox1288931495243 = new kony.ui.Box({
        "id": "vbox1288931495243",
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
    var hbox117989725237556 = new kony.ui.Box({
        "id": "hbox117989725237556",
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
    var lblSegSec1 = new kony.ui.Label({
        "id": "lblSegSec1",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Label"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSegSec2 = new kony.ui.Label({
        "id": "lblSegSec2",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Label"
    }, {
        "containerWeight": 29,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSegSec3 = new kony.ui.Label({
        "id": "lblSegSec3",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Label"
    }, {
        "containerWeight": 31,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox117989725237556.add(lblSegSec1, lblSegSec2, lblSegSec3);
    vbox1288931495243.add(hbox117989725237556);
}