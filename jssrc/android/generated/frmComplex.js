function addWidgetsfrmComplex() {
    var hbox121043302135574 = new kony.ui.Box({
        "id": "hbox121043302135574",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    var lblComplex = new kony.ui.Label({
        "id": "lblComplex",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Please rotate the device to observe Landscape mode"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [6, 4, 6, 0],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox121043302135574.add(lblComplex);
    var hbox121043302135328 = new kony.ui.Box({
        "id": "hbox121043302135328",
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
    var vbox121043302135330 = new kony.ui.Box({
        "id": "vbox121043302135330",
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
    var label121043302135331 = new kony.ui.Label({
        "id": "label121043302135331",
        "isVisible": true,
        "skin": "lblMainRed",
        "text": "Platinum Account  PA12345"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var hbox121043302135332 = new kony.ui.Box({
        "id": "hbox121043302135332",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
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
    var vbox121043302135333 = new kony.ui.Box({
        "id": "vbox121043302135333",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "vBoxTrans"
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
    var label121043302135335 = new kony.ui.Label({
        "id": "label121043302135335",
        "isVisible": true,
        "skin": "lblBold",
        "text": "Total"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 3, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    var label121043302135336 = new kony.ui.Label({
        "id": "label121043302135336",
        "isVisible": true,
        "skin": "lblBold",
        "text": "Asset Value"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 1, 0, 3],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    vbox121043302135333.add(label121043302135335, label121043302135336);
    var label121043302135334 = new kony.ui.Label({
        "id": "label121043302135334",
        "isVisible": true,
        "skin": "lblBold",
        "text": "$ 3,244"
    }, {
        "containerWeight": 31,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 6, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    hbox121043302135332.add(vbox121043302135333, label121043302135334);
    vbox121043302135330.add(label121043302135331, hbox121043302135332);
    hbox121043302135328.add(vbox121043302135330);
    var segment2121043302135337 = new kony.ui.SegmentedUI2({
        "data": [{
            "label121043302135341": "Wal-Mart Stores Inc.",
            "label121043302135342": "WMT: NYSE ",
            "label121043302135344": "Difference ",
            "label121043302135345": "Value",
            "label121043302135347": "Price",
            "label121043302135348": "73.55",
            "label121043302135349": "0.00 %",
            "label121043302135417": "Avg Volume",
            "label121043302135419": "5,958,426",
            "label121043302135421": "0.0002 %",
            "label121043302135441": "P/E Trailing",
            "label121043302135443": "15.47x",
            "label121043302135445": "1.02 %",
            "label121043302135481": "Market Cap",
            "label121043302135485": "248.9 B",
            "label121043302135621": "                              "
        }, {
            "label121043302135341": "Disney Walt CO Com",
            "label121043302135342": "DIS: NYSE ",
            "label121043302135344": "Difference ",
            "label121043302135345": "Value",
            "label121043302135347": "Price",
            "label121043302135348": "50.79",
            "label121043302135349": "0.00 %",
            "label121043302135417": "Avg Volume",
            "label121043302135419": "7,745,441",
            "label121043302135421": "0.0001 %",
            "label121043302135441": "P/E Trailing",
            "label121043302135443": "16.42x",
            "label121043302135445": "0.92 %",
            "label121043302135481": "Market Cap",
            "label121043302135485": "91.1 B",
            "label121043302135621": "                              "
        }],
        "groupCells": false,
        "id": "segment2121043302135337",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495143,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox121043302135338": "hbox121043302135338",
            "hbox121043302135343": "hbox121043302135343",
            "hbox121043302135346": "hbox121043302135346",
            "hbox121043302135415": "hbox121043302135415",
            "hbox121043302135439": "hbox121043302135439",
            "hbox121043302135479": "hbox121043302135479",
            "label121043302135341": "label121043302135341",
            "label121043302135342": "label121043302135342",
            "label121043302135344": "label121043302135344",
            "label121043302135345": "label121043302135345",
            "label121043302135347": "label121043302135347",
            "label121043302135348": "label121043302135348",
            "label121043302135349": "label121043302135349",
            "label121043302135417": "label121043302135417",
            "label121043302135419": "label121043302135419",
            "label121043302135421": "label121043302135421",
            "label121043302135441": "label121043302135441",
            "label121043302135443": "label121043302135443",
            "label121043302135445": "label121043302135445",
            "label121043302135481": "label121043302135481",
            "label121043302135485": "label121043302135485",
            "label121043302135621": "label121043302135621",
            "line121043302135630": "line121043302135630",
            "line121043302135631": "line121043302135631",
            "line121043302135632": "line121043302135632",
            "vbox121043302135339": "vbox121043302135339"
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
    }, {
        "dockSectionHeaders": false
    });
    frmComplex.add(hbox121043302135574, hbox121043302135328, segment2121043302135337);
};

function frmComplexGlobals() {
    frmComplex = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmComplex,
        "enabledForIdleTimeout": false,
        "id": "frmComplex",
        "needAppMenu": true,
        "onOrientationChange": p2kwiet1288931495710_frmComplex_Android_onOrientationChange_seq0,
        "skin": "frm",
        "title": "Auto Resize"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};