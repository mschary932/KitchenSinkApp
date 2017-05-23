function addWidgetsfrmComplex() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Auto Resize"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox103994549623663.add(label103994549623664);
    var hbxRotateDevice = new kony.ui.Box({
        "enableCache": false,
        "id": "hbxRotateDevice",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [8, 5, 8, 4],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblComplex = new kony.ui.Label({
        "enableCache": false,
        "id": "lblComplex",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Please rotate the device to observe Landscape mode"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxRotateDevice.add(lblComplex);
    var hbxPlatinumAcc = new kony.ui.Box({
        "enableCache": false,
        "id": "hbxPlatinumAcc",
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
    var vbxPlatinumAcc = new kony.ui.Box({
        "enableCache": false,
        "id": "vbxPlatinumAcc",
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
    var lblPlatinumAcc = new kony.ui.Label({
        "enableCache": false,
        "id": "lblPlatinumAcc",
        "isVisible": true,
        "skin": "lblMainRed",
        "text": "Platinum Account  PA12345"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var hbxTotal = new kony.ui.Box({
        "enableCache": false,
        "id": "hbxTotal",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxTop"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxTotal = new kony.ui.Box({
        "enableCache": false,
        "id": "vbxTotal",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 69,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblTotal = new kony.ui.Label({
        "enableCache": false,
        "id": "lblTotal",
        "isVisible": true,
        "skin": "lblBold",
        "text": "Total"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 3, 0, 0],
        "marginInPixel": true,
        "padding": [2, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var lblAsset = new kony.ui.Label({
        "enableCache": false,
        "id": "lblAsset",
        "isVisible": true,
        "skin": "lblBold",
        "text": "Asset Value"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 1, 0, 3],
        "marginInPixel": true,
        "padding": [2, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    vbxTotal.add(lblTotal, lblAsset);
    var lblValue = new kony.ui.Label({
        "enableCache": false,
        "id": "lblValue",
        "isVisible": true,
        "skin": "lblBold",
        "text": "$ 3,244"
    }, {
        "containerWeight": 31,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 6, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {});
    hbxTotal.add(vbxTotal, lblValue);
    vbxPlatinumAcc.add(lblPlatinumAcc, hbxTotal);
    hbxPlatinumAcc.add(vbxPlatinumAcc);
    var segRetail = new kony.ui.SegmentedUI2({
        "data": [{
            "lblAvgDiff": "5,958,426",
            "lblAvgValue": "Avg Volume",
            "lblAvgVolume": "0.00 %",
            "lblDiffWallmartDisney": "                              ",
            "lblEmpty": "248.9 B",
            "lblMarketCap": "1.02 %",
            "lblMarketCapValue": "Market Cap",
            "lblPEDiff": "15.47x",
            "lblPETrailing": "0.0002 %",
            "lblPEValue": "P/E Trailing",
            "lblValueWMDisney": "Difference ",
            "lblWMDDiff": "73.55",
            "lblWMDPrice": "Value",
            "lblWMDValue": "Price",
            "lblWMTDIS": "WMT: NYSE ",
            "lblWallMartDisney": "Wal-Mart Stores Inc."
        }, {
            "lblAvgDiff": "7,745,441",
            "lblAvgValue": "Avg Volume",
            "lblAvgVolume": "0.00 %",
            "lblDiffWallmartDisney": "                              ",
            "lblEmpty": "91.1 B",
            "lblMarketCap": "0.92 %",
            "lblMarketCapValue": "Market Cap",
            "lblPEDiff": "16.42x",
            "lblPETrailing": "0.0001 %",
            "lblPEValue": "P/E Trailing",
            "lblValueWMDisney": "Difference ",
            "lblWMDDiff": "50.79",
            "lblWMDPrice": "Value",
            "lblWMDValue": "Price",
            "lblWMTDIS": "DIS: NYSE ",
            "lblWallMartDisney": "Disney Walt CO Com"
        }],
        "enableCache": false,
        "groupCells": false,
        "id": "segRetail",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495141,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbxAvgVolume": "hbxAvgVolume",
            "hbxMarketCap": "hbxMarketCap",
            "hbxPETrailing": "hbxPETrailing",
            "hbxValueDiff": "hbxValueDiff",
            "hbxWMDPrice": "hbxWMDPrice",
            "hbxWallMartDisney": "hbxWallMartDisney",
            "lblAvgDiff": "lblAvgDiff",
            "lblAvgValue": "lblAvgValue",
            "lblAvgVolume": "lblAvgVolume",
            "lblDiffWallmartDisney": "lblDiffWallmartDisney",
            "lblEmpty": "lblEmpty",
            "lblMarketCap": "lblMarketCap",
            "lblMarketCapValue": "lblMarketCapValue",
            "lblPEDiff": "lblPEDiff",
            "lblPETrailing": "lblPETrailing",
            "lblPEValue": "lblPEValue",
            "lblValueWMDisney": "lblValueWMDisney",
            "lblWMDDiff": "lblWMDDiff",
            "lblWMDPrice": "lblWMDPrice",
            "lblWMDValue": "lblWMDValue",
            "lblWMTDIS": "lblWMTDIS",
            "lblWallMartDisney": "lblWallMartDisney",
            "linAvgVolume": "linAvgVolume",
            "linPEDiff": "linPEDiff",
            "linePrice": "linePrice",
            "vbxWallMartDisney": "vbxWallMartDisney"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmComplex.add(hbox103994549623663, hbxRotateDevice, hbxPlatinumAcc, segRetail);
};

function frmComplexGlobals() {
    frmComplex = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmComplex,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmComplex",
        "needAppMenu": true,
        "onOrientationChange": p2kwiet1288931495668_frmComplex_WinPhone8_onOrientationChange_seq0,
        "postShow": p2kwiet1288931495668_frmComplex_postshow_seq0,
        "skin": "frm",
        "title": "Auto Resize"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "hbxPlatinumAcc", "hbxRotateDevice", "hbxTotal", "label103994549623664", "lblAsset", "lblComplex", "lblPlatinumAcc", "lblRotateDevice", "lblTotal", "lblValue", "segRetail", "vbxPlatinumAcc", "vbxTotal"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmComplex.info = {
        "kuid": "p2kwiet1288931495668"
    };
};