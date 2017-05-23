function addWidgetsfrmBrowserOptions() {
    var btnStaticHTML = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnStaticHTML",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_btnStaticHTML_onClick_seq0,
        "skin": "btnNormal",
        "text": "Browser with static content"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 15, 12, 15],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnDynamicURL = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnDynamicURL",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_btnDynamicURL_onClick_seq0,
        "skin": "btnNormal",
        "text": "Browser with dynamic content"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 0, 12, 15],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnInLineBrowser = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnInLineBrowser",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_btnInLineBrowser_onClick_seq0,
        "skin": "btnNormal",
        "text": "Browser with inline Navigation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 0, 12, 12],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192840248542398 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192840248542398",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_button192840248542398_onClick_seq0,
        "skin": "btnNormal",
        "text": "Detect Telephone numbers"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 0, 12, 15],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192840248542498 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192840248542498",
        "isVisible": true,
        "onClick": p2kwiet1288931495410_button192840248542498_onClick_seq0,
        "skin": "btnNormal",
        "text": "Enable Zoom property of Browser"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 0, 12, 15],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmBrowserOptions.add(btnStaticHTML, btnDynamicURL, btnInLineBrowser, button192840248542398, button192840248542498);
};

function frmBrowserOptionsGlobals() {
    frmBrowserOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowserOptions,
        "enabledForIdleTimeout": false,
        "id": "frmBrowserOptions",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495410_frmBrowserOptions_preshow_seq0,
        "title": "Browser"
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
    frmBrowserOptions.info = {
        "kuid": "p2kwiet1288931495410"
    };
};