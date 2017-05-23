function addWidgetsfrmSegTableView() {
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Table view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbox103994549623663.add(label103994549623664);
    var label1041822331304 = new kony.ui.Label({
        "id": "label1041822331304",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Segment in table view"
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
    var segment2117989725234750 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234759": "b1.png",
            "label117989725234753": "Boys' Felix Sneakers",
            "label117989725234760": "Online Price:$10.00"
        }, {
            "image2117989725234759": "b2.png",
            "label117989725234753": "Boys DuPont F Sneaker",
            "label117989725234760": "Online Price:$15.00"
        }, {
            "image2117989725234759": "b3.png",
            "label117989725234753": "Women's Matte Slippers",
            "label117989725234760": "Online Price:$8.00"
        }, {
            "image2117989725234759": "b4.png",
            "label117989725234753": "Women's Buckle Boots",
            "label117989725234760": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segment2117989725234750",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495249,
        "screenLevelWidget": true,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox117989725234754": "hbox117989725234754",
            "image2117989725234759": "image2117989725234759",
            "label117989725234753": "label117989725234753",
            "label117989725234760": "label117989725234760"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegTableView.add(hbox103994549623663, label1041822331304, segment2117989725234750);
};

function frmSegTableViewGlobals() {
    frmSegTableView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegTableView,
        "enabledForIdleTimeout": false,
        "id": "frmSegTableView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Table view"
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
    frmSegTableView.info = {
        "kuid": "p2kwiet12889314952829"
    };
};