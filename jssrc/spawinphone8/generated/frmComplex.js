function addWidgetsfrmComplex() {
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
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Auto Resize"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbox103994549623663.add(label103994549623664);
    var hbxRotateDevice = new kony.ui.Box({
        "id": "hbxRotateDevice",
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
    var lblComplex = new kony.ui.Label({
        "id": "lblComplex",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Please rotate the device to observe Landscape mode"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbxRotateDevice.add(lblComplex);
    var lblRotateDevice = new kony.ui.Label({
        "id": "lblRotateDevice",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Please rotate the device to observe Other mode"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var hbxPlatinumAcc = new kony.ui.Box({
        "id": "hbxPlatinumAcc",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxPlatinumAcc = new kony.ui.Box({
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
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false
    });
    var hbxTotal = new kony.ui.Box({
        "id": "hbxTotal",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxTop"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxTotal = new kony.ui.Box({
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
        "id": "lblTotal",
        "isVisible": true,
        "skin": "lblBold",
        "text": "Total"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false
    });
    var lblAsset = new kony.ui.Label({
        "id": "lblAsset",
        "isVisible": true,
        "skin": "lblBold",
        "text": "Asset Value"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false
    });
    vbxTotal.add(lblTotal, lblAsset);
    var lblValue = new kony.ui.Label({
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
    }, {
        "renderAsAnchor": false
    });
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
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmComplex.add(hbox103994549623663, hbxRotateDevice, lblRotateDevice, hbxPlatinumAcc, segRetail);
};

function frmComplexGlobals() {
    frmComplex = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmComplex,
        "enabledForIdleTimeout": false,
        "id": "frmComplex",
        "needAppMenu": true,
        "postShow": p2kwiet1288931495668_frmComplex_postshow_seq0,
        "skin": "frm",
        "title": "Auto Resize"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmComplex.info = {
        "kuid": "p2kwiet1288931495668"
    };
};