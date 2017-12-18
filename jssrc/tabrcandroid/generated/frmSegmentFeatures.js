function addWidgetsfrmSegmentFeatures() {
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
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "sbxWidCatTabletGray"
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 35,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var segSegmentFeatureCat = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segSegmentFeatureCat",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314954516_segSegmentFeatureCat_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495293,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblSegFeatures": "lblSegFeatures"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    sbxSegmentFeaturesCat.add(segSegmentFeatureCat);
    var sbxSegmentFeatureDetails = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sbxSegmentFeatureDetails",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 65,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    sbxSegmentFeatureDetails.add();
    hbxSegmentFeatures.add(sbxSegmentFeaturesCat, sbxSegmentFeatureDetails);
    frmSegmentFeatures.add(hbxSegmentFeatures);
};

function frmSegmentFeaturesGlobals() {
    frmSegmentFeatures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentFeatures,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentFeatures",
        "needAppMenu": true,
        "postShow": p2kwiet12889314954516_frmSegmentFeatures_postshow_seq0,
        "skin": "frm",
        "title": "Segment Features"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};