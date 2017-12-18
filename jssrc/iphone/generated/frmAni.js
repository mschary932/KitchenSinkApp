function addWidgetsfrmAni() {
    var segiPhone = new kony.ui.SegmentedUI2({
        "data": [{
            "lbliPhone": "Flip"
        }, {
            "lbliPhone": "Fade"
        }, {
            "lbliPhone": "MoveIn"
        }, {
            "lbliPhone": "Push"
        }, {
            "lbliPhone": "Reveal"
        }, {
            "lbliPhone": "Curl"
        }, {
            "lbliPhone": "TwoSplitHorizontalIn"
        }, {
            "lbliPhone": "TwoSplitVerticalIn"
        }, {
            "lbliPhone": "FourSplitIn"
        }, {
            "lbliPhone": "FourSplitRotateIn"
        }, {
            "lbliPhone": "TwoSplitHorizontalOut"
        }, {
            "lbliPhone": "TwoSplitVerticalOut"
        }, {
            "lbliPhone": "FourSplitOut"
        }, {
            "lbliPhone": "FourSplitRotateOut"
        }, {
            "lbliPhone": "SwitchLeft"
        }, {
            "lbliPhone": "SwitchRight"
        }, {
            "lbliPhone": "Cloth"
        }, {
            "lbliPhone": "FlipRight"
        }, {
            "lbliPhone": "FlipLeft"
        }, {
            "lbliPhone": "Door"
        }, {
            "lbliPhone": "RotateExchange"
        }, {
            "lbliPhone": "MoveInFromBottom"
        }, {
            "lbliPhone": "MoveInFromTop"
        }],
        "groupCells": false,
        "id": "segiPhone",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet128893149576_segiPhone_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495121,
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
            "lbliPhone": "lbliPhone"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
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
    frmAni.add(segiPhone);
};

function frmAniGlobals() {
    frmAni = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAni",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Transitions"
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
};