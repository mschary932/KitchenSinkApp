function addWidgetsfrmNList() {
    var segFirst = new kony.ui.SegmentedUI2({
        "data": [{
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox1"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox2"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox3"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox4"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox4"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox6"
        }],
        "groupCells": false,
        "id": "segFirst",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet9745998651835_segFirst_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox974599865179,
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
            "hbox192822373931789": "hbox192822373931789",
            "image2192822373931790": "image2192822373931790",
            "lblFirst": "lblFirst"
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
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmNList.add(segFirst);
};

function frmNListGlobals() {
    frmNList = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNList,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmNList",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Nested List"
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
    frmNList.info = {
        "kuid": "p2kwiet9745998651835"
    };
};