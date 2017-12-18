function initializevbox974599865141() {
    vbox974599865141 = new kony.ui.Box({
        "id": "vbox974599865141",
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
    var hbxWallMartDisney = new kony.ui.Box({
        "id": "hbxWallMartDisney",
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
    var vbxWallMartDisney = new kony.ui.Box({
        "id": "vbxWallMartDisney",
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
    var lblWallMartDisney = new kony.ui.Label({
        "id": "lblWallMartDisney",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var lblWMTDIS = new kony.ui.Label({
        "id": "lblWMTDIS",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    vbxWallMartDisney.add(lblWallMartDisney, lblWMTDIS);
    hbxWallMartDisney.add(vbxWallMartDisney);
    var hbxValueDiff = new kony.ui.Box({
        "id": "hbxValueDiff",
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
    var lblEmpty = new kony.ui.Label({
        "id": "lblEmpty",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblValueWMDisney = new kony.ui.Label({
        "id": "lblValueWMDisney",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 28,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    var lblDiffWallmartDisney = new kony.ui.Label({
        "id": "lblDiffWallmartDisney",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 32,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    hbxValueDiff.add(lblEmpty, lblValueWMDisney, lblDiffWallmartDisney);
    var hbxWMDPrice = new kony.ui.Box({
        "id": "hbxWMDPrice",
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
    var lblWMDPrice = new kony.ui.Label({
        "id": "lblWMDPrice",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var lblWMDValue = new kony.ui.Label({
        "id": "lblWMDValue",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    var lblWMDDiff = new kony.ui.Label({
        "id": "lblWMDDiff",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    hbxWMDPrice.add(lblWMDPrice, lblWMDValue, lblWMDDiff);
    var linePrice = new kony.ui.Line({
        "id": "linePrice",
        "isVisible": true
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbxAvgVolume = new kony.ui.Box({
        "id": "hbxAvgVolume",
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
    var lblAvgVolume = new kony.ui.Label({
        "id": "lblAvgVolume",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var lblAvgValue = new kony.ui.Label({
        "id": "lblAvgValue",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    var lblAvgDiff = new kony.ui.Label({
        "id": "lblAvgDiff",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    hbxAvgVolume.add(lblAvgVolume, lblAvgValue, lblAvgDiff);
    var linAvgVolume = new kony.ui.Line({
        "id": "linAvgVolume",
        "isVisible": true
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbxPETrailing = new kony.ui.Box({
        "id": "hbxPETrailing",
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
    var lblPETrailing = new kony.ui.Label({
        "id": "lblPETrailing",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var lblPEValue = new kony.ui.Label({
        "id": "lblPEValue",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    var lblPEDiff = new kony.ui.Label({
        "id": "lblPEDiff",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    hbxPETrailing.add(lblPETrailing, lblPEValue, lblPEDiff);
    var linPEDiff = new kony.ui.Line({
        "id": "linPEDiff",
        "isVisible": true
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbxMarketCap = new kony.ui.Box({
        "id": "hbxMarketCap",
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
    var lblMarketCap = new kony.ui.Label({
        "id": "lblMarketCap",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 51,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var lblMarketCapValue = new kony.ui.Label({
        "id": "lblMarketCapValue",
        "isVisible": true,
        "text": "Label"
    }, {
        "containerWeight": 49,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "padding": [2, 1, 20, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    hbxMarketCap.add(lblMarketCap, lblMarketCapValue);
    vbox974599865141.add(hbxWallMartDisney, hbxValueDiff, hbxWMDPrice, linePrice, hbxAvgVolume, linAvgVolume, hbxPETrailing, linPEDiff, hbxMarketCap);
}