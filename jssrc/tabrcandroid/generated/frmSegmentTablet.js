function addWidgetsfrmSegmentTablet() {
    var hbxSegmentOptions = new kony.ui.Box({
        "id": "hbxSegmentOptions",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
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
    var button118290614368754 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button118290614368754",
        "isVisible": true,
        "onClick": p2kwiet12889314954608_button118290614368754_onClick_seq0,
        "skin": "btnNormal",
        "text": "Views"
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
    var button118290614368755 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button118290614368755",
        "isVisible": true,
        "onClick": p2kwiet12889314954608_button118290614368755_onClick_seq0,
        "skin": "btnNormal",
        "text": "Other features"
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
    vbox192926642422365.add(button118290614368754, button118290614368755);
    hbxSegmentOptions.add(vbox192926642422365);
    var segTableView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234759": "b1.png",
            "label117989725234753": "Boys' Felix Sneakers",
            "label117989725234760": "Online Price:$10.00"
        }, {
            "image2117989725234759": "b2.png",
            "label117989725234753": "Boys DuPont F Sneaker",
            "label117989725234760": "Online Price:$15.00"
        }, {
            "image2117989725234759": "b3.png",
            "label117989725234753": "Women's Matte Slippers",
            "label117989725234760": "Online Price:$8.00"
        }, {
            "image2117989725234759": "b4.png",
            "label117989725234753": "Women's Buckle Boots",
            "label117989725234760": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segTableView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495295,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725234754": "hbox117989725234754",
            "image2117989725234759": "image2117989725234759",
            "label117989725234753": "label117989725234753",
            "label117989725234760": "label117989725234760"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segPageView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234776": "b1.png",
            "label117989725234774": "Boys' Felix Sneakers",
            "label117989725234777": "Online Price:$10.00"
        }, {
            "image2117989725234776": "b2.png",
            "label117989725234774": "Boys DuPont F Sneaker",
            "label117989725234777": "Online Price:$15.00"
        }, {
            "image2117989725234776": "b3.png",
            "label117989725234774": "Women's Matte Slippers",
            "label117989725234777": "Online Price:$8.00"
        }, {
            "image2117989725234776": "b4.png",
            "label117989725234774": "Women's Buckle Boots",
            "label117989725234777": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segPageView",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "page_control.png",
        "pageOnDotImage": "page_control_active.png",
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495297,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "hbox117989725234775": "hbox117989725234775",
            "image2117989725234776": "image2117989725234776",
            "label117989725234774": "label117989725234774",
            "label117989725234777": "label117989725234777"
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
    var segCoverFlowView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725233825": "b1.png",
            "label117989725233823": "Boys' Felix Sneakers",
            "label117989725233827": "Online Price:$10.00"
        }, {
            "image2117989725233825": "b2.png",
            "label117989725233823": "Boys DuPont F Sneaker",
            "label117989725233827": "Online Price:$15.00"
        }, {
            "image2117989725233825": "b3.png",
            "label117989725233823": "Women's Matte Slippers",
            "label117989725233827": "Online Price:$8.00"
        }, {
            "image2117989725233825": "b4.png",
            "label117989725233823": "Women's Buckle Boots ",
            "label117989725233827": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segCoverFlowView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495299,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725233824": "hbox117989725233824",
            "image2117989725233825": "image2117989725233825",
            "label117989725233823": "label117989725233823",
            "label117989725233827": "label117989725233827"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segStackView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725233886": "b1.png",
            "label117989725233883": "Boys' Felix Sneakers",
            "label117989725233885": "Online Price:$10.00"
        }, {
            "image2117989725233886": "b2.png",
            "label117989725233883": "Boys DuPont F Sneaker",
            "label117989725233885": "Online Price:$15.00"
        }, {
            "image2117989725233886": "b3.png",
            "label117989725233883": "Women's Matte Slippers",
            "label117989725233885": "Online Price:$8.00"
        }, {
            "image2117989725233886": "b4.png",
            "label117989725233883": "Women's Buckle Boots",
            "label117989725233885": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segStackView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495301,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725233884": "hbox117989725233884",
            "image2117989725233886": "image2117989725233886",
            "label117989725233883": "label117989725233883",
            "label117989725233885": "label117989725233885"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segLinearView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725233945": "b1.png",
            "label117989725233943": "Boys' Felix Sneakers",
            "label117989725233946": "Online Price:$10.00"
        }, {
            "image2117989725233945": "b2.png",
            "label117989725233943": "Boys DuPont F Sneaker",
            "label117989725233946": "Online Price:$15.00"
        }, {
            "image2117989725233945": "b3.png",
            "label117989725233943": "Women's Matte Slippers",
            "label117989725233946": "Online Price:$8.00"
        }, {
            "image2117989725233945": "b4.png",
            "label117989725233943": "Women's Buckle Boots",
            "label117989725233946": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segLinearView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495303,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725233944": "hbox117989725233944",
            "image2117989725233945": "image2117989725233945",
            "label117989725233943": "label117989725233943",
            "label117989725233946": "label117989725233946"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segRotatoryView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725233991": "b1.png"
        }, {
            "image2117989725233991": "b2.png"
        }, {
            "image2117989725233991": "b3.png"
        }, {
            "image2117989725233991": "b4.png"
        }],
        "groupCells": true,
        "id": "segRotatoryView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495305,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725233990": "hbox117989725233990",
            "image2117989725233991": "image2117989725233991"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segInvertedRotaryView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234127": "b1.png"
        }, {
            "image2117989725234127": "b2.png"
        }, {
            "image2117989725234127": "b3.png"
        }, {
            "image2117989725234127": "b4.png"
        }, {
            "image2117989725234127": "b5.png"
        }, {
            "image2117989725234127": "b6.png"
        }, {
            "image2117989725234127": "b7.png"
        }, {
            "image2117989725234127": "b1.png"
        }],
        "groupCells": true,
        "id": "segInvertedRotaryView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495307,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725234124": "hbox117989725234124",
            "image2117989725234127": "image2117989725234127"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "padding": [15, 2, 15, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segCylinderView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234369": "b1.png"
        }, {
            "image2117989725234369": "b2.png"
        }, {
            "image2117989725234369": "b3.png"
        }, {
            "image2117989725234369": "b4.png"
        }],
        "groupCells": true,
        "id": "segCylinderView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495309,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725234368": "hbox117989725234368",
            "image2117989725234369": "image2117989725234369"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segInvertedCylinderView = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234414": "b1.png"
        }, {
            "image2117989725234414": "b2.png"
        }, {
            "image2117989725234414": "b3.png"
        }, {
            "image2117989725234414": "b4.png"
        }],
        "groupCells": true,
        "id": "segInvertedCylinderView",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495311,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox117989725234411": "hbox117989725234411",
            "image2117989725234414": "image2117989725234414"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "padding": [15, 2, 15, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
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
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495313,
        "screenLevelWidget": false,
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
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495315,
        "screenLevelWidget": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var segMultiRowTemp = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segMultiRowTemp",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
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
    var segSecHdrTemplates = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segSecHdrTemplates",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495317,
        "screenLevelWidget": false,
        "scrollingEvents": {},
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
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
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
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495319,
        "screenLevelWidget": false,
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
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
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
    }, {
        "textCopyable": false
    });
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
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495321,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "label118085056485802": "label118085056485802"
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
        "dockSectionHeaders": false
    });
    var segGroupCellsWinTab = new kony.ui.SegmentedUI2({
        "data": [{
            "label1930135169584196": "Savings accounts"
        }, {
            "label1930135169584196": "Checking accounts"
        }, {
            "label1930135169584196": "Credit card accounts"
        }],
        "groupCells": true,
        "id": "segGroupCellsWinTab",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495323,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "label1930135169584196": "label1930135169584196"
        },
        "widgetSkin": "segWidgetSknWithBorder"
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
        "dockSectionHeaders": false
    });
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
    }, {
        "textCopyable": false
    });
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
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495325,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "label118085056485822": "label118085056485822"
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
    var segWdtGroupCellsWinTab = new kony.ui.SegmentedUI2({
        "data": [{
            "label1930135169590156": "Savings accounts"
        }, {
            "label1930135169590156": "Checking accounts"
        }, {
            "label1930135169590156": "Credit card accounts"
        }],
        "groupCells": false,
        "id": "segWdtGroupCellsWinTab",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495327,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "label1930135169590156": "label1930135169590156"
        },
        "widgetSkin": "segWidgetSknWithBorder"
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
    var btnMulSelect = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnMulSelect",
        "isVisible": true,
        "onClick": p2kwiet12889314954608_btnMulSelect_onClick_seq0,
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
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495329,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "hbox118085056485903": "hbox118085056485903",
            "lblBankAcct": "lblBankAcct",
            "lblCreditLmt": "lblCreditLmt",
            "lblWidrawLmt": "lblWidrawLmt"
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
    var btnEditOrDone = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnEditOrDone",
        "isVisible": true,
        "onClick": p2kwiet12889314954608_btnEditOrDone_onClick_seq0,
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
    }, {
        "pressedSkin": "btnEdit"
    });
    var segIconEditStyle = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segIconEditStyle",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495331,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
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
            "cname": "cname"
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
    frmSegmentTablet.add(hbxSegmentOptions, segTableView, segPageView, segCoverFlowView, segStackView, segLinearView, segRotatoryView, segInvertedRotaryView, segCylinderView, segInvertedCylinderView, segWithSections, segRowAlternateSkin, segMultiRowTemp, segSecHdrTemplates, segPreferredWidth, lblSegWithGrpCels, segGroupCells, segGroupCellsWinTab, lblSegWidoutGrpCel, segWidoutGrpCells, segWdtGroupCellsWinTab, btnMulSelect, segMultiSelectData, btnEditOrDone, segIconEditStyle);
};

function frmSegmentTabletGlobals() {
    frmSegmentTablet = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentTablet,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentTablet",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmSegmentTablet.info = {
        "kuid": "p2kwiet12889314954608"
    };
};