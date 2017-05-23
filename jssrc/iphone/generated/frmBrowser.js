function addWidgetsfrmBrowser() {
    var hbxInLineBrowser = new kony.ui.Box({
        "id": "hbxInLineBrowser",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 15, 4, 15],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnInlineBack = new kony.ui.Button({
        "focusSkin": "btnFocHalfRoundLeft",
        "id": "btnInlineBack",
        "isVisible": true,
        "onClick": p2kwiet1288931495365_btnInlineBack_onClick_seq0,
        "skin": "btnLeft",
        "text": "Back"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnInlineForward = new kony.ui.Button({
        "focusSkin": "btnFocHalfRound",
        "id": "btnInlineForward",
        "isVisible": true,
        "onClick": p2kwiet1288931495365_btnInlineForward_onClick_seq0,
        "skin": "btnMiddle",
        "text": "Forward"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnInlineReload = new kony.ui.Button({
        "focusSkin": "btnFocHalfRoundRight",
        "id": "btnInlineReload",
        "isVisible": true,
        "onClick": p2kwiet1288931495365_btnInlineReload_onClick_seq0,
        "skin": "btnRight",
        "text": "Reload"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbxInLineBrowser.add(btnInlineBack, btnInlineForward, btnInlineReload);
    var brwDemo = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "id": "brwDemo",
        "isVisible": true,
        "screenLevelWidget": false,
        "text": "Browser"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [1, 0, 1, 1],
        "marginInPixel": true
    }, {});
    frmBrowser.add(hbxInLineBrowser, brwDemo);
};

function frmBrowserGlobals() {
    frmBrowser = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowser,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmBrowser",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Browser"
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
    frmBrowser.info = {
        "kuid": "p2kwiet1288931495365"
    };
};