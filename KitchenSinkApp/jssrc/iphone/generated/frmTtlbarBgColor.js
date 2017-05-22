function addWidgetsfrmTtlbarBgColor() {
    var labeltitleBack = new kony.ui.Label({
        "id": "labeltitleBack",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of  titlebar ( with background color ) above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 7, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmTtlbarBgColor.add(labeltitleBack);
};

function frmTtlbarBgColorGlobals() {
    frmTtlbarBgColor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarBgColor,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarBgColor",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Titlebar"
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
        "titleBarSkin": "titlestudio1"
    });
    frmTtlbarBgColor.info = {
        "kuid": "p2kwiet9745998653178"
    };
};