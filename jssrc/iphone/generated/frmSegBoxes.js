function addWidgetsfrmSegBoxes() {
    if (typeof initializevbox1288931495195 === 'function') initializevbox1288931495195();
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
        "viewConfig": {},
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmSegBoxes.add(segment2192735980061495);
};

function frmSegBoxesGlobals() {
    frmSegBoxes = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegBoxes,
        "bounces": true,
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
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "4e4e4eff",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "title",
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};