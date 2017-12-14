function addWidgetsfrmFormImgBck() {
    var label192735980025608 = new kony.ui.Label({
        "id": "label192735980025608",
        "isVisible": true,
        "skin": "lblBlackBold",
        "text": "This is the form with image background"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 1],
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmFormImgBck.add(label192735980025608);
};

function frmFormImgBckGlobals() {
    frmFormImgBck = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormImgBck,
        "enabledForIdleTimeout": false,
        "id": "frmFormImgBck",
        "needAppMenu": true,
        "skin": "frmImg",
        "title": "Form"
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