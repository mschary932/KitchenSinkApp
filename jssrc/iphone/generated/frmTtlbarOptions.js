function addWidgetsfrmTtlbarOptions() {
    var button117989725234834 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234834",
        "isVisible": true,
        "onClick": p2kwiet9745998653198_button117989725234834_onClick_seq0,
        "skin": "btnNormal",
        "text": "Default titlebar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button117989725234842 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234842",
        "isVisible": true,
        "onClick": p2kwiet9745998653198_button117989725234842_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with background color"
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
    var button117989725234848 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234848",
        "isVisible": true,
        "onClick": p2kwiet9745998653198_button117989725234848_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with background image"
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
    var button117989725234854 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234854",
        "isVisible": true,
        "onClick": p2kwiet9745998653198_button117989725234854_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with custom left & right buttons"
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
    frmTtlbarOptions.add(button117989725234834, button117989725234842, button117989725234848, button117989725234854);
};

function frmTtlbarOptionsGlobals() {
    frmTtlbarOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarOptions,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "TitleBar"
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
    frmTtlbarOptions.info = {
        "kuid": "p2kwiet9745998653198"
    };
};