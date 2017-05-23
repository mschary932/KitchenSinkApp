function addWidgetsfrmAsyncDataAccess() {
    var hbxFrmAsyncData = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hbxFrmAsyncData",
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
    var lblFrmAsyncData = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmAsyncData",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Async data"
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
    hbxFrmAsyncData.add(lblFrmAsyncData);
    var label192834290335707 = new kony.ui.Label({
        "enableCache": false,
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
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var tbxFName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
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
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false
    });
    var tbxLName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
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
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false
    });
    var button117813958332763 = new kony.ui.Button({
        "enableCache": false,
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
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblErrMsgAsyncData = new kony.ui.Label({
        "enableCache": false,
        "id": "lblErrMsgAsyncData",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblNwConn = new kony.ui.Label({
        "enableCache": false,
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
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmAsyncDataAccess.add(hbxFrmAsyncData, label192834290335707, tbxFName, tbxLName, button117813958332763, lblErrMsgAsyncData, lblNwConn);
};

function frmAsyncDataAccessGlobals() {
    frmAsyncDataAccess = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAsyncDataAccess,
        "enableCache": false,
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["button117813958332763", "hbxFrmAsyncData", "label192834290335707", "lblErrMsgAsyncData", "lblFrmAsyncData", "lblNwConn", "tbxFName", "tbxLName"],
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
    frmAsyncDataAccess.info = {
        "kuid": "p2kwiet1288931495303"
    };
};