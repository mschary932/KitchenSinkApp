function addWidgetsfrmSegOnReachEnd() {
    var segRecords = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segRecords",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495335,
        "screenLevelWidget": true,
        "scrollingEvents": {
            "onReachingEnd": p2kwiet12889314954669_segRecords_onReachingEnd_seq0
        },
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
            "hbox121043302139632": "hbox121043302139632",
            "hbox121043302139633": "hbox121043302139633",
            "lbl1": "lbl1",
            "lbl2": "lbl2",
            "lbl3": "lbl3",
            "lbl4": "lbl4",
            "lbl5": "lbl5"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 0, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmSegOnReachEnd.add(segRecords);
};

function frmSegOnReachEndGlobals() {
    frmSegOnReachEnd = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegOnReachEnd,
        "enabledForIdleTimeout": false,
        "headers": [hbxHeadSearchORE],
        "id": "frmSegOnReachEnd",
        "needAppMenu": true,
        "skin": "frm",
        "title": "On reach end"
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