function addWidgetsfrmSegViews() {
    var button117989725232057 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725232057",
        "isVisible": true,
        "onClick": p2kwiet12889314952885_button117989725232057_onClick_seq0,
        "skin": "btnNormal",
        "text": "Table view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button117989725232069 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725232069",
        "isVisible": true,
        "onClick": p2kwiet12889314952885_button117989725232069_onClick_seq0,
        "skin": "btnNormal",
        "text": "Page view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button117989725232081 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button117989725232081",
        "isVisible": true,
        "onClick": p2kwiet12889314952885_button117989725232081_onClick_seq0,
        "skin": "btnNormal",
        "text": "Coverflow view"
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
    var button192735980060449 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192735980060449",
        "isVisible": true,
        "onClick": p2kwiet12889314952885_button192735980060449_onClick_seq0,
        "skin": "btnNormal",
        "text": "Page indicator at bottom"
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
    frmSegViews.add(button117989725232057, button117989725232069, button117989725232081, button192735980060449);
};

function frmSegViewsGlobals() {
    frmSegViews = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegViews,
        "enabledForIdleTimeout": false,
        "id": "frmSegViews",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
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