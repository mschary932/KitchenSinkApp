function addWidgetsfrmImage() {
    var label193382457630 = new kony.ui.Label({
        "id": "label193382457630",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Different scale mode options of image widget"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 15, 12, 10],
        "marginInPixel": true,
        "padding": [5, 5, 5, 5],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnOne = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnOne",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_btnOne_onClick_seq0,
        "skin": "btnNormal",
        "text": "Fit to dimensions"
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnTwo = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnTwo",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_btnTwo_onClick_seq0,
        "skin": "btnNormal",
        "text": "Maintain aspect ratio"
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnThree = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnThree",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_btnThree_onClick_seq0,
        "skin": "btnNormal",
        "text": "Crop"
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button11798972521392 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button11798972521392",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_button11798972521392_onClick_seq0,
        "skin": "btnNormal",
        "text": "URL based image scale modes"
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmImage.add(label193382457630, btnOne, btnTwo, btnThree, button11798972521392);
};

function frmImageGlobals() {
    frmImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImage,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmImage",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Image "
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
};