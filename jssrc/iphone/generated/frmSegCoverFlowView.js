function addWidgetsfrmSegCoverFlowView() {
    if (typeof initializevbox1288931495197 === 'function') initializevbox1288931495197();
    var segment2117989725233822 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725233825": "b1.png",
            "label117989725233823": "Boys' Felix Sneakers",
            "label117989725233827": "Online Price:$10.00"
        }, {
            "image2117989725233825": "b2.png",
            "label117989725233823": "Boys DuPont F Sneaker",
            "label117989725233827": "Online Price:$15.00"
        }, {
            "image2117989725233825": "b3.png",
            "label117989725233823": "Women's Matte Slippers",
            "label117989725233827": "Online Price:$8.00"
        }, {
            "image2117989725233825": "b4.png",
            "label117989725233823": "Women's Buckle Boots ",
            "label117989725233827": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segment2117989725233822",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495197,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_COVERFLOW,
        "widgetDataMap": {
            "hbox117989725233824": "hbox117989725233824",
            "image2117989725233825": "image2117989725233825",
            "label117989725233823": "label117989725233823",
            "label117989725233827": "label117989725233827"
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
    frmSegCoverFlowView.add(segment2117989725233822);
};

function frmSegCoverFlowViewGlobals() {
    frmSegCoverFlowView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegCoverFlowView,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmSegCoverFlowView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Coverflow view"
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