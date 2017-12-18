function addWidgetsfrmSegScreenLevel() {
    var segiPhone = new kony.ui.SegmentedUI2({
        "data": [{
            "lbliPhone": "Dictionary view"
        }, {
            "lbliPhone": "Pull to refresh"
        }, {
            "lbliPhone": "On reach end"
        }, {
            "lbliPhone": "Docking section headers"
        }, {
            "lbliPhone": "Search by"
        }],
        "groupCells": true,
        "id": "segiPhone",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314954683_segiPhone_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495339,
        "screenLevelWidget": true,
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
        "margin": [1, 4, 1, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmSegScreenLevel.add(segiPhone);
};

function frmSegScreenLevelGlobals() {
    frmSegScreenLevel = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegScreenLevel,
        "enabledForIdleTimeout": false,
        "id": "frmSegScreenLevel",
        "needAppMenu": true,
        "postShow": p2kwiet12889314954683_frmSegScreenLevel_postshow_seq0,
        "skin": "frm",
        "title": "Screen level segment features"
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