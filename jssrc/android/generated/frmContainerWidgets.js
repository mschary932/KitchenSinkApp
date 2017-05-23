function addWidgetsfrmContainerWidgets() {
    var uiContainerSeg = new kony.ui.SegmentedUI2({
        "data": [{
            "lblContainerWidgets": "Form"
        }, {
            "lblContainerWidgets": "Tabs"
        }, {
            "lblContainerWidgets": "Scroll Box"
        }],
        "groupCells": false,
        "id": "uiContainerSeg",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet1288931495728_uiContainerSeg_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495145,
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
            "lblContainerWidgets": "lblContainerWidgets"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmContainerWidgets.add(uiContainerSeg);
};

function frmContainerWidgetsGlobals() {
    frmContainerWidgets = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContainerWidgets,
        "enabledForIdleTimeout": false,
        "id": "frmContainerWidgets",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Container"
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
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmContainerWidgets.info = {
        "kuid": "p2kwiet1288931495728"
    };
};