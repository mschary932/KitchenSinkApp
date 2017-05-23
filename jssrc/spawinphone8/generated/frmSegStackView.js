function addWidgetsfrmSegStackView() {
    var labelfrmSeg4 = new kony.ui.Label({
        "id": "labelfrmSeg4",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Segment in Stack view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "renderAsAnchor": false
    });
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
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
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
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegStackView.add(labelfrmSeg4, segment2117989725233858);
};

function frmSegStackViewGlobals() {
    frmSegStackView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegStackView,
        "enabledForIdleTimeout": false,
        "id": "frmSegStackView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Stack view"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmSegStackView.info = {
        "kuid": "p2kwiet12889314952811"
    };
};