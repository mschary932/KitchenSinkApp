function addWidgetsfrmPopup() {
    var label1927359800105346 = new kony.ui.Label({
        "id": "label1927359800105346",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click the below button to observe the Popup anchoring from bottom of the form"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 12, 6, 12],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnShowPopup = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnShowPopup",
        "isVisible": true,
        "onClick": p2kwiet12889314951904_btnShowPopup_onClick_seq0,
        "skin": "btnNormal",
        "text": "Click here"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 0, 12, 12],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmPopup.add(label1927359800105346, btnShowPopup);
};

function frmPopupGlobals() {
    frmPopup = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPopup,
        "enabledForIdleTimeout": false,
        "id": "frmPopup",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Popup"
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