function addWidgetsfrmAniWin() {
    if (typeof initializevbox1288931495127 === 'function') initializevbox1288931495127();
    var segWin = new kony.ui.SegmentedUI2({
        "data": [{
            "lblWin": "Rotate3DSingle"
        }, {
            "lblWin": "Rotate3DDual"
        }, {
            "lblWin": "Slide"
        }, {
            "lblWin": "Pop"
        }, {
            "lblWin": "Squeze"
        }],
        "groupCells": false,
        "id": "segWin",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet1288931495232_segWin_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495127,
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
            "lblWin": "lblWin"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmAniWin.add(segWin);
};

function frmAniWinGlobals() {
    frmAniWin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWin,
        "enabledForIdleTimeout": false,
        "id": "frmAniWin",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Transitions"
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};