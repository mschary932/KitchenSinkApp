function addWidgetsfrmAniAnd() {
    var segAndroid = new kony.ui.SegmentedUI2({
        "data": [{
            "lblAndroid": "bottom-top"
        }, {
            "lblAndroid": "from left"
        }, {
            "lblAndroid": "from right"
        }, {
            "lblAndroid": "to right"
        }, {
            "lblAndroid": "to left"
        }, {
            "lblAndroid": "from center"
        }, {
            "lblAndroid": "topright-bottom"
        }, {
            "lblAndroid": "bottomleft-top"
        }, {
            "lblAndroid": "bottom-top style1"
        }],
        "groupCells": false,
        "id": "segAndroid",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet1288931495115_segAndroid_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495123,
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
            "lblAndroid": "lblAndroid"
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
    frmAniAnd.add(segAndroid);
};

function frmAniAndGlobals() {
    frmAniAnd = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniAnd,
        "enabledForIdleTimeout": false,
        "id": "frmAniAnd",
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