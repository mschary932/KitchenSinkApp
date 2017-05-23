function addWidgetsfrmCalendarEvents() {
    var button1930040990147922 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990147922",
        "isVisible": true,
        "onClick": p2kwiet1288931495533_button1930040990147922_onClick_seq0,
        "skin": "btnNormal",
        "text": "Add calendar event"
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
    var button1930040990147932 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990147932",
        "isVisible": true,
        "onClick": p2kwiet1288931495533_button1930040990147932_onClick_seq0,
        "skin": "btnNormal",
        "text": "Remove calendar event"
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
    var button1930040990149625 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990149625",
        "isVisible": true,
        "onClick": p2kwiet1288931495533_button1930040990149625_onClick_seq0,
        "skin": "btnNormal",
        "text": "Confidential  event"
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
    var lblCalendarEvents = new kony.ui.Label({
        "id": "lblCalendarEvents",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmCalendarEvents.add(button1930040990147922, button1930040990147932, button1930040990149625, lblCalendarEvents);
};

function frmCalendarEventsGlobals() {
    frmCalendarEvents = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCalendarEvents,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCalendarEvents",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495533_frmCalendarEvents_preshow_seq0,
        "skin": "frm",
        "title": "Calendar events"
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
    frmCalendarEvents.info = {
        "kuid": "p2kwiet1288931495533"
    };
};