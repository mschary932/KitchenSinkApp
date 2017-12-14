function addWidgetsfrmNLst2() {
    if (typeof initializevbox1288931495181 === 'function') initializevbox1288931495181();
    var segment21041822331231 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem1"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem2"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem3"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem4"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem5"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem6"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem7"
        }],
        "groupCells": false,
        "id": "segment21041822331231",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495181,
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
            "hbox192822373931791": "hbox192822373931791",
            "image2192822373931792": "image2192822373931792",
            "label1041822331232": "label1041822331232"
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
    frmNLst2.add(segment21041822331231);
};

function frmNLst2Globals() {
    frmNLst2 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNLst2,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmNLst2",
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