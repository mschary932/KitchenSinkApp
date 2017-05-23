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
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [14, 0, 15, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnInlineBack = new kony.ui.Button({
        "focusSkin": "btnFocHalfRoundLeft",
        "id": "btnInlineBack",
        "isVisible": true,
        "onClick": p2kwiet12889314953590_btnInlineBack_onClick_seq0,
        "skin": "btnLeft",
        "text": "Back"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnInlineForward = new kony.ui.Button({
        "focusSkin": "btnFocHalfRound",
        "id": "btnInlineForward",
        "isVisible": true,
        "onClick": p2kwiet12889314953590_btnInlineForward_onClick_seq0,
        "skin": "btnMiddle",
        "text": "Forward"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnInlineReload = new kony.ui.Button({
        "focusSkin": "btnFocHalfRoundRight",
        "id": "btnInlineReload",
        "isVisible": true,
        "onClick": p2kwiet12889314953590_btnInlineReload_onClick_seq0,
        "skin": "btnRight",
        "text": "Reload"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 7, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxInLineBrowser.add(btnInlineBack, btnInlineForward, btnInlineReload);
    var hbox1930135169595878 = new kony.ui.Box({
        "id": "hbox1930135169595878",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false
    }, {});
    hbox1930135169595878.add(brwDemo);
    frmBrowser.add(hbxInLineBrowser, hbox1930135169595878);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "backButtonSkin": "btnBack",
        "directChildrenIDs": ["brwDemo", "btnInlineBack", "btnInlineForward", "btnInlineReload", "hbox1930135169595878", "hbxBrowserTabSPA", "hbxInLineBrowser", "lblBrowserTabSPA"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "showBackButton": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmBrowser.info = {
        "kuid": "p2kwiet12889314953590"
    };
};