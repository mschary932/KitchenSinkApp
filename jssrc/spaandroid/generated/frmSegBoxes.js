function addWidgetsfrmSegBoxes() {
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
        "text": "Preferred width"
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegBoxes.add(hbox103994549623663, segment2192735980061495);
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
    frmSegBoxes.info = {
        "kuid": "p2kwiet12889314952453"
    };
};