function addWidgetsfrmSegCoverFlowView() {
    var labefrmSeg3 = new kony.ui.Label({
        "id": "labefrmSeg3",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Segment in Coverflow view"
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
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
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
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegCoverFlowView.add(labefrmSeg3, segment2117989725233822);
};

function frmSegCoverFlowViewGlobals() {
    frmSegCoverFlowView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegCoverFlowView,
        "enabledForIdleTimeout": false,
        "id": "frmSegCoverFlowView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Coverflow view"
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
    frmSegCoverFlowView.info = {
        "kuid": "p2kwiet12889314952464"
    };
};