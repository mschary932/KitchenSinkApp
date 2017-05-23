function addWidgetsfrmWebSQL() {
    var btnCreateDB = new kony.ui.Button({
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
        "id": "lblWebSqlUpdate",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [11, 11, 6, 6],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmWebSQL.add(btnCreateDB, button1930040990147039, button1930040990147063, button1930040990147077, button1930040990147091, lblWebSqlUpdate);
};

function frmWebSQLGlobals() {
    frmWebSQL = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmWebSQL,
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
    frmWebSQL.info = {
        "kuid": "p2kwiet12889314953313"
    };
};