function addWidgetsfrmSegSections() {
    if (typeof initializevbox1288931495243 === 'function') initializevbox1288931495243();
    var segment2117989725237554 = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segment2117989725237554",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495243,
        "screenLevelWidget": true,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e9e9e900",
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
            "hbox117989725237556": "hbox117989725237556",
            "lblSegSec1": "lblSegSec1",
            "lblSegSec2": "lblSegSec2",
            "lblSegSec3": "lblSegSec3"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": true
    });
    frmSegSections.add(segment2117989725237554);
};

function frmSegSectionsGlobals() {
    frmSegSections = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSections,
        "enabledForIdleTimeout": false,
        "id": "frmSegSections",
        "needAppMenu": true,
        "preShow": p2kwiet12889314952785_frmSegSections_preshow_seq0,
        "skin": "frm",
        "title": "Segment with sections"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
};