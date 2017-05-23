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
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmPopup.add(label1927359800105346, btnShowPopup);
};

function frmPopupGlobals() {
    frmPopup = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPopup,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmPopup.info = {
        "kuid": "p2kwiet12889314951904"
    };
};