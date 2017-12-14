function addWidgetsfrmTtlbarOptions() {
    var button117989725234834 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234834",
        "isVisible": true,
        "onClick": p2kwiet12889314953198_button117989725234834_onClick_seq0,
        "skin": "btnNormal",
        "text": "Default titlebar"
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
    var button117989725234842 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234842",
        "isVisible": true,
        "onClick": p2kwiet12889314953198_button117989725234842_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with background color"
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
    var button117989725234848 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234848",
        "isVisible": true,
        "onClick": p2kwiet12889314953198_button117989725234848_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with background image"
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
    frmTtlbarOptions.add(button117989725234834, button117989725234842, button117989725234848);
};

function frmTtlbarOptionsGlobals() {
    frmTtlbarOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarOptions,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarOptions",
        "needAppMenu": true,
        "skin": "frm",
        "title": "TitleBar"
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