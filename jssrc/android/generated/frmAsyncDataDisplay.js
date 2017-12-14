function addWidgetsfrmAsyncDataDisplay() {
    if (typeof initializevbox1288931495131 === 'function') initializevbox1288931495131();
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
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
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
    }, {
        "dockSectionHeaders": false
    });
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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