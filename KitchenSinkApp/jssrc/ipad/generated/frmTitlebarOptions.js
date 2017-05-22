function addWidgetsfrmTitlebarOptions() {
    var button1927359800101064 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800101064",
        "isVisible": true,
        "onClick": p2kwiet9745998654882_button1927359800101064_onClick_seq0,
        "skin": "btnNormal",
        "text": "Default titlebar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 4, 6, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1927359800101074 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800101074",
        "isVisible": true,
        "onClick": p2kwiet9745998654882_button1927359800101074_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1927359800101084 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800101084",
        "isVisible": true,
        "onClick": p2kwiet9745998654882_button1927359800101084_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with background image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1927359800101094 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800101094",
        "isVisible": true,
        "onClick": p2kwiet9745998654882_button1927359800101094_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with left & right buttons"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmTitlebarOptions.add(button1927359800101064, button1927359800101074, button1927359800101084, button1927359800101094);
};

function frmTitlebarOptionsGlobals() {
    frmTitlebarOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarOptions,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Titlebar options"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
    frmTitlebarOptions.info = {
        "kuid": "p2kwiet9745998654882"
    };
};