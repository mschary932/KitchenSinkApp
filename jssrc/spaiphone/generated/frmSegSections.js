function addWidgetsfrmSegSections() {
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
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Segment sections"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var lblSegSection1 = new kony.ui.Label({
        "id": "lblSegSection1",
        "isVisible": true,
        "skin": "lblSub",
        "text": "SegmentedUI with row focus skin"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var segment2117989725237554 = new kony.ui.SegmentedUI2({
        "data": [
            [{
                    "label117989725237518": "Savings accts"
                },
                [{
                    "label117989725237557": "Savings 1",
                    "label117989725237558": "$400",
                    "label117989725237559": "NA"
                }, {
                    "label117989725237557": "Savings 1",
                    "label117989725237558": "$400",
                    "label117989725237559": "NA"
                }, {
                    "label117989725237557": "Savings 1",
                    "label117989725237558": "$500",
                    "label117989725237559": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Checking accts"
                },
                [{
                    "label117989725237557": "Checking 1",
                    "label117989725237558": "NA",
                    "label117989725237559": "$400"
                }, {
                    "label117989725237557": "Checking 1",
                    "label117989725237558": "NA",
                    "label117989725237559": "$400"
                }, {
                    "label117989725237557": "Checking 1",
                    "label117989725237558": "NA",
                    "label117989725237559": "$500"
                }]
            ],
            [{
                    "label117989725237518": "Credit card accts"
                },
                [{
                    "label117989725237557": "Titanium Card",
                    "label117989725237558": "$200",
                    "label117989725237559": "$400"
                }, {
                    "label117989725237557": "Gold Card",
                    "label117989725237558": "$200",
                    "label117989725237559": "$400"
                }, {
                    "label117989725237557": "Silver Card",
                    "label117989725237558": "$200",
                    "label117989725237559": "$500"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segment2117989725237554",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495239,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "sectionHeaderTemplate": hbox117989725237513,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox117989725237513": "hbox117989725237513",
            "hbox117989725237556": "hbox117989725237556",
            "hdr": "hdr",
            "label117989725237518": "label117989725237518",
            "label117989725237557": "label117989725237557",
            "label117989725237558": "label117989725237558",
            "label117989725237559": "label117989725237559"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblAltRow = new kony.ui.Label({
        "id": "lblAltRow",
        "isVisible": true,
        "skin": "lblSub",
        "text": "SegmentedUI with Alternate row skin"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var segAltRow = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "segrowfocus",
        "data": [
            [{
                    "label117989725237518": "Savings accts"
                },
                [{
                    "label1041822331116694": "Savings 1",
                    "label1041822331116696": "$400",
                    "label1041822331116698": "NA"
                }, {
                    "label1041822331116694": "Savings 2",
                    "label1041822331116696": "$400",
                    "label1041822331116698": "NA"
                }, {
                    "label1041822331116694": "Savings 3",
                    "label1041822331116696": "$500",
                    "label1041822331116698": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Checking accts"
                },
                [{
                    "label1041822331116694": "Checking 1",
                    "label1041822331116696": "NA",
                    "label1041822331116698": "$400"
                }, {
                    "label1041822331116694": "Checking 1",
                    "label1041822331116696": "NA",
                    "label1041822331116698": "$400"
                }, {
                    "label1041822331116694": "Checking 1",
                    "label1041822331116696": "NA",
                    "label1041822331116698": "$400"
                }]
            ],
            [{
                    "label117989725237518": "Credit card accts"
                },
                [{
                    "label1041822331116694": "Titanium Card ",
                    "label1041822331116696": "$200",
                    "label1041822331116698": "$400"
                }, {
                    "label1041822331116694": "Gold Card",
                    "label1041822331116696": "$200",
                    "label1041822331116698": "$400"
                }, {
                    "label1041822331116694": "Silver Card",
                    "label1041822331116696": "$200",
                    "label1041822331116698": "$400"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segAltRow",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495241,
        "screenLevelWidget": true,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "sectionHeaderTemplate": hbox117989725237513,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox1041822331116692": "hbox1041822331116692",
            "hbox117989725237513": "hbox117989725237513",
            "hdr": "hdr",
            "label1041822331116694": "label1041822331116694",
            "label1041822331116696": "label1041822331116696",
            "label1041822331116698": "label1041822331116698",
            "label117989725237518": "label117989725237518"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegSections.add(hbox103994549623663, lblSegSection1, segment2117989725237554, lblAltRow, segAltRow);
};

function frmSegSectionsGlobals() {
    frmSegSections = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSections,
        "enabledForIdleTimeout": false,
        "id": "frmSegSections",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
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
    frmSegSections.info = {
        "kuid": "p2kwiet12889314952771"
    };
};