function addWidgetsfrmHome() {
    var hbox11819528316870 = new kony.ui.Box({
        "id": "hbox11819528316870",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 16, 10, 10],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox11819528316887 = new kony.ui.Box({
        "id": "vbox11819528316887",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 34,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 0, 4, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnUInterface = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnUInterface",
        "isVisible": true,
        "onClick": p2kwiet12889314955336_btnUInterface_onClick_seq0,
        "skin": "btnUInterfaceSkn"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblUInterface = new kony.ui.Label({
        "id": "lblUInterface",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "UI Interface"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [14, 4, 14, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox11819528316887.add(btnUInterface, lblUInterface);
    var vbox11819528317011 = new kony.ui.Box({
        "id": "vbox11819528317011",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 34,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 0, 4, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnFrmAnimations = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnFrmAnimations",
        "isVisible": true,
        "onClick": p2kwiet12889314955336_btnFrmAnimations_onClick_seq0,
        "skin": "btnFormAniSkn"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmAnimations = new kony.ui.Label({
        "id": "lblFrmAnimations",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Form Animations"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 4, 12, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox11819528317011.add(btnFrmAnimations, lblFrmAnimations);
    var vbox11819528317029 = new kony.ui.Box({
        "id": "vbox11819528317029",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 32,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 0, 4, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnDvcFeatures = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnDvcFeatures",
        "isVisible": true,
        "onClick": p2kwiet12889314955336_btnDvcFeatures_onClick_seq0,
        "skin": "btnDeviceFeaturesSkn"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDeviceFeatures = new kony.ui.Label({
        "id": "lblDeviceFeatures",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Device Features"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 4, 12, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox11819528317029.add(btnDvcFeatures, lblDeviceFeatures);
    hbox11819528316870.add(vbox11819528316887, vbox11819528317011, vbox11819528317029);
    var lnkFeedback = new kony.ui.Link({
        "focusSkin": "lnkFocus",
        "id": "lnkFeedback",
        "isVisible": true,
        "onClick": p2kwiet12889314955336_lnkFeedback_onClick_seq0,
        "skin": "lnkTransparent",
        "text": "Provide feedback"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 0, 2, 4],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHome.add(hbox11819528316870, lnkFeedback);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frm",
        "title": "UI Library"
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
    frmHome.info = {
        "kuid": "p2kwiet12889314955336"
    };
};