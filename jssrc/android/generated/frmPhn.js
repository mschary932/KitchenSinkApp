function addWidgetsfrmPhn() {
    var label192735980025711 = new kony.ui.Label({
        "id": "label192735980025711",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default phone"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var phone103994549624276 = new kony.ui.Button({
        "focusSkin": "phoneFocus",
        "id": "phone103994549624276",
        "isVisible": true,
        "onClick": makeCall,
        "skin": "phoneNormal",
        "text": "123-456-7890"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [3, 11, 3, 11],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label192735980025719 = new kony.ui.Label({
        "id": "label192735980025719",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Phone with image background"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var phone192735980025729 = new kony.ui.Button({
        "focusSkin": "phoneFocus",
        "id": "phone192735980025729",
        "isVisible": true,
        "onClick": makeCall,
        "skin": "phnImg",
        "text": "123-456-7890"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmPhn.add(label192735980025711, phone103994549624276, label192735980025719, phone192735980025729);
};

function frmPhnGlobals() {
    frmPhn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPhn,
        "enabledForIdleTimeout": false,
        "id": "frmPhn",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Phone"
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