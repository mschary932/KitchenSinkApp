function addWidgetsfrmSegmentViews() {
    var line685080434102713 = new kony.ui.Line({
        "id": "line685080434102713",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox68508043476623 = new kony.ui.Box({
        "id": "hbox68508043476623",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox685080434212094 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox685080434212094",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": false,
        "skin": "sbxWidCatTabletGray"
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 25,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 102],
        "paddingInPixel": false,
        "percent": true
    }, {
        "scrollArrowConfig": [null, null, null, null]
    });
    var label685080434212095 = new kony.ui.Label({
        "id": "label685080434212095",
        "isVisible": true,
        "skin": "lblNormalDesktop",
        "text": "Segment views"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 1],
        "marginInPixel": false,
        "padding": [5, 3, 1, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    scrollbox685080434212094.add(label685080434212095);
    var scbSegmentViewDetails = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scbSegmentViewDetails",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "showScrollbars": true,
        "skin": "scbKonyBg"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 75,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 2, 3],
        "paddingInPixel": false,
        "percent": true
    }, {
        "scrollArrowConfig": [null, null, null, null]
    });
    var hbox685080434153537 = new kony.ui.Box({
        "id": "hbox685080434153537",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 3],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox685080434155886 = new kony.ui.Box({
        "id": "vbox685080434155886",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox685080434170757 = new kony.ui.Box({
        "id": "hbox685080434170757",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxTranWithBlackBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label685080434184959 = new kony.ui.Label({
        "id": "label685080434184959",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Table view :"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox685080434174158 = new kony.ui.Box({
        "id": "vbox685080434174158",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 80,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segment2685080434157328 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2685080434157334": "b1.png",
            "label685080434157330": "Boys' Felix Sneakers",
            "label685080434157336": "Online Price:$10.00"
        }, {
            "image2685080434157334": "b2.png",
            "label685080434157330": "Boys DuPont F Sneaker",
            "label685080434157336": "Online Price:$15.00"
        }, {
            "image2685080434157334": "b3.png",
            "label685080434157330": "Women's Matte Slippers",
            "label685080434157336": "Online Price:$8.00"
        }, {
            "image2685080434157334": "b4.png",
            "label685080434157330": "Women's Buckle Boots",
            "label685080434157336": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segment2685080434157328",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495405,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox685080434157332": "hbox685080434157332",
            "image2685080434157334": "image2685080434157334",
            "label685080434157330": "label685080434157330",
            "label685080434157336": "label685080434157336"
        },
        "widgetSkin": "segAndroid"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 4, 10, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox685080434174158.add(segment2685080434157328);
    hbox685080434170757.add(label685080434184959, vbox685080434174158);
    var hbox685080434189790 = new kony.ui.Box({
        "id": "hbox685080434189790",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxTranWithBlackBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 4, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label685080434197182 = new kony.ui.Label({
        "id": "label685080434197182",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Page view :"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox685080434190291 = new kony.ui.Box({
        "id": "vbox685080434190291",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 80,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segment2685080434163628 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2685080434163634": "b1.png",
            "label685080434163630": "Boys' Felix Sneakers",
            "label685080434163636": "Online Price:$10.00"
        }, {
            "image2685080434163634": "b2.png",
            "label685080434163630": "Boys DuPont F Sneaker",
            "label685080434163636": "Online Price:$15.00"
        }, {
            "image2685080434163634": "b3.png",
            "label685080434163630": "Women's Matte Slippers",
            "label685080434163636": "Online Price:$8.00"
        }, {
            "image2685080434163634": "b4.png",
            "label685080434163630": "Women's Buckle Boots",
            "label685080434163636": "Online Price:$20.00"
        }],
        "groupCells": false,
        "id": "segment2685080434163628",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "pageOffDotImage": "page_control.png",
        "pageOnDotImage": "page_control_active.png",
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495407,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "hbox685080434163632": "hbox685080434163632",
            "image2685080434163634": "image2685080434163634",
            "label685080434163630": "label685080434163630",
            "label685080434163636": "label685080434163636"
        }
    }, {
        "containerHeight": 90,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 2, 10, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox685080434190291.add(segment2685080434163628);
    hbox685080434189790.add(label685080434197182, vbox685080434190291);
    vbox685080434155886.add(hbox685080434170757, hbox685080434189790);
    hbox685080434153537.add(vbox685080434155886);
    scbSegmentViewDetails.add(hbox685080434153537);
    hbox68508043476623.add(scrollbox685080434212094, scbSegmentViewDetails);
    frmSegmentViews.add(line685080434102713, hbox68508043476623);
};

function frmSegmentViewsGlobals() {
    frmSegmentViews = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentViews,
        "enabledForIdleTimeout": false,
        "headers": [hbox192735980024418],
        "id": "frmSegmentViews",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment views"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmSegmentViews.info = {
        "kuid": "p2kwiet12889314955690"
    };
};