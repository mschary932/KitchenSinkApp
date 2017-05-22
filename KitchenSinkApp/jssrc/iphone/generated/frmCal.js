function addWidgetsfrmCal() {
    var label121049260345 = new kony.ui.Label({
        "id": "label121049260345",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var calendar118082077329776 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar118082077329776",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label121049260346 = new kony.ui.Label({
        "id": "label121049260346",
        "isVisible": true,
        "skin": "lblSub",
        "text": "GridOnScreen view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var calendar118082077329786 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar118082077329786",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_ONSCREEN
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "data": {},
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER,
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label118082077329800 = new kony.ui.Label({
        "id": "label118082077329800",
        "isVisible": true,
        "skin": "lblSub",
        "text": "GridPopup view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var calendar118082077329814 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar118082077329814",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_POPUP
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "data": {},
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER,
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label118082077329845 = new kony.ui.Label({
        "id": "label118082077329845",
        "isVisible": true,
        "skin": "lblSub",
        "text": "WheelOnScreen view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var calendar118082077329855 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar118082077329855",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_WHEEL_ONSCREEN
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label118082077329869 = new kony.ui.Label({
        "id": "label118082077329869",
        "isVisible": true,
        "skin": "lblSub",
        "text": "WheelPopup view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var calendar118082077329879 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calFocus",
        "id": "calendar118082077329879",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_WHEEL_POPUP
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    frmCal.add(label121049260345, calendar118082077329776, label121049260346, calendar118082077329786, label118082077329800, calendar118082077329814, label118082077329845, calendar118082077329855, label118082077329869, calendar118082077329879);
};

function frmCalGlobals() {
    frmCal = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCal,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCal",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Calender"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmCal.info = {
        "kuid": "p2kwiet974599865524"
    };
};