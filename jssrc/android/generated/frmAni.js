function addWidgetsfrmAni() {
    var segiPhone = new kony.ui.SegmentedUI2({
        "data": [{
            "lbliPhone": "Flip"
        }, {
            "lbliPhone": "Fade"
        }, {
            "lbliPhone": "MoveIn"
        }, {
            "lbliPhone": "Push"
        }, {
            "lbliPhone": "Reveal"
        }, {
            "lbliPhone": "Curl"
        }, {
            "lbliPhone": "TwoSplitHorizontalIn"
        }, {
            "lbliPhone": "TwoSplitVerticalIn"
        }, {
            "lbliPhone": "FourSplitIn"
        }, {
            "lbliPhone": "FourSplitRotateIn"
        }, {
            "lbliPhone": "TwoSplitHorizontalOut"
        }, {
            "lbliPhone": "TwoSplitVerticalOut"
        }, {
            "lbliPhone": "FourSplitOut"
        }, {
            "lbliPhone": "FourSplitRotateOut"
        }, {
            "lbliPhone": "SwitchLeft"
        }, {
            "lbliPhone": "SwitchRight"
        }, {
            "lbliPhone": "Cloth"
        }, {
            "lbliPhone": "FlipRight"
        }, {
            "lbliPhone": "FlipLeft"
        }, {
            "lbliPhone": "Door"
        }, {
            "lbliPhone": "RotateExchange"
        }, {
            "lbliPhone": "MoveInFromBottom"
        }, {
            "lbliPhone": "MoveInFromTop"
        }],
        "groupCells": false,
        "id": "segiPhone",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet128893149576_segiPhone_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495121,
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
            "lbliPhone": "lbliPhone"
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
    frmAni.add(segiPhone);
};

function frmAniGlobals() {
    frmAni = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni,
        "enabledForIdleTimeout": false,
        "id": "frmAni",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Transitions"
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