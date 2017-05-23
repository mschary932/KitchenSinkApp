function addWidgetsfrmBrowser() {
    var hbxInLineBrowser = new kony.ui.Box({
        "enableCache": false,
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
        "enableCache": false,
        "focusSkin": "btnFocHalfRoundLeft",
        "id": "btnInlineBack",
        "isVisible": true,
        "onClick": p2kwiet1288931495373_btnInlineBack_onClick_seq0,
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
    }, {});
    var btnInlineForward = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocHalfRound",
        "id": "btnInlineForward",
        "isVisible": true,
        "onClick": p2kwiet1288931495373_btnInlineForward_onClick_seq0,
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
    }, {});
    var btnInlineReload = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocHalfRoundRight",
        "id": "btnInlineReload",
        "isVisible": true,
        "onClick": p2kwiet1288931495373_btnInlineReload_onClick_seq0,
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
    }, {});
    hbxInLineBrowser.add(btnInlineBack, btnInlineForward, btnInlineReload);
    var brwDemo = new kony.ui.Browser({
        "detectTelNumber": false,
        "enableCache": false,
        "enableZoom": false,
        "id": "brwDemo",
        "isVisible": true,
        "screenLevelWidget": true,
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
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "headers": [hBoxTitle],
        "id": "frmBrowser",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495373_frmBrowser_preshow_seq0,
        "skin": "frm",
        "title": "Browser"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["brwDemo", "btnInlineBack", "btnInlineForward", "btnInlineReload", "hbxInLineBrowser"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmBrowser.info = {
        "kuid": "frmBrowserWinPhone8"
    };
};