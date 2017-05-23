function addWidgetsfrmAnimations() {
    var segiPadAni = new kony.ui.SegmentedUI2({
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
        "groupCells": true,
        "id": "segiPadAni",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314953460_segiPadAni_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495267,
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
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmAnimations.add(segiPadAni);
};

function frmAnimationsGlobals() {
    frmAnimations = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnimations,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAnimations",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Animations"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmAnimations.info = {
        "kuid": "p2kwiet12889314953460"
    };
};