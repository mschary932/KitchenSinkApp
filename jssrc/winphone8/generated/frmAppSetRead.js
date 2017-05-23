function addWidgetsfrmAppSetRead() {
    var hbox1927359800106179 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1927359800106179",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106187 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1927359800106187",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Message :"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblMsgSetR = new kony.ui.Label({
        "enableCache": false,
        "id": "lblMsgSetR",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1927359800106179.add(label1927359800106187, lblMsgSetR);
    var hbox1927359800106182 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1927359800106182",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106208 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1927359800106208",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "View type :"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblMsgSetR1 = new kony.ui.Label({
        "enableCache": false,
        "id": "lblMsgSetR1",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1927359800106182.add(label1927359800106208, lblMsgSetR1);
    var SegMsgSetR = new kony.ui.SegmentedUI2({
        "data": [{
            "image21927359800106232": "b1.png"
        }, {
            "image21927359800106232": "b2.png"
        }, {
            "image21927359800106232": "b3.png"
        }, {
            "image21927359800106232": "b4.png"
        }],
        "enableCache": false,
        "groupCells": true,
        "id": "SegMsgSetR",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495129,
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
            "image21927359800106232": "image21927359800106232"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [12, 8, 12, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmAppSetRead.add(hbox1927359800106179, hbox1927359800106182, SegMsgSetR);
};

function frmAppSetReadGlobals() {
    frmAppSetRead = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAppSetRead,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAppSetRead",
        "needAppMenu": true,
        "skin": "frm",
        "title": "App settings"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox1927359800106179", "hbox1927359800106182", "label1927359800106187", "label1927359800106208", "lblMsgSetR", "lblMsgSetR1", "SegMsgSetR"],
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
    frmAppSetRead.info = {
        "kuid": "p2kwiet1288931495273"
    };
};