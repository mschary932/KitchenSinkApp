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
        "rowTemplate": vbox974599865341,
        "screenLevelWidget": true,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {},
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
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchBy": "labelsby4",
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmSegSearchView.add(segmentSearchBy);
};

function frmSegSearchViewGlobals() {
    frmSegSearchView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSearchView,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmSegSearchView.info = {
        "kuid": "p2kwiet9745998654697"
    };
};