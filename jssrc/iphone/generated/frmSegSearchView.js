function addWidgetsfrmSegSearchView() {
    if (typeof initializevbox1288931495237 === 'function') initializevbox1288931495237();
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
        }],
        "groupCells": false,
        "id": "segmentSearchBy",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495237,
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": true,
        "indicator": constants.SEGUI_ROW_SELECT,
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
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
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "4e4e4eff",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "title",
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};