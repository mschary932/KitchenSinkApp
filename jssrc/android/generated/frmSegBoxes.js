function addWidgetsfrmSegBoxes() {
    var segment2192735980061495 = new kony.ui.SegmentedUI2({
        "data": [
            [{
                    "label117989725237518": "Savings accnts"
                },
                [{
                    "label192735980061501": "Savings1",
                    "label192735980061502": "$400",
                    "label192735980061503": "NA"
                }, {
                    "label192735980061501": "Savings223",
                    "label192735980061502": "$600",
                    "label192735980061503": "NA"
                }, {
                    "label192735980061501": "Savings32344",
                    "label192735980061502": "$6400",
                    "label192735980061503": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Checking accnt"
                },
                [{
                    "label192735980061501": "Checking1",
                    "label192735980061502": "NA",
                    "label192735980061503": "$400"
                }, {
                    "label192735980061501": "Checking2",
                    "label192735980061502": "NA",
                    "label192735980061503": "$7700"
                }, {
                    "label192735980061501": "Checking3",
                    "label192735980061502": "NA",
                    "label192735980061503": "$100"
                }]
            ],
            [{
                    "label117989725237518": "Credit card accnts"
                },
                [{
                    "label192735980061501": "Titanium card",
                    "label192735980061502": "$200",
                    "label192735980061503": "$400"
                }, {
                    "label192735980061501": "Gold card",
                    "label192735980061502": "$200",
                    "label192735980061503": "$400"
                }, {
                    "label192735980061501": "Silver card",
                    "label192735980061502": "$200",
                    "label192735980061503": "$400"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segment2192735980061495",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495195,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "sectionHeaderTemplate": hbox117989725237513,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e9e9e900",
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
            "hbox192735980061496": "hbox192735980061496",
            "hbox192735980061498": "hbox192735980061498",
            "hbox192735980061500": "hbox192735980061500",
            "hdr": "hdr",
            "label117989725237518": "label117989725237518",
            "label192735980061501": "label192735980061501",
            "label192735980061502": "label192735980061502",
            "label192735980061503": "label192735980061503",
            "vbox192735980061497": "vbox192735980061497",
            "vbox192735980061499": "vbox192735980061499"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmSegBoxes.add(segment2192735980061495);
};

function frmSegBoxesGlobals() {
    frmSegBoxes = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegBoxes,
        "enabledForIdleTimeout": false,
        "id": "frmSegBoxes",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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