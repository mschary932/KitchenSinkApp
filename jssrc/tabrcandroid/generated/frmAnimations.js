function addWidgetsfrmAnimations() {
    var segAndriodAni = new kony.ui.SegmentedUI2({
        "data": [{
            "label1931202839100138": "bottom-top"
        }, {
            "label1931202839100138": "from left"
        }, {
            "label1931202839100138": "from right"
        }, {
            "label1931202839100138": "to right"
        }, {
            "label1931202839100138": "to left"
        }, {
            "label1931202839100138": "from center"
        }, {
            "label1931202839100138": "topright-bottom"
        }, {
            "label1931202839100138": "bottomleft-top"
        }, {
            "label1931202839100138": "bottom-top style1"
        }],
        "groupCells": true,
        "id": "segAndriodAni",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314953460_segAndriodAni_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495269,
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
            "label1931202839100138": "label1931202839100138"
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
    }, {
        "dockSectionHeaders": false
    });
    frmAnimations.add(segAndriodAni);
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
    frmAnimations.info = {
        "kuid": "p2kwiet12889314953460"
    };
};