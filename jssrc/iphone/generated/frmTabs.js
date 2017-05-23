function addWidgetsfrmTabs() {
    var button117989725229932 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725229932",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button117989725229932_onClick_seq0,
        "skin": "btnNormal",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 15, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1041822331265 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1041822331265",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1041822331265_onClick_seq0,
        "skin": "btnNormal",
        "text": "Collapsible view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1041822331266 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1041822331266",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1041822331266_onClick_seq0,
        "skin": "btnNormal",
        "text": "Page view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1181029310128010 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310128010",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1181029310128010_onClick_seq0,
        "skin": "btnNormal",
        "text": "Toggle tabs"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1181029310128024 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310128024",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1181029310128024_onClick_seq0,
        "skin": "btnNormal",
        "text": "Tab image positions"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1181029310128038 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1181029310128038",
        "isVisible": true,
        "onClick": p2kwiet12889314953034_button1181029310128038_onClick_seq0,
        "skin": "btnNormal",
        "text": "Screen level tabpane"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmTabs.add(button117989725229932, button1041822331265, button1041822331266, button1181029310128010, button1181029310128024, button1181029310128038);
};

function frmTabsGlobals() {
    frmTabs = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTabs,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTabs",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Tabs"
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
    frmTabs.info = {
        "kuid": "p2kwiet12889314953034"
    };
};