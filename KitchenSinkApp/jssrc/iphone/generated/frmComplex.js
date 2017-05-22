function addWidgetsfrmComplex() {
    var hbxRotateDevice = new kony.ui.Box({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbxRotateDevice.add(lblComplex);
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [0, 2, 0, 0],
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
        "margin": [4, 3, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [4, 1, 0, 3],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "rowTemplate": vbox974599865141,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {},
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
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmComplex.add(hbxRotateDevice, hbxPlatinumAcc, segRetail);
};

function frmComplexGlobals() {
    frmComplex = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmComplex,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmComplex",
        "needAppMenu": true,
        "onOrientationChange": p2kwiet974599865668_frmComplex_iPhone_onOrientationChange_seq0,
        "postShow": p2kwiet974599865668_frmComplex_postshow_seq0,
        "skin": "frm",
        "title": "Auto Resize"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmComplex.info = {
        "kuid": "p2kwiet974599865668"
    };
};