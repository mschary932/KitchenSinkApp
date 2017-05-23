function addWidgetsfrmSegPull() {
    var segPullToRefresh = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segPullToRefresh",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495337,
        "screenLevelWidget": true,
        "scrollingEvents": {
            "onPull": p2kwiet12889314954676_segPullToRefresh_onPull_seq0
        },
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "cname": "cname"
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
    frmSegPull.add(segPullToRefresh);
};

function frmSegPullGlobals() {
    frmSegPull = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegPull,
        "enabledForIdleTimeout": false,
        "id": "frmSegPull",
        "init": p2kwiet12889314954676_frmSegPull_init_seq0,
        "needAppMenu": true,
        "skin": "frm",
        "title": "On pull"
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
    frmSegPull.info = {
        "kuid": "p2kwiet12889314954676"
    };
};