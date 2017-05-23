function addWidgetsfrmAnimations() {
    var hbxAniTabSPA = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbxAniTabSPA",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
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
    var lblAniTabSPA = new kony.ui.Label({
        "id": "lblAniTabSPA",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Animations"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbxAniTabSPA.add(lblAniTabSPA);
    var segSPAAniList = new kony.ui.SegmentedUI2({
        "data": [{
            "label1927359800101289": "Top"
        }, {
            "label1927359800101289": "Bottom"
        }, {
            "label1927359800101289": "Right"
        }, {
            "label1927359800101289": "Left"
        }],
        "groupCells": true,
        "id": "segSPAAniList",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314953460_segSPAAniList_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495271,
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
            "label1927359800101289": "label1927359800101289"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmAnimations.add(hbxAniTabSPA, segSPAAniList);
};

function frmAnimationsGlobals() {
    frmAnimations = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnimations,
        "enabledForIdleTimeout": false,
        "id": "frmAnimations",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Animations"
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
    frmAnimations.info = {
        "kuid": "p2kwiet12889314953460"
    };
};