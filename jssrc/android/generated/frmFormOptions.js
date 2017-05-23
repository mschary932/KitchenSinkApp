function addWidgetsfrmFormOptions() {
    var frmOptSeg = new kony.ui.SegmentedUI2({
        "data": [{
            "lblFormOptions": "Form with widgets"
        }, {
            "lblFormOptions": "Form with image background"
        }, {
            "lblFormOptions": "Form with Header & Footer"
        }, {
            "lblFormOptions": "Form with Titlebar skin"
        }, {
            "lblFormOptions": "ShowLoadingScreen(center)"
        }, {
            "lblFormOptions": "ShowLoadingScreen(full screen)"
        }, {
            "lblFormOptions": "Gestures"
        }, {
            "lblFormOptions": "Auto resizing of widgets on rotation"
        }, {
            "lblFormOptions": "Popup anchoring from bottom"
        }],
        "groupCells": false,
        "id": "frmOptSeg",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314951070_frmOptSeg_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495159,
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
            "lblFormOptions": "lblFormOptions"
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
        "dockSectionHeaders": false
    });
    frmFormOptions.add(frmOptSeg);
};

function frmFormOptionsGlobals() {
    frmFormOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormOptions,
        "enabledForIdleTimeout": false,
        "id": "frmFormOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Form"
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
    frmFormOptions.info = {
        "kuid": "p2kwiet12889314951070"
    };
};