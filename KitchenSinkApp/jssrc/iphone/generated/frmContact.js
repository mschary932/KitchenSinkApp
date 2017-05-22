function addWidgetsfrmContact() {
    var button1930040990148062 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990148062",
        "isVisible": true,
        "onClick": p2kwiet974599865721_button1930040990148062_onClick_seq0,
        "skin": "btnNormal",
        "text": "Add contact"
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
    var button1930040990148072 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990148072",
        "isVisible": true,
        "onClick": p2kwiet974599865721_button1930040990148072_onClick_seq0,
        "skin": "btnNormal",
        "text": "Find contact"
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
    var button1930040990148078 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990148078",
        "isVisible": true,
        "onClick": p2kwiet974599865721_button1930040990148078_onClick_seq0,
        "skin": "btnNormal",
        "text": "Remove contact"
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
    var lblDevContact = new kony.ui.Label({
        "id": "lblDevContact",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmContact.add(button1930040990148062, button1930040990148072, button1930040990148078, lblDevContact);
};

function frmContactGlobals() {
    frmContact = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContact,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmContact",
        "needAppMenu": true,
        "preShow": p2kwiet974599865721_frmContact_preshow_seq0,
        "skin": "frm",
        "title": "Address book"
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
    frmContact.info = {
        "kuid": "p2kwiet974599865721"
    };
};