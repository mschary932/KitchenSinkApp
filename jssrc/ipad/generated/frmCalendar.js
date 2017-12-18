function addWidgetsfrmCalendar() {
    var hbxCalendars = new kony.ui.Box({
        "id": "hbxCalendars",
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
    var label121049260345 = new kony.ui.Label({
        "id": "label121049260345",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label121049260346 = new kony.ui.Label({
        "id": "label121049260346",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "GridOnScreen view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "data": {},
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER,
        "hideDaysHeader": false,
        "hideMonthsHeader": false,
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label118082077329800 = new kony.ui.Label({
        "id": "label118082077329800",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "GridPopup view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "data": {},
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER,
        "hideDaysHeader": false,
        "hideMonthsHeader": false,
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label118082077329845 = new kony.ui.Label({
        "id": "label118082077329845",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "WheelOnScreen view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var label118082077329869 = new kony.ui.Label({
        "id": "label118082077329869",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "WheelPopup view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    vbox192926642422365.add(label121049260345, calendar118082077329776, label121049260346, calendar118082077329786, label118082077329800, calendar118082077329814, label118082077329845, calendar118082077329855, label118082077329869, calendar118082077329879);
    hbxCalendars.add(vbox192926642422365);
    frmCalendar.add(hbxCalendars);
};

function frmCalendarGlobals() {
    frmCalendar = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCalendar,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCalendar",
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
};