function addWidgetsfrmFormOptions() {
    var hboxformOptions123 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hboxformOptions123",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var labelFormOptions123 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelFormOptions123",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Form"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxformOptions123.add(labelFormOptions123);
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
        "enableCache": false,
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
    }, {});
    frmFormOptions.add(hboxformOptions123, frmOptSeg);
};

function frmFormOptionsGlobals() {
    frmFormOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormOptions,
        "enableCache": false,
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["frmOptSeg", "hboxformOptions123", "labelFormOptions123"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmFormOptions.info = {
        "kuid": "p2kwiet12889314951070"
    };
};