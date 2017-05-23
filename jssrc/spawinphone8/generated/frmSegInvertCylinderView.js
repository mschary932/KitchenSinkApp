function addWidgetsfrmSegInvertCylinderView() {
    var labelfrmfrmSeg9 = new kony.ui.Label({
        "id": "labelfrmfrmSeg9",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Segment in Inverted cylinder view"
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
    var segment2117989725234408 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234414": "b1.png"
        }, {
            "image2117989725234414": "b2.png"
        }, {
            "image2117989725234414": "b3.png"
        }, {
            "image2117989725234414": "b4.png"
        }],
        "groupCells": true,
        "id": "segment2117989725234408",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495213,
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
            "hbox117989725234411": "hbox117989725234411",
            "image2117989725234414": "image2117989725234414"
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
    frmSegInvertCylinderView.add(labelfrmfrmSeg9, segment2117989725234408);
};

function frmSegInvertCylinderViewGlobals() {
    frmSegInvertCylinderView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegInvertCylinderView,
        "enabledForIdleTimeout": false,
        "id": "frmSegInvertCylinderView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Inverted cylinder view"
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
    frmSegInvertCylinderView.info = {
        "kuid": "p2kwiet12889314952542"
    };
};