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
        "marginInPixel": false,
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
        "marginInPixel": false,
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button117989725234854 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725234854",
        "isVisible": true,
        "onClick": p2kwiet12889314953198_button117989725234854_onClick_seq0,
        "skin": "btnNormal",
        "text": "Titlebar with custom left & right buttons"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmTtlbarOptions.add(button117989725234834, button117989725234842, button117989725234848, button117989725234854);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmTtlbarOptions.info = {
        "kuid": "p2kwiet12889314953198"
    };
};