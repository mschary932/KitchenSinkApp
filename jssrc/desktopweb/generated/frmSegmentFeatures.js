function addWidgetsfrmSegmentFeatures() {
    var line685080434212267 = new kony.ui.Line({
        "id": "line685080434212267",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbxSegmentFeatures = new kony.ui.Box({
        "id": "hbxSegmentFeatures",
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
    var sbxSegmentFeaturesCat = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sbxSegmentFeaturesCat",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "skin": "sbxWidCatTabletGray"
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 25,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "scrollArrowConfig": [null, null, null, null]
    });
    var segSegmentFeatureCat = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segSegmentFeatureCat",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314955598_segSegmentFeatureCat_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495389,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblSegFeatures": "lblSegFeatures"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    sbxSegmentFeaturesCat.add(segSegmentFeatureCat);
    var sbxSegmentFeatureDetails = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sbxSegmentFeatureDetails",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "skin": "scbKonyBg"
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 75,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 4, 20, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "scrollArrowConfig": [null, null, null, null]
    });
    sbxSegmentFeatureDetails.add();
    hbxSegmentFeatures.add(sbxSegmentFeaturesCat, sbxSegmentFeatureDetails);
    frmSegmentFeatures.add(line685080434212267, hbxSegmentFeatures);
};

function frmSegmentFeaturesGlobals() {
    frmSegmentFeatures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentFeatures,
        "enabledForIdleTimeout": false,
        "headers": [hbox192735980024418],
        "id": "frmSegmentFeatures",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "postShow": p2kwiet12889314955598_frmSegmentFeatures_postshow_seq0,
        "skin": "frm",
        "title": "Segment Features"
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
    frmSegmentFeatures.info = {
        "kuid": "p2kwiet12889314955598"
    };
};