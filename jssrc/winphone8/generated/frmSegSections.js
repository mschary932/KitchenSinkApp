function addWidgetsfrmSegSections() {
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
        "text": "Segment sections"
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
        "enableCache": false,
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
    frmSegSections.add(hbox103994549623663, segment2117989725237554);
};

function frmSegSectionsGlobals() {
    frmSegSections = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSections,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSegSections",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "label103994549623664", "lblAltRow", "lblSegSection1", "segAltRow", "segment2117989725237554"],
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
    frmSegSections.info = {
        "kuid": "p2kwiet12889314952771"
    };
};