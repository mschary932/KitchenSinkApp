function addWidgetsfrmSegSecHdrDock() {
    var segSecHdrDock = new kony.ui.SegmentedUI2({
        "data": [
            [{
                    "label117989725237518": "Savings accts"
                },
                [{
                    "label118085056484607": "Savings account1",
                    "label118085056484608": "$490",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Savings account1",
                    "label118085056484608": "$490",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Savings account1",
                    "label118085056484608": "$490",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Savings account2",
                    "label118085056484608": "$490",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Savings account2",
                    "label118085056484608": "$490",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Savings account2",
                    "label118085056484608": "$490",
                    "label118085056484609": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Checking accts"
                },
                [{
                    "label118085056484607": "Checking account1",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Checking account1",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Checking account1",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Checking account2",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Checking account2",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Checking account2",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Credit card accts"
                },
                [{
                    "label118085056484607": "Titanium card",
                    "label118085056484608": "$500",
                    "label118085056484609": "$300"
                }, {
                    "label118085056484607": "Gold card",
                    "label118085056484608": "$500",
                    "label118085056484609": "$300"
                }, {
                    "label118085056484607": "Silver card",
                    "label118085056484608": "$500",
                    "label118085056484609": "$300"
                }]
            ],
            [{
                    "label117989725237518": "Prepaid cards"
                },
                [{
                    "label118085056484607": "Forex plus card",
                    "label118085056484608": "$200",
                    "label118085056484609": "$200"
                }, {
                    "label118085056484607": "Food plus card",
                    "label118085056484608": "$50000",
                    "label118085056484609": "$50000"
                }, {
                    "label118085056484607": "Money plus card",
                    "label118085056484608": "$200",
                    "label118085056484609": "$200"
                }, {
                    "label118085056484607": "Gift plus card",
                    "label118085056484608": "$200",
                    "label118085056484609": "$200"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segSecHdrDock",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495343,
        "screenLevelWidget": true,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "sectionHeaderTemplate": hbox117989725237513,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox117989725237513": "hbox117989725237513",
            "hbox118085056484606": "hbox118085056484606",
            "hdr": "hdr",
            "label117989725237518": "label117989725237518",
            "label118085056484607": "label118085056484607",
            "label118085056484608": "label118085056484608",
            "label118085056484609": "label118085056484609"
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
    }, {
        "dockSectionHeaders": false
    });
    frmSegSecHdrDock.add(segSecHdrDock);
};

function frmSegSecHdrDockGlobals() {
    frmSegSecHdrDock = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSecHdrDock,
        "enabledForIdleTimeout": false,
        "id": "frmSegSecHdrDock",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Section header docking"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};