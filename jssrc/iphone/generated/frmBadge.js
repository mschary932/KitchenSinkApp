function addWidgetsfrmBadge() {
    var label1927359800104093 = new kony.ui.Label({
        "id": "label1927359800104093",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click the below button to observe Badge on button widget and application icon"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnBadge = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnBadge",
        "isVisible": true,
        "onClick": p2kwiet1288931495321_btnBadge_onClick_seq0,
        "skin": "btnNormal",
        "text": "Click to change the badge counter"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 25, 4, 2],
        "marginInPixel": false,
        "padding": [4, 10, 4, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmBadge.add(label1927359800104093, btnBadge);
};

function frmBadgeGlobals() {
    frmBadge = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBadge,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmBadge",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495321_frmBadge_preshow_seq0,
        "skin": "frm",
        "title": "Badge"
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