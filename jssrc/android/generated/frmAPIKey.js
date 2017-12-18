function addWidgetsfrmAPIKey() {
    var lblAppKeyInfo = new kony.ui.Label({
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
        "padding": [9, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblTextBoxHeader = new kony.ui.Label({
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
        "padding": [9, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtAPIKey = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
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
        "margin": [4, 1, 4, 2],
        "marginInPixel": false,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button1927359800106315 = new kony.ui.Button({
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
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lnkNoAPIKey = new kony.ui.Link({
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
        "margin": [2, 3, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmAPIKey.add(lblAppKeyInfo, lblTextBoxHeader, txtAPIKey, button1927359800106315, lnkNoAPIKey);
};

function frmAPIKeyGlobals() {
    frmAPIKey = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAPIKey,
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