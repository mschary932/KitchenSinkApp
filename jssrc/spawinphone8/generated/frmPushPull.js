function addWidgetsfrmPushPull() {
    var segStates = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segStates",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495183,
        "screenLevelWidget": true,
        "scrollingEvents": {
            "onPull": p2kwiet12889314951909_segStates_onPull_seq0
        },
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "cname": "cname"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmPushPull.add(segStates);
};

function frmPushPullGlobals() {
    frmPushPull = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPushPull,
        "enabledForIdleTimeout": false,
        "id": "frmPushPull",
        "init": p2kwiet12889314951909_frmPushPull_init_seq0,
        "needAppMenu": true,
        "skin": "frm",
        "title": "On pull"
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
    frmPushPull.info = {
        "kuid": "p2kwiet12889314951909"
    };
};