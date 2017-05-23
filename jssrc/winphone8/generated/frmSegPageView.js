function addWidgetsfrmSegPageView() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Page View"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
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
        "enableCache": false,
        "groupCells": true,
        "id": "segment2117989725234772",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "page_control.png",
        "pageOnDotImage": "page_control_active.png",
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495225,
        "screenLevelWidget": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegPageView.add(hbox103994549623663, segment2117989725234772);
};

function frmSegPageViewGlobals() {
    frmSegPageView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegPageView,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSegPageView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Page view"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "label103994549623664", "labepageViewfrmSeg2", "segment2117989725234772"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmSegPageView.info = {
        "kuid": "p2kwiet12889314952680"
    };
};