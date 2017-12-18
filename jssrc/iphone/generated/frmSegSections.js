function addWidgetsfrmSegSections() {
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
        "viewConfig": {},
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
        "margin": [0, 0, 0, 0],
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
    var lblAltRow = new kony.ui.Label({
        "id": "lblAltRow",
        "isVisible": true,
        "skin": "lblSub",
        "text": "SegmentedUI with Alternate row skin"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 4, 4, 4],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "viewConfig": {},
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
        "margin": [0, 0, 0, 0],
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
    frmSegSections.add(segment2117989725237554, lblAltRow, segAltRow);
};

function frmSegSectionsGlobals() {
    frmSegSections = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSections,
        "bounces": true,
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
};