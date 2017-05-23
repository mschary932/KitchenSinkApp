function addWidgetsfrmBasicWidgets() {
    var hbox103994549623663 = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "User Interface"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
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
        "onRowClick": p2kwiet1288931495337_segFirst_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495135,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblFirst": "lblFirst"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmBasicWidgets.add(hbox103994549623663, segFirst);
};

function frmBasicWidgetsGlobals() {
    frmBasicWidgets = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBasicWidgets,
        "enabledForIdleTimeout": false,
        "id": "frmBasicWidgets",
        "needAppMenu": true,
        "skin": "frm",
        "title": "User Interface"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmBasicWidgets.info = {
        "kuid": "frmBasicWidgetsSPAiPhone"
    };
};