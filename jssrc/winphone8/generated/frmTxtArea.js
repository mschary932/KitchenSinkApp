function addWidgetsfrmTxtArea() {
    var hBoxTextArea = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hBoxTextArea",
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
    var lblTextArea = new kony.ui.Label({
        "enableCache": false,
        "id": "lblTextArea",
        "isVisible": true,
        "skin": "headLabel",
        "text": "TextArea"
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
    hBoxTextArea.add(lblTextArea);
    var label117989725235254 = new kony.ui.Label({
        "enableCache": false,
        "id": "label117989725235254",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default TextArea"
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
    var textarea2117989725235255 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "txtAreaFocus",
        "id": "textarea2117989725235255",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "skin": "txtAreaNormal",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 0, 12, 0],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label117989725235273 = new kony.ui.Label({
        "enableCache": false,
        "id": "label117989725235273",
        "isVisible": true,
        "skin": "lblSub",
        "text": "TextArea with placeholder"
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
    var textarea2117989725235286 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "txtAreaFocus",
        "id": "textarea2117989725235286",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "placeholder": "Enter text",
        "skin": "txtAreaNormal",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 0, 12, 0],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label117989725235318 = new kony.ui.Label({
        "enableCache": false,
        "id": "label117989725235318",
        "isVisible": true,
        "skin": "lblSub",
        "text": "TextArea with background color"
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
    var textarea2117989725235330 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "txtAreaBGColor",
        "id": "textarea2117989725235330",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "placeholder": "Enter text",
        "skin": "txtAreaBGColor",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 0, 12, 0],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label117989725235348 = new kony.ui.Label({
        "enableCache": false,
        "id": "label117989725235348",
        "isVisible": true,
        "skin": "lblSub",
        "text": "TextArea with VerticalGradient"
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
    var textarea2117989725235366 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "txtVertiGrad",
        "id": "textarea2117989725235366",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "placeholder": "Enter text",
        "skin": "txtVertiGrad",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 0, 12, 0],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label117989725235378 = new kony.ui.Label({
        "enableCache": false,
        "id": "label117989725235378",
        "isVisible": true,
        "skin": "lblSub",
        "text": "TextArea with VerticalSplit"
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
    var textarea2117989725235390 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "textAreaVertiSplit",
        "id": "textarea2117989725235390",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "placeholder": "Enter text",
        "skin": "textAreaVertiSplit",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 0, 12, 0],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmTxtArea.add(hBoxTextArea, label117989725235254, textarea2117989725235255, label117989725235273, textarea2117989725235286, label117989725235318, textarea2117989725235330, label117989725235348, textarea2117989725235366, label117989725235378, textarea2117989725235390);
};

function frmTxtAreaGlobals() {
    frmTxtArea = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTxtArea,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmTxtArea",
        "needAppMenu": true,
        "skin": "frm",
        "title": "TextArea"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hBoxTextArea", "label117989725235254", "label117989725235273", "label117989725235318", "label117989725235348", "label117989725235378", "label117989725235408", "label1181029310129631", "lblTextArea", "textarea2117989725235255", "textarea2117989725235286", "textarea2117989725235330", "textarea2117989725235366", "textarea2117989725235390", "textarea2117989725235426", "textarea21181029310129661", "textarea2120664956832288"],
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
    frmTxtArea.info = {
        "kuid": "p2kwiet12889314953218"
    };
};