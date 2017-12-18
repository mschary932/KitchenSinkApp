function addWidgetsfrmAclmeterOptions() {
    var button1927359800104630 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800104630",
        "isVisible": true,
        "onClick": p2kwiet128893149516_button1927359800104630_onClick_seq0,
        "skin": "btnNormal",
        "text": "Current accelerometer data"
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
    var button1927359800104641 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800104641",
        "isVisible": true,
        "onClick": p2kwiet128893149516_button1927359800104641_onClick_seq0,
        "skin": "btnNormal",
        "text": "Start monitoring acceleration"
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
    var button1927359800104647 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800104647",
        "isVisible": true,
        "onClick": p2kwiet128893149516_button1927359800104647_onClick_seq0,
        "skin": "btnNormal",
        "text": "Register shake event"
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
    frmAclmeterOptions.add(button1927359800104630, button1927359800104641, button1927359800104647);
};

function frmAclmeterOptionsGlobals() {
    frmAclmeterOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAclmeterOptions,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAclmeterOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Accelerometer"
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
};