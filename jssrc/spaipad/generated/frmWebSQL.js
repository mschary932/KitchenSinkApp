function addWidgetsfrmWebSQL() {
    var hbxTabWebSQL = new kony.ui.Box({
        "id": "hbxTabWebSQL",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192920684279194 = new kony.ui.Box({
        "id": "vbox192920684279194",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button192920684279246 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279246",
        "isVisible": true,
        "onClick": p2kwiet12889314955060_button192920684279246_onClick_seq0,
        "skin": "btnNormal",
        "text": "Create database"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192920684279248 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279248",
        "isVisible": true,
        "onClick": p2kwiet12889314955060_button192920684279248_onClick_seq0,
        "skin": "btnNormal",
        "text": "Insert data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192920684279250 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279250",
        "isVisible": true,
        "onClick": p2kwiet12889314955060_button192920684279250_onClick_seq0,
        "skin": "btnNormal",
        "text": "Show data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192920684279252 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279252",
        "isVisible": true,
        "onClick": p2kwiet12889314955060_button192920684279252_onClick_seq0,
        "skin": "btnNormal",
        "text": "Update data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192920684279254 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192920684279254",
        "isVisible": true,
        "onClick": p2kwiet12889314955060_button192920684279254_onClick_seq0,
        "skin": "btnNormal",
        "text": "Delete data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox192920684279194.add(button192920684279246, button192920684279248, button192920684279250, button192920684279252, button192920684279254);
    hbxTabWebSQL.add(vbox192920684279194);
    var lblWebSqlUpdate = new kony.ui.Label({
        "id": "lblWebSqlUpdate",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var segWebSQLResults = new kony.ui.SegmentedUI2({
        "groupCells": true,
        "id": "segWebSQLResults",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495383,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox1930040990147164": "hbox1930040990147164",
            "lblDepId": "lblDepId",
            "lblEmpID": "lblEmpID",
            "lblEmpName": "lblEmpName"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmWebSQL.add(hbxTabWebSQL, lblWebSqlUpdate, segWebSQLResults);
};

function frmWebSQLGlobals() {
    frmWebSQL = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmWebSQL,
        "enabledForIdleTimeout": false,
        "id": "frmWebSQL",
        "needAppMenu": true,
        "skin": "frm"
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
    frmWebSQL.info = {
        "kuid": "p2kwiet12889314955060"
    };
};