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
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
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
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
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
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmAclmeterOptions.add(button1927359800104630, button1927359800104641, button1927359800104647);
};

function frmAclmeterOptionsGlobals() {
    frmAclmeterOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAclmeterOptions,
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