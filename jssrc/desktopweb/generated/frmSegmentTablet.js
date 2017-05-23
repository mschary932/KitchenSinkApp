function addWidgetsfrmSegmentTablet() {
    var hbxSegmentOptions = new kony.ui.Box({
        "id": "hbxSegmentOptions",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox68508043456325 = new kony.ui.Box({
        "id": "hbox68508043456325",
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
    var button118290614368754 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button118290614368754",
        "isVisible": true,
        "onClick": p2kwiet12889314955650_button118290614368754_onClick_seq0,
        "skin": "btnNormal",
        "text": "Views"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button118290614368755 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button118290614368755",
        "isVisible": true,
        "onClick": p2kwiet12889314955650_button118290614368755_onClick_seq0,
        "skin": "btnNormal",
        "text": "Other features"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox68508043456325.add(button118290614368754, button118290614368755);
    vbox192926642422365.add(hbox68508043456325);
    hbxSegmentOptions.add(vbox192926642422365);
    var segWithSections = new kony.ui.SegmentedUI2({
        "data": [
            [{
                    "label117989725237518": "Savings accts"
                },
                [{
                    "label118085056484607": "Savings account1",
                    "label118085056484608": "$400",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Savings account1",
                    "label118085056484608": "$400",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Savings account1",
                    "label118085056484608": "$400",
                    "label118085056484609": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Checking accts"
                },
                [{
                    "label118085056484607": "Checking accnt1",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Checking accnt1",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }, {
                    "label118085056484607": "Checking accnt1",
                    "label118085056484608": "$500",
                    "label118085056484609": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Credit card accts"
                },
                [{
                    "label118085056484607": "Titanium card",
                    "label118085056484608": "$600",
                    "label118085056484609": "$500"
                }, {
                    "label118085056484607": "Gold card",
                    "label118085056484608": "$600",
                    "label118085056484609": "$500"
                }, {
                    "label118085056484607": "Silver card",
                    "label118085056484608": "$600",
                    "label118085056484609": "$500"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segWithSections",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495391,
        "screenLevelWidget": false,
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
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segRowAlternateSkin = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "rowFocusSkin",
        "data": [
            [{
                    "label117989725237518": "Savings accts"
                },
                [{
                    "label118085056485032": "Savings account1",
                    "label118085056485043": "$400",
                    "label118085056485054": "NA"
                }, {
                    "label118085056485032": "Savings account1",
                    "label118085056485043": "$400",
                    "label118085056485054": "NA"
                }, {
                    "label118085056485032": "Savings account1",
                    "label118085056485043": "$400",
                    "label118085056485054": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Checking accts"
                },
                [{
                    "label118085056485032": "Checking accnt1",
                    "label118085056485043": "$500",
                    "label118085056485054": "NA"
                }, {
                    "label118085056485032": "Checking accnt1",
                    "label118085056485043": "$500",
                    "label118085056485054": "NA"
                }, {
                    "label118085056485032": "Checking accnt1",
                    "label118085056485043": "$500",
                    "label118085056485054": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Credit card accts"
                },
                [{
                    "label118085056485032": "Titanium card",
                    "label118085056485043": "$400",
                    "label118085056485054": "$600"
                }, {
                    "label118085056485032": "Gold card",
                    "label118085056485043": "$400",
                    "label118085056485054": "$600"
                }, {
                    "label118085056485032": "Silver card",
                    "label118085056485043": "$400",
                    "label118085056485054": "$600"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segRowAlternateSkin",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495393,
        "screenLevelWidget": false,
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
            "hbox118085056485011": "hbox118085056485011",
            "hdr": "hdr",
            "label117989725237518": "label117989725237518",
            "label118085056485032": "label118085056485032",
            "label118085056485043": "label118085056485043",
            "label118085056485054": "label118085056485054"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segMultiRowTemp = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segMultiRowTemp",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segSecHdrTemplates = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segSecHdrTemplates",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495395,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "imageIdentifier": "imgChk",
            "selectedStateImage": "checkboxgreen.png",
            "unselectedStateImage": "checkboxwhite.png"
        },
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox118085056485306": "hbox118085056485306",
            "imgChk": "imgChk",
            "lblBnkAcctName": "lblBnkAcctName",
            "lblCreditLimit": "lblCreditLimit",
            "lblWidDrwLimit": "lblWidDrwLimit"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segPreferredWidth = new kony.ui.SegmentedUI2({
        "data": [
            [{
                    "label117989725237518": "Savings accnts"
                },
                [{
                    "label192735980061501": "Savings account1",
                    "label192735980061502": "$400",
                    "label192735980061503": "NA"
                }, {
                    "label192735980061501": "Savings account1",
                    "label192735980061502": "$400",
                    "label192735980061503": "NA"
                }, {
                    "label192735980061501": "Savings account1",
                    "label192735980061502": "$400",
                    "label192735980061503": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Checking accnt"
                },
                [{
                    "label192735980061501": "Checking account1",
                    "label192735980061502": "$500",
                    "label192735980061503": "NA"
                }, {
                    "label192735980061501": "Checking account2",
                    "label192735980061502": "$500",
                    "label192735980061503": "NA"
                }, {
                    "label192735980061501": "Checking account3",
                    "label192735980061502": "$500",
                    "label192735980061503": "NA"
                }]
            ],
            [{
                    "label117989725237518": "Credit card accnts"
                },
                [{
                    "label192735980061501": "Titanium card",
                    "label192735980061502": "$600",
                    "label192735980061503": "$609"
                }, {
                    "label192735980061501": "Gold card",
                    "label192735980061502": "$609",
                    "label192735980061503": "$609"
                }, {
                    "label192735980061501": "Silver card",
                    "label192735980061502": "$608",
                    "label192735980061503": "$609"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segPreferredWidth",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495397,
        "screenLevelWidget": false,
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
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblSegWithGrpCels = new kony.ui.Label({
        "id": "lblSegWithGrpCels",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Segment with group cells"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var segGroupCells = new kony.ui.SegmentedUI2({
        "data": [{
            "label118085056485802": "Savings accounts"
        }, {
            "label118085056485802": "Checking accounts"
        }, {
            "label118085056485802": "Credit card accounts"
        }],
        "groupCells": true,
        "id": "segGroupCells",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495399,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "label118085056485802": "label118085056485802"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblSegWidoutGrpCel = new kony.ui.Label({
        "id": "lblSegWidoutGrpCel",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Segment without group cells"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var segWidoutGrpCells = new kony.ui.SegmentedUI2({
        "data": [{
            "label118085056485822": "Savings accounts"
        }, {
            "label118085056485822": "Checking accounts"
        }, {
            "label118085056485822": "Credit card accounts"
        }],
        "groupCells": false,
        "id": "segWidoutGrpCells",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495401,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "label118085056485822": "label118085056485822"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnMulSelect = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnMulSelect",
        "isVisible": true,
        "onClick": p2kwiet12889314955650_btnMulSelect_onClick_seq0,
        "skin": "btnNormal",
        "text": "Click here to get the selected data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var segMultiSelectData = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segMultiSelectData",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495403,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox118085056485903": "hbox118085056485903",
            "lblBankAcct": "lblBankAcct",
            "lblCreditLmt": "lblCreditLmt",
            "lblWidrawLmt": "lblWidrawLmt"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnEditOrDone = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnEditOrDone",
        "isVisible": true,
        "onClick": p2kwiet12889314955650_btnEditOrDone_onClick_seq0,
        "skin": "btnNormal",
        "text": "Edit"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmSegmentTablet.add(hbxSegmentOptions, segWithSections, segRowAlternateSkin, segMultiRowTemp, segSecHdrTemplates, segPreferredWidth, lblSegWithGrpCels, segGroupCells, lblSegWidoutGrpCel, segWidoutGrpCells, btnMulSelect, segMultiSelectData, btnEditOrDone);
};

function frmSegmentTabletGlobals() {
    frmSegmentTablet = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentTablet,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentTablet",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmSegmentTablet.info = {
        "kuid": "p2kwiet12889314955650"
    };
};