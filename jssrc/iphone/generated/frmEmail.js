function addWidgetsfrmEmail() {
    var button1930040990146518 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990146518",
        "isVisible": true,
        "onClick": p2kwiet1288931495966_button1930040990146518_onClick_seq0,
        "skin": "btnNormal",
        "text": "Email without attachment"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1930040990146529 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990146529",
        "isVisible": true,
        "onClick": p2kwiet1288931495966_button1930040990146529_onClick_seq0,
        "skin": "btnNormal",
        "text": "Email with attachment"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmEmail.add(button1930040990146518, button1930040990146529);
};

function frmEmailGlobals() {
    frmEmail = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEmail,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmEmail",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Email"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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