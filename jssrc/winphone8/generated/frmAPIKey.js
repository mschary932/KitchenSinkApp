function addWidgetsfrmAPIKey() {
    var hbxFrmApiKey = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hbxFrmApiKey",
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
    var lblFrmApiKey = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmApiKey",
        "isVisible": true,
        "skin": "headLabel",
        "text": "API Key"
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
    hbxFrmApiKey.add(lblFrmApiKey);
    var lblAppKeyInfo = new kony.ui.Label({
        "enableCache": false,
        "id": "lblAppKeyInfo",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "This application requires API key to proceed."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 2, 1, 1],
        "marginInPixel": false,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblTextBoxHeader = new kony.ui.Label({
        "enableCache": false,
        "id": "lblTextBoxHeader",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Please input your API key below"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtAPIKey = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "id": "txtAPIKey",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 3, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false
    });
    var button1927359800106315 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button1927359800106315",
        "isVisible": true,
        "onClick": p2kwiet1288931495262_button1927359800106315_onClick_seq0,
        "skin": "btnNormal",
        "text": "Continue"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 4],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lnkNoAPIKey = new kony.ui.Link({
        "enableCache": false,
        "focusSkin": "lnkFocus",
        "id": "lnkNoAPIKey",
        "isVisible": true,
        "onClick": p2kwiet1288931495262_lnkNoAPIKey_onClick_seq0,
        "skin": "lnkTransparent",
        "text": "Do not have an API key?"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmAPIKey.add(hbxFrmApiKey, lblAppKeyInfo, lblTextBoxHeader, txtAPIKey, button1927359800106315, lnkNoAPIKey);
};

function frmAPIKeyGlobals() {
    frmAPIKey = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAPIKey,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAPIKey",
        "needAppMenu": true,
        "title": "Async data access"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["button1927359800106315", "hbxFrmApiKey", "lblAppKeyInfo", "lblFrmApiKey", "lblTextBoxHeader", "lnkNoAPIKey", "txtAPIKey"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": false
    });
    frmAPIKey.info = {
        "kuid": "p2kwiet1288931495262"
    };
};