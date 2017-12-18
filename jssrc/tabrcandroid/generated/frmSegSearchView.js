function addWidgetsfrmSegSearchView() {
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Segment"
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
    }, {
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var segmentSearchBy = new kony.ui.SegmentedUI2({
        "data": [{
            "labelsby1": "Flight",
            "labelsby2": "1011",
            "labelsby3": "Airlines",
            "labelsby4": "Fly Emirates"
        }, {
            "labelsby1": "Flight",
            "labelsby2": "1016",
            "labelsby3": "Airlines",
            "labelsby4": "Jetblue"
        }, {
            "labelsby1": "Flight",
            "labelsby2": "1066",
            "labelsby3": "Airlines",
            "labelsby4": "SowthWest"
        }, {
            "labelsby1": "Flight",
            "labelsby2": "1061",
            "labelsby3": "Airlines",
            "labelsby4": "United"
        }, {
            "labelsby1": "Flight",
            "labelsby2": "2166",
            "labelsby3": "Airlines",
            "labelsby4": "SpiceJet"
        }, {
            "labelsby1": "Flight",
            "labelsby2": "2163",
            "labelsby3": "Airlines",
            "labelsby4": "AirIndia"
        }, {
            "labelsby1": "Flight",
            "labelsby2": "2167",
            "labelsby3": "Airlines",
            "labelsby4": "KingFisher"
        }],
        "groupCells": false,
        "id": "segmentSearchBy",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495341,
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
            "hboxSearchBy": "hboxSearchBy",
            "hboxSearchBy1": "hboxSearchBy1",
            "labelsby1": "labelsby1",
            "labelsby2": "labelsby2",
            "labelsby3": "labelsby3",
            "labelsby4": "labelsby4"
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
    frmSegSearchView.add(hbox103994549623663, segmentSearchBy);
};

function frmSegSearchViewGlobals() {
    frmSegSearchView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSearchView,
        "enabledForIdleTimeout": false,
        "id": "frmSegSearchView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Search by name of the airlines"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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