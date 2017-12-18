function addWidgetsfrmSegCustomPageIndicator() {
    var segment2117989725234772 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234776": "b1.png",
            "label117989725234774": "Boys' Felix Sneakers",
            "label117989725234777": "Online Price:$10.00"
        }, {
            "image2117989725234776": "b2.png",
            "label117989725234774": "Boys DuPont F Sneaker",
            "label117989725234777": "Online Price:$15.00"
        }, {
            "image2117989725234776": "b3.png",
            "label117989725234774": "Women's Matte Slippers",
            "label117989725234777": "Online Price:$8.00"
        }, {
            "image2117989725234776": "b4.png",
            "label117989725234774": "Women's Buckle Boots",
            "label117989725234777": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segment2117989725234772",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "page_control.png",
        "pageOnDotImage": "page_control_active.png",
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495201,
        "screenLevelWidget": true,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "hbox117989725234775": "hbox117989725234775",
            "image2117989725234776": "image2117989725234776",
            "label117989725234774": "label117989725234774",
            "label117989725234777": "label117989725234777"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmSegCustomPageIndicator.add(segment2117989725234772);
};

function frmSegCustomPageIndicatorGlobals() {
    frmSegCustomPageIndicator = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegCustomPageIndicator,
        "enabledForIdleTimeout": false,
        "id": "frmSegCustomPageIndicator",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Screen level page view"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};