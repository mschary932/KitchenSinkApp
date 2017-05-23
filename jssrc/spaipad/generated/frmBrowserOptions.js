function addWidgetsfrmBrowserOptions() {
    var hbxBrowserOptions = new kony.ui.Box({
        "id": "hbxBrowserOptions",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnStaticHTML = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnStaticHTML",
        "isVisible": true,
        "onClick": p2kwiet12889314953600_btnStaticHTML_onClick_seq0,
        "skin": "btnNormal",
        "text": "Browser with static content"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnDynamicURL = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnDynamicURL",
        "isVisible": true,
        "onClick": p2kwiet12889314953600_btnDynamicURL_onClick_seq0,
        "skin": "btnNormal",
        "text": "Browser with dynamic content"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox192926642422365.add(btnStaticHTML, btnDynamicURL);
    hbxBrowserOptions.add(vbox192926642422365);
    frmBrowserOptions.add(hbxBrowserOptions);
};

function frmBrowserOptionsGlobals() {
    frmBrowserOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowserOptions,
        "enabledForIdleTimeout": false,
        "id": "frmBrowserOptions",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmBrowserOptions.info = {
        "kuid": "p2kwiet12889314953600"
    };
};