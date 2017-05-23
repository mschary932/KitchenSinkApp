function addWidgetsfrmSegCustomPageIndicator() {
    var hbox103994549623663 = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Button"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
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
        "margin": [4, 8, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegCustomPageIndicator.add(hbox103994549623663, segment2117989725234772);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmSegCustomPageIndicator.info = {
        "kuid": "p2kwiet12889314952487"
    };
};