function addWidgetsfrmBasicWidgets() {
    var segFirst = new kony.ui.SegmentedUI2({
        "data": [{
            "lblFirst": "Button"
        }, {
            "lblFirst": "Calendar"
        }, {
            "lblFirst": "CheckBoxGroup"
        }, {
            "lblFirst": "ComboBox"
        }, {
            "lblFirst": "DataGrid"
        }, {
            "lblFirst": "Image"
        }, {
            "lblFirst": "Label"
        }, {
            "lblFirst": "Link"
        }, {
            "lblFirst": "ListBox"
        }, {
            "lblFirst": "RadioButtonGroup"
        }, {
            "lblFirst": "RichText"
        }, {
            "lblFirst": "Slider"
        }, {
            "lblFirst": "TextArea"
        }, {
            "lblFirst": "TextBox"
        }, {
            "lblFirst": "Icons"
        }],
        "groupCells": false,
        "id": "segFirst",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet1288931495328_segFirst_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495133,
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
            "lblFirst": "lblFirst"
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
    frmBasicWidgets.add(segFirst);
};

function frmBasicWidgetsGlobals() {
    frmBasicWidgets = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBasicWidgets,
        "enabledForIdleTimeout": false,
        "id": "frmBasicWidgets",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Basic"
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
    frmBasicWidgets.info = {
        "kuid": "p2kwiet1288931495328"
    };
};