function addWidgetsfrmLstItems() {
    var segFirst = new kony.ui.SegmentedUI2({
        "data": [{
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem1"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem2"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem3"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem4"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem5"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem6"
        }],
        "groupCells": false,
        "id": "segFirst",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495177,
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
            "hbox192822373931793": "hbox192822373931793",
            "image2192822373931794": "image2192822373931794",
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
    frmLstItems.add(segFirst);
};

function frmLstItemsGlobals() {
    frmLstItems = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLstItems,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmLstItems",
        "needAppMenu": true,
        "skin": "frm",
        "title": "List"
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