function addWidgetsfrmSegSearchView() {
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
    }, {});
    frmSegSearchView.add(segmentSearchBy);
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "label103994549623664", "segmentSearchBy"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmSegSearchView.info = {
        "kuid": "p2kwiet12889314954697"
    };
};