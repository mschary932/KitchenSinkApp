function addWidgetsfrmSegCylinderView() {
    var labelfrmfrmSeg8 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelfrmfrmSeg8",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Segment in Cylinder view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 7, 4, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segment2117989725234367 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234369": "b1.png"
        }, {
            "image2117989725234369": "b2.png"
        }, {
            "image2117989725234369": "b3.png"
        }, {
            "image2117989725234369": "b4.png"
        }],
        "enableCache": false,
        "groupCells": true,
        "id": "segment2117989725234367",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495203,
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
            "hbox117989725234368": "hbox117989725234368",
            "image2117989725234369": "image2117989725234369"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 8, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmSegCylinderView.add(labelfrmfrmSeg8, segment2117989725234367);
};

function frmSegCylinderViewGlobals() {
    frmSegCylinderView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegCylinderView,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSegCylinderView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Cylinder view"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["labelfrmfrmSeg8", "segment2117989725234367"],
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
    frmSegCylinderView.info = {
        "kuid": "p2kwiet12889314952496"
    };
};