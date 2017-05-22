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
        "onRowClick": p2kwiet9745998651070_frmOptSeg_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox974599865159,
        "screenLevelWidget": false,
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
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmFormOptions.add(frmOptSeg);
};

function frmFormOptionsGlobals() {
    frmFormOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormOptions,
        "bounces": true,
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
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmFormOptions.info = {
        "kuid": "p2kwiet9745998651070"
    };
};