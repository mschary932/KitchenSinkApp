function addWidgetsfrmSwitch() {
    var hbox11798972525384 = new kony.ui.Box({
        "id": "hbox11798972525384",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 24, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label11798972525389 = new kony.ui.Label({
        "id": "label11798972525389",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default View"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var switch11798972525390 = new kony.ui.Switch({
        "id": "switch11798972525390",
        "isVisible": true,
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "skin": "swtNormal"
    }, {
        "containerWeight": 25,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    hbox11798972525384.add(label11798972525389, switch11798972525390);
    var hbox118082077327018 = new kony.ui.Box({
        "id": "hbox118082077327018",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118082077327020 = new kony.ui.Label({
        "id": "label118082077327020",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Custom color"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var switch118082077327030 = new kony.ui.Switch({
        "id": "switch118082077327030",
        "isVisible": true,
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "skin": "switchCustomColorBG"
    }, {
        "containerWeight": 25,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox118082077327018.add(label118082077327020, switch118082077327030);
    var hbox118082077327072 = new kony.ui.Box({
        "id": "hbox118082077327072",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118082077327074 = new kony.ui.Label({
        "id": "label118082077327074",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Custom text & Font"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var switch118082077327084 = new kony.ui.Switch({
        "id": "switch118082077327084",
        "isVisible": true,
        "leftSideText": "Yes",
        "rightSideText": "No",
        "skin": "switchCustomFont"
    }, {
        "containerWeight": 25,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox118082077327072.add(label118082077327074, switch118082077327084);
    frmSwitch.add(hbox11798972525384, hbox118082077327018, hbox118082077327072);
};

function frmSwitchGlobals() {
    frmSwitch = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSwitch,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmSwitch",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Switch"
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
    frmSwitch.info = {
        "kuid": "p2kwiet12889314952934"
    };
};