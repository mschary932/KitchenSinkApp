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
        "margin": [2, 5, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
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
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
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
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
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
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
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
        "margin": [1, 15, 1, 1],
        "marginInPixel": true
    }, {});
    frmBrowser.add(hbxInLineBrowser, brwDemo);
};

function frmBrowserGlobals() {
    frmBrowser = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowser,
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
};