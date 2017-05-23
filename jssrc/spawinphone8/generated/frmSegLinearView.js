function addWidgetsfrmSegLinearView() {
    var labelfrmSeg5 = new kony.ui.Label({
        "id": "labelfrmSeg5",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Segment in Linear View"
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
    var segment2117989725233942 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725233945": "b1.png",
            "label117989725233943": "Boys' Felix Sneakers",
            "label117989725233946": "Online Price:$10.00"
        }, {
            "image2117989725233945": "b2.png",
            "label117989725233943": "Boys DuPont F Sneaker",
            "label117989725233946": "Online Price:$15.00"
        }, {
            "image2117989725233945": "b3.png",
            "label117989725233943": "Women's Matte Slippers",
            "label117989725233946": "Online Price:$8.00"
        }, {
            "image2117989725233945": "b4.png",
            "label117989725233943": "Women's Buckle Boots",
            "label117989725233946": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segment2117989725233942",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495217,
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
            "hbox117989725233944": "hbox117989725233944",
            "image2117989725233945": "image2117989725233945",
            "label117989725233943": "label117989725233943",
            "label117989725233946": "label117989725233946"
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
    frmSegLinearView.add(labelfrmSeg5, segment2117989725233942);
};

function frmSegLinearViewGlobals() {
    frmSegLinearView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegLinearView,
        "enabledForIdleTimeout": false,
        "id": "frmSegLinearView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Linear view"
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
    frmSegLinearView.info = {
        "kuid": "p2kwiet12889314952562"
    };
};