function addWidgetsfrmTextArea() {
    var hbxTextAreas = new kony.ui.Box({
        "id": "hbxTextAreas",
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
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
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
    var label117989725235254 = new kony.ui.Label({
        "id": "label117989725235254",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default TextArea"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textarea2117989725235255 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showCloseButton": true,
        "showProgressIndicator": true
    });
    var label117989725235273 = new kony.ui.Label({
        "id": "label117989725235273",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "TextArea with placeholder"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textarea2117989725235286 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showCloseButton": true,
        "showProgressIndicator": true
    });
    var label117989725235318 = new kony.ui.Label({
        "id": "label117989725235318",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "TextArea with background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textarea2117989725235330 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showCloseButton": true,
        "showProgressIndicator": true
    });
    var label117989725235348 = new kony.ui.Label({
        "id": "label117989725235348",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "TextArea with VerticalGradient"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textarea2117989725235366 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showCloseButton": true,
        "showProgressIndicator": true
    });
    var label117989725235378 = new kony.ui.Label({
        "id": "label117989725235378",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "TextArea with VerticalSplit"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textarea2117989725235390 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showCloseButton": true,
        "showProgressIndicator": true
    });
    var label1181029310129631 = new kony.ui.Label({
        "id": "label1181029310129631",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "TextArea with 10 lines visible"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textarea21181029310129661 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtAreaFocus",
        "id": "textarea21181029310129661",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 10,
        "placeholder": "Enter text",
        "skin": "txtAreaNormal",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showCloseButton": true,
        "showProgressIndicator": true
    });
    vbox192926642422365.add(label117989725235254, textarea2117989725235255, label117989725235273, textarea2117989725235286, label117989725235318, textarea2117989725235330, label117989725235348, textarea2117989725235366, label117989725235378, textarea2117989725235390, label1181029310129631, textarea21181029310129661);
    hbxTextAreas.add(vbox192926642422365);
    frmTextArea.add(hbxTextAreas);
};

function frmTextAreaGlobals() {
    frmTextArea = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTextArea,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTextArea",
        "needAppMenu": true,
        "skin": "frm"
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
        "titleBar": true
    });
    frmTextArea.info = {
        "kuid": "p2kwiet9745998654839"
    };
};