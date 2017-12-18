function addWidgetsfrmCameraOptions() {
    var button1927508755138051 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138051",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138051_onClick_seq0,
        "skin": "btnNormal",
        "text": "Basic camera"
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
    var button1927508755138061 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138061",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138061_onClick_seq0,
        "skin": "btnNormal",
        "text": "Camera with form overlay"
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
    var button1927508755138075 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138075",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138075_onClick_seq0,
        "skin": "btnNormal",
        "text": "Camera access modes"
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
    var button1927508755138081 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927508755138081",
        "isVisible": true,
        "onClick": p2kwiet1288931495574_button1927508755138081_onClick_seq0,
        "skin": "btnNormal",
        "text": "Capture orientation"
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
    frmCameraOptions.add(button1927508755138051, button1927508755138061, button1927508755138075, button1927508755138081);
};

function frmCameraOptionsGlobals() {
    frmCameraOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraOptions,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCameraOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Camera"
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
};