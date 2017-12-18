function addWidgetsfrmAppSetRead() {
    var hbox1927359800106179 = new kony.ui.Box({
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
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106187 = new kony.ui.Label({
        "id": "label1927359800106187",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Message :"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblMsgSetR = new kony.ui.Label({
        "id": "lblMsgSetR",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox1927359800106179.add(label1927359800106187, lblMsgSetR);
    var hbox1927359800106182 = new kony.ui.Box({
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
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106208 = new kony.ui.Label({
        "id": "label1927359800106208",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "View type :"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblMsgSetR1 = new kony.ui.Label({
        "id": "lblMsgSetR1",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
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
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "image21927359800106232": "image21927359800106232"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [1, 3, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmAppSetRead.add(hbox1927359800106179, hbox1927359800106182, SegMsgSetR);
};

function frmAppSetReadGlobals() {
    frmAppSetRead = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAppSetRead,
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
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};