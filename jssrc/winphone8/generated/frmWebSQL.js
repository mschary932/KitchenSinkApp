function addWidgetsfrmWebSQL() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "WebSQL"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox103994549623663.add(label103994549623664);
    var btnCreateDB = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btnCreateDB",
        "isVisible": true,
        "onClick": p2kwiet12889314953313_btnCreateDB_onClick_seq0,
        "skin": "btnNormal",
        "text": "Create database"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1930040990147039 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button1930040990147039",
        "isVisible": true,
        "onClick": p2kwiet12889314953313_button1930040990147039_onClick_seq0,
        "skin": "btnNormal",
        "text": "Insert data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1930040990147063 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button1930040990147063",
        "isVisible": true,
        "onClick": p2kwiet12889314953313_button1930040990147063_onClick_seq0,
        "skin": "btnNormal",
        "text": "Show data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1930040990147077 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button1930040990147077",
        "isVisible": true,
        "onClick": p2kwiet12889314953313_button1930040990147077_onClick_seq0,
        "skin": "btnNormal",
        "text": "Update data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1930040990147091 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button1930040990147091",
        "isVisible": true,
        "onClick": p2kwiet12889314953313_button1930040990147091_onClick_seq0,
        "skin": "btnNormal",
        "text": "Delete data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblWebSqlUpdate = new kony.ui.Label({
        "enableCache": false,
        "id": "lblWebSqlUpdate",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmWebSQL.add(hbox103994549623663, btnCreateDB, button1930040990147039, button1930040990147063, button1930040990147077, button1930040990147091, lblWebSqlUpdate);
};

function frmWebSQLGlobals() {
    frmWebSQL = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmWebSQL,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmWebSQL",
        "needAppMenu": true,
        "preShow": p2kwiet12889314953313_frmWebSQL_preshow_seq0,
        "skin": "frm",
        "title": "WebSQL"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["btnCreateDB", "button1930040990147039", "button1930040990147063", "button1930040990147077", "button1930040990147091", "hbox103994549623663", "label103994549623664", "lblWebSqlUpdate"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmWebSQL.info = {
        "kuid": "p2kwiet12889314953313"
    };
};