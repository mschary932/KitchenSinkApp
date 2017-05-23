function addWidgetsfrmSegTableView() {
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
        "text": "Table view"
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
    var segment2685080434434374 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2685080434434380": "b1.png",
            "label685080434434376": "Boys' Felix Sneakers",
            "label685080434434382": "Online Price:$10.00"
        }, {
            "image2685080434434380": "b2.png",
            "label685080434434376": "Boys DuPont F Sneaker",
            "label685080434434382": "Online Price:$15.00"
        }, {
            "image2685080434434380": "b3.png",
            "label685080434434376": "Women's Matte Slippers",
            "label685080434434382": "Online Price:$8.00"
        }, {
            "image2685080434434380": "b4.png",
            "label685080434434376": "Women's Buckle Boots",
            "label685080434434382": "Online Price:$20.00"
        }],
        "enableCache": false,
        "groupCells": true,
        "id": "segment2685080434434374",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495251,
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
            "hbox685080434434378": "hbox685080434434378",
            "image2685080434434380": "image2685080434434380",
            "label685080434434376": "label685080434434376",
            "label685080434434382": "label685080434434382"
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
    frmSegTableView.add(hbox103994549623663, segment2685080434434374);
};

function frmSegTableViewGlobals() {
    frmSegTableView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegTableView,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSegTableView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Table view"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "label103994549623664", "label1041822331304", "segment2117989725234750", "segment2685080434434374"],
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
    frmSegTableView.info = {
        "kuid": "p2kwiet12889314952829"
    };
};