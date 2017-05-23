function addWidgetsfrmAppSettings() {
    var button1927359800106146 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800106146",
        "isVisible": true,
        "onClick": p2kwiet1288931495280_button1927359800106146_onClick_seq0,
        "skin": "btnNormal",
        "text": "Read settings"
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
    var button1927359800106157 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800106157",
        "isVisible": true,
        "onClick": p2kwiet1288931495280_button1927359800106157_onClick_seq0,
        "skin": "btnNormal",
        "text": "Write settings"
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
    frmAppSettings.add(button1927359800106146, button1927359800106157);
};

function frmAppSettingsGlobals() {
    frmAppSettings = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAppSettings,
        "enabledForIdleTimeout": false,
        "id": "frmAppSettings",
        "needAppMenu": true,
        "skin": "frm",
        "title": "App settings"
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
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAppSettings.info = {
        "kuid": "p2kwiet1288931495280"
    };
};