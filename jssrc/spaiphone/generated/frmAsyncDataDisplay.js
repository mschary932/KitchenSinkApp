function addWidgetsfrmAsyncDataDisplay() {
    var segSmall = new kony.ui.SegmentedUI2({
        "groupCells": true,
        "id": "segSmall",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495131,
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
            "hbox192822373931952": "hbox192822373931952",
            "hbox192834290335247": "hbox192834290335247",
            "hbox192834290335253": "hbox192834290335253",
            "imgAsySml": "imgAsySml",
            "lblPAddress": "lblPAddress",
            "lblPName": "lblPName",
            "vbox192834290335245": "vbox192834290335245"
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
    frmAsyncDataDisplay.add(segSmall);
};

function frmAsyncDataDisplayGlobals() {
    frmAsyncDataDisplay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAsyncDataDisplay,
        "enabledForIdleTimeout": false,
        "id": "frmAsyncDataDisplay",
        "needAppMenu": true,
        "skin": "frm",
        "title": "People data"
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
    frmAsyncDataDisplay.info = {
        "kuid": "p2kwiet1288931495314"
    };
};