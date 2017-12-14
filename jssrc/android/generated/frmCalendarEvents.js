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
    }, {});
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
    }, {});
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
    }, {});
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
        "textCopyable": false
    });
    frmCalendarEvents.add(button1930040990147922, button1930040990147932, button1930040990149625, lblCalendarEvents);
};

function frmCalendarEventsGlobals() {
    frmCalendarEvents = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCalendarEvents,
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