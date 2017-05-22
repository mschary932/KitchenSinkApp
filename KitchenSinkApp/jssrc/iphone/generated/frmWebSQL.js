function addWidgetsfrmWebSQL() {
    var btnCreateDB = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnCreateDB",
        "isVisible": true,
        "onClick": p2kwiet9745998653313_btnCreateDB_onClick_seq0,
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1930040990147039 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990147039",
        "isVisible": true,
        "onClick": p2kwiet9745998653313_button1930040990147039_onClick_seq0,
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1930040990147063 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990147063",
        "isVisible": true,
        "onClick": p2kwiet9745998653313_button1930040990147063_onClick_seq0,
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1930040990147077 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990147077",
        "isVisible": true,
        "onClick": p2kwiet9745998653313_button1930040990147077_onClick_seq0,
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1930040990147091 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990147091",
        "isVisible": true,
        "onClick": p2kwiet9745998653313_button1930040990147091_onClick_seq0,
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblWebSqlUpdate = new kony.ui.Label({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmWebSQL.add(btnCreateDB, button1930040990147039, button1930040990147063, button1930040990147077, button1930040990147091, lblWebSqlUpdate);
};

function frmWebSQLGlobals() {
    frmWebSQL = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmWebSQL,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmWebSQL",
        "needAppMenu": true,
        "preShow": p2kwiet9745998653313_frmWebSQL_preshow_seq0,
        "skin": "frm",
        "title": "WebSQL"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmWebSQL.info = {
        "kuid": "p2kwiet9745998653313"
    };
};