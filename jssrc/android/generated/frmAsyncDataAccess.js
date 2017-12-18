function addWidgetsfrmAsyncDataAccess() {
    var label192834290335707 = new kony.ui.Label({
        "id": "label192834290335707",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Please enter valid first name and last name and click submit to get the people data."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var tbxFName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "textBoxFocus",
        "id": "tbxFName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "First Name",
        "secureTextEntry": false,
        "skin": "textBoxNormal",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [2, 3, 2, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var tbxLName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "textBoxFocus",
        "id": "tbxLName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Second name",
        "secureTextEntry": false,
        "skin": "textBoxNormal",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [2, 3, 2, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button117813958332763 = new kony.ui.Button({
        "focusSkin": "btnSknRed",
        "id": "button117813958332763",
        "isVisible": true,
        "onClick": p2kwiet1288931495303_button117813958332763_onClick_seq0,
        "skin": "btnSknBlack",
        "text": "Submit"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblErrMsgAsyncData = new kony.ui.Label({
        "id": "lblErrMsgAsyncData",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblNwConn = new kony.ui.Label({
        "id": "lblNwConn",
        "isVisible": true,
        "skin": "lblWhite80",
        "text": "*Note: Please check your network connections before invoking service"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmAsyncDataAccess.add(label192834290335707, tbxFName, tbxLName, button117813958332763, lblErrMsgAsyncData, lblNwConn);
};

function frmAsyncDataAccessGlobals() {
    frmAsyncDataAccess = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAsyncDataAccess,
        "enabledForIdleTimeout": false,
        "id": "frmAsyncDataAccess",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495303_frmAsyncDataAccess_preshow_seq0,
        "skin": "frm",
        "title": "Async Data"
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