function addWidgetsfrmSegStackView() {
    if (typeof initializevbox1288931495247 === 'function') initializevbox1288931495247();
    var segment2117989725233858 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725233886": "b1.png",
            "label117989725233883": "Boys' Felix Sneakers",
            "label117989725233885": "Online Price:$10.00"
        }, {
            "image2117989725233886": "b2.png",
            "label117989725233883": "Boys DuPont F Sneaker",
            "label117989725233885": "Online Price:$15.00"
        }, {
            "image2117989725233886": "b3.png",
            "label117989725233883": "Women's Matte Slippers",
            "label117989725233885": "Online Price:$8.00"
        }, {
            "image2117989725233886": "b4.png",
            "label117989725233883": "Women's Buckle Boots",
            "label117989725233885": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segment2117989725233858",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495247,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_STACK,
        "widgetDataMap": {
            "hbox117989725233884": "hbox117989725233884",
            "image2117989725233886": "image2117989725233886",
            "label117989725233883": "label117989725233883",
            "label117989725233885": "label117989725233885"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 8, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmSegStackView.add(segment2117989725233858);
};

function frmSegStackViewGlobals() {
    frmSegStackView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegStackView,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmSegStackView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Stack view"
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